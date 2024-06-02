"use client";

import Link from "next/link";
import {
  UserFormGroup,
  PasswordFormGroup,
} from "@/components/auth/UserFormGroup";
import Image from "next/image";
import SocialLogin from "@/components/auth/SocialLogin";
import BaseButton from "@/components/BaseButton";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { user, login } = useAuth();
  const [isValidation, setIsValidation] = useState();

  function handleChange(e) {
    console.log(e.target);
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = values;

    //@ts-ignore
    await login({ email, password });
    router.replace("/");
  }

  return (
    <div className="mx-auto w-full max-w-400 px-24 md:max-w-[640px]">
      <h1 className="my-24 flex justify-center md:my-44">
        <div className="relative h-66 w-198 md:h-132 md:w-396">
          <Image
            src="/images/img_panda-logo.svg"
            alt="판다마켓"
            fill
            sizes="100% 100%"
          />
        </div>
      </h1>
      <form>
        <UserFormGroup
          label="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={values.email}
          onChange={handleChange}
        />
        <PasswordFormGroup
          label="password"
          placeholder="비밀번호를 입력해주세요"
          value={values.password}
          onChange={handleChange}
        />
        <BaseButton
          className="mx-w-400 w-full md:max-w-[640px]"
          type="submit"
          disabled={false}
          onClick={handleSubmit}
        >
          로그인
        </BaseButton>
      </form>
      <SocialLogin />
      <div className="mb-160 mt-24 flex justify-center text-15 font-medium text-gray-800">
        <p>판다마켓이 처음이신가요?</p>
        <Link
          className="text-blue-500 ml-8 bg-transparent underline"
          href="/signup"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
