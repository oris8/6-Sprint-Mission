import React from "react";
import styled from "styled-components";

import { Input } from "./Input";
import Button from "./BaseButton";

import eyeIcon from "../assets/icon/eye.svg";
import eyeOffIcon from "../assets/icon/eye-off.svg";

const UserFormGroup = ({ label, placeholder, className }) => {
  const labelTable = {
    email: "이메일",
    username: "닉네임",
    password: "비밀번호",
    passwordCheck: "비밀번호 확인",
  };

  const labelName = labelTable[label];

  let type;
  switch (label) {
    case "email":
      type = "email";
      break;
    case "password" || "passwordCheck":
      type = "password";
      break;
    default:
      type = "text";
      break;
  }

  return (
    <StyledUserFormGroup className={className}>
      <label htmlFor={label}>{labelName}</label>
      <div className="user-form__input-box">
        <Input label={label} type={type} placeholder={placeholder} />
        {label.includes("password") && (
          <button type="button" className="toggle-password-btn">
            <i className="icon-eye hidden"></i>
            <i className="icon-eye-off"></i>
          </button>
        )}
      </div>
      <p id={`${label}-error`} className="hidden"></p>
    </StyledUserFormGroup>
  );
};

const StyledUserFormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;

  label {
    font-weight: 700;
    font-size: 14px;
  }

  .user-form__input-box {
    position: relative;
  }

  .toggle-password-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    background: transparent;
  }

  i.icon-eye,
  i.icon-eye-off {
    display: block;
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  i.icon-eye {
    background-image: url(${eyeIcon});
  }

  i.icon-eye-off {
    background-image: url(${eyeOffIcon});
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;

    label {
      font-size: 18px;
      line-height: 21.48px;
    }
  }
`;

const UserForm = ({ type, isValidation = false }) => {
  const [formAction, buttonText] =
    type === "login" ? ["", "로그인"] : ["", "회원가입"];

  return (
    <>
      <StyledUserForm action={formAction} className="user-form">
        <UserFormGroup label="email" placeholder="이메일을 입력해주세요" />
        {type === "signup" && (
          <UserFormGroup label="username" placeholder="닉네임을 입력해주세요" />
        )}
        <UserFormGroup label="password" placeholder="비밀번호를 입력해주세요" />
        {type === "signup" && (
          <UserFormGroup
            label="passwordCheck"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
          />
        )}
        <Button
          className="user-form__btn"
          size="large"
          type="submit"
          disabled={!isValidation}
        >
          {buttonText}
        </Button>
      </StyledUserForm>
    </>
  );
};

const StyledUserForm = styled.form`
  .user-form__btn {
    width: 640px;
  }

  @media screen and (max-width: 767px) {
    .user-form__btn {
      width: 100%;
    }
  }
`;

export default UserForm;
