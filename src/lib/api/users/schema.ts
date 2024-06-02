import { z } from "zod";

const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

const ERROR_MESSAGES = {
  EMAIL_REQUIRED: "이메일을 입력해 주세요.",
  EMAIL_INVALID: "올바른 이메일 주소가 아닙니다.",
  PASSWORD_REQUIRED: "비밀번호를 입력해 주세요.",
  PASSWORD_INVALID:
    "비밀번호는 영문자와 숫자를 조합하여 8자 이상 입력해 주세요.",
  CONFIRM_PASSWORD_REQUIRED: "비밀번호 확인을 입력해 주세요.",
  PASSWORDS_DO_NOT_MATCH: "비밀번호가 일치하지 않아요.",
};

const emailSchema = z
  .string()
  .min(1, ERROR_MESSAGES.EMAIL_REQUIRED)
  .email(ERROR_MESSAGES.EMAIL_INVALID);

const passwordSchema = z
  .string()
  .min(1, ERROR_MESSAGES.PASSWORD_REQUIRED)
  .refine((val) => PASSWORD_REGEX.test(val), {
    message: ERROR_MESSAGES.PASSWORD_INVALID,
  });

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, ERROR_MESSAGES.PASSWORD_REQUIRED),
});

export const signUpSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z
      .string()
      .min(1, ERROR_MESSAGES.CONFIRM_PASSWORD_REQUIRED),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERROR_MESSAGES.PASSWORDS_DO_NOT_MATCH,
    path: ["confirmPassword"],
  });
