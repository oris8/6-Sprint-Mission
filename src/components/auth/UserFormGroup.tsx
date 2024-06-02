import BaseInput from "@/components/BaseInput";
import EyeIcon from "/public/images/ic_eye.svg";
import EyeOffIcon from "/public/images/ic_eye-off.svg";
import { useState } from "react";

type Label = "email" | "nickname" | "password" | "passwordConfirmation";

interface UserFormGroupProps {
  label: Label;
  type?: string;
  value: string;
  placeholder: string;
  errorMsg?: string;
  className?: string;
  onChange: any;
}

const labelTable: Record<Label, string> = {
  email: "이메일",
  nickname: "닉네임",
  password: "비밀번호",
  passwordConfirmation: "비밀번호 확인",
};

export function UserFormGroup({
  label,
  type,
  value,
  placeholder,
  className,
  errorMsg,
  onChange,
}: UserFormGroupProps) {
  const labelName = labelTable[label];

  return (
    <div className={`relative mb-18 flex flex-col gap-8 md:mb-24 ${className}`}>
      <label htmlFor={label} className="text-14 font-bold md:text-18">
        {labelName}
      </label>
      <div className="relative">
        <BaseInput
          label={label}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      {errorMsg && <p className="error-message hidden">{errorMsg}</p>}
    </div>
  );
}

export function PasswordFormGroup({
  label,
  value,
  placeholder,
  className,
  errorMsg,
  onChange,
}: UserFormGroupProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const labelName = labelTable[label];

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <div className={`relative mb-4 flex flex-col gap-2 md:mb-6 ${className}`}>
      <label htmlFor={label} className="text-sm font-bold md:text-lg">
        {labelName}
      </label>
      <div className="relative">
        <BaseInput
          label={label}
          value={value}
          type={isPasswordVisible ? "text" : "password"}
          placeholder={placeholder}
          onChange={onChange}
        />
        <button
          type="button"
          onClick={handleTogglePasswordVisibility}
          className="absolute right-16 top-16 h-24 w-24 bg-transparent"
        >
          {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {errorMsg && <p className="error-message text-red-500">{errorMsg}</p>}
    </div>
  );
}
