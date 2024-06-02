"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import useDataFetch from "@/hooks/useDataFetch";

const AuthContext = createContext({
  user: null,
  isPending: false,
  login: () => {},
  logout: () => {},
  updateMe: () => {},
  setAuthHeaders: () => {},
});

export function AuthProvider({ children, initial }) {
  const { isLoading, error, axiosFetcher } = useDataFetch();
  const [values, setValues] = useState({
    user: null,
    isPending: true,
  });

  const [token, setToken] = useState({
    accessToken: getCookie("accessToken") ?? initial.accessToken,
    refreshToken: getCookie("refreshToken") ?? initial.refreshToken,
  });
  const { accessToken, refreshToken } = token;

  const setAuthHeaders = (options = {}) => ({
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
      "x-refresh-token": refreshToken,
    },
  });

  async function getMe() {
    setValues((prevValues) => ({
      ...prevValues,
      isPending: true,
    }));
    let nextUser = null;
    try {
      const options = setAuthHeaders({ method: "GET", url: "/users/me" });
      const res = await axiosFetcher(options);
      nextUser = res.data;
    } finally {
      setValues((prevValues) => ({
        ...prevValues,
        user: nextUser,
        isPending: false,
      }));
    }
  }

  async function login({ email, password }) {
    const options = {
      method: "POST",
      url: "/auth/signIn",
      data: { email, password },
    };
    const res = await axiosFetcher(options);
    const { accessToken, refreshToken } = res.data;
    setCookie("accessToken", accessToken, { maxAge: 60 * 60 * 24 }); // 1 day
    setCookie("refreshToken", refreshToken, { maxAge: 60 * 60 * 24 });
    setToken({ accessToken, refreshToken });
    await getMe();
  }

  async function logout() {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");

    setValues((prevValues) => ({
      ...prevValues,
      user: null,
    }));
  }

  async function updateMe(formData) {
    const options = setAuthHeaders({
      method: "PATCH",
      url: "/users/me",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    const res = await axiosFetcher(options);
    const nextUser = res.data;
    setValues((prevValues) => ({
      ...prevValues,
      user: nextUser,
    }));
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: values.user,
        isPending: values.isPending,
        login,
        logout,
        updateMe,
        setAuthHeaders,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(required) {
  const context = useContext(AuthContext);
  const router = useRouter();

  if (!context) {
    throw new Error("반드시 AuthProvider 안에서 사용해야 합니다.");
  }

  useEffect(() => {
    if (required && !context.user && !context.isPending) {
      router.replace("/login");
    }
  }, [context.user, context.isPending, required]);

  return context;
}
