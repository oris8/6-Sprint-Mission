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
import { axiosInstance } from "@/lib/api/dispatcher";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });
  const router = useRouter();
  const [isValidation, setIsValidation] = useState();
  const { user, login } = useAuth();
  //@ts-ignore
  function handleChange(e) {
    console.log(e.target);
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  //@ts-ignore
  async function handleSubmit(e) {
    e.preventDefault();

    if (values.password !== values.passwordConfirmation) {
      console.log("warn", "비밀번호가 일치하지 않습니다.");
      return;
    }
    const { nickname, email, password, passwordConfirmation } = values;

    await axiosInstance.post("/auth/signUp", {
      nickname: nickname,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    });
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
            sizes="100 100"
          />
        </div>
      </h1>
      <form>
        <UserFormGroup
          label="email"
          type="email"
          value={values.email}
          placeholder="이메일을 입력해주세요"
          //@ts-ignore
          onChange={handleChange}
        />
        <UserFormGroup
          label="nickname"
          type="text"
          value={values.nickname}
          placeholder="닉네임을 입력해주세요"
          //@ts-ignore
          onChange={handleChange}
        />
        <PasswordFormGroup
          label="password"
          placeholder="비밀번호를 입력해주세요"
          value={values.password}
          //@ts-ignore
          onChange={handleChange}
        />
        <PasswordFormGroup
          label="passwordConfirmation"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          value={values.passwordConfirmation}
          //@ts-ignore
          onChange={handleChange}
        />
        <BaseButton
          className="mx-w-400 w-full md:max-w-[640px]"
          type="submit"
          disabled={false}
          //@ts-ignore
          onClick={handleSubmit}
        >
          회원가입
        </BaseButton>
      </form>
      <SocialLogin />
      <div className="mb-160 mt-24 flex justify-center text-15 font-medium text-gray-800">
        <p>이미 회원이신가요?</p>
        <Link
          className="text-blue-500 ml-8 bg-transparent underline"
          href="/login"
        >
          로그인
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
