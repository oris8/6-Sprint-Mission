import { z } from "zod";

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해 주세요.")
    .email("올바른 이메일 주소가 아닙니다."),
  password: z.string().min(1, "비밀번호를 입력해 주세요."),
});

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, "이메일을 입력해 주세요.")
      .email("올바른 이메일 주소가 아닙니다."),
    password: z
      .string()
      .min(1, "비밀번호를 입력해 주세요.")
      .refine((val) => passwordRegex.test(val), {
        message: "비밀번호는 영문자와 숫자를 조합하여 8자 이상 입력해 주세요.",
      }),
    confirmPassword: z.string().min(1, "비밀번호 확인을 입력해 주세요."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않아요.",
    path: ["confirmPassword"],
  });
