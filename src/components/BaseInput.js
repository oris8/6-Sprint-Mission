import React from "react";
import styled from "styled-components";

const BaseInput = ({
  className = "",
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  accept = null,
  autoComplete = "off",
  ...rest
}) => {
  return (
    <StyledInput
      className={className}
      id={label}
      name={label}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      accept={accept}
      autoComplete={autoComplete}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 16px;
  font-size: 16px;
  background-color: var(--color-cool-gray-100);
  border-radius: 12px;

  &::placeholder {
    color: var(--color-cool-gray-400);
  }

  &:focus {
    outline: #3692ff solid 1.5px;
  }

  /* input 자동완성 시 자동 스타일 적용 초기화 */

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  :autofill,
  :autofill:hover,
  :autofill:focus,
  :autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export default BaseInput;
