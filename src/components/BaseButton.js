import styled, { css } from "styled-components";

function Button({
  children,
  className,
  onClick,
  onSubmit,
  disabled,
  size = "small",
  type = "button",
}) {
  return (
    <StyledButton
      type={type}
      className={className}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      size={size}
    >
      {children}
    </StyledButton>
  );
}

const buttonSize = {
  small: css`
    width: 128px;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
  `,
  large: css`
    width: 355px;
    height: 56px;
    border-radius: 40px;
    font-size: 20px;
  `,
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blue);
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  ${(props) => buttonSize[props.size]}

  &:hover {
    background-color: #1967d6;
  }

  &:active {
    background-color: #1251aa;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

export default Button;
