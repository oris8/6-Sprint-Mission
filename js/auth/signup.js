import togglePasswordVisibility from "../utils/togglePasswordVisibility.js";
import {
  isUsernameValidation,
  isEmailValidation,
  isPasswordValidation,
  checkPasswordMatch,
  isFormValidation,
} from "../validation/controller.js";
import { enableButton, disableButton } from "../utils/buttonStateHandler.js";

// 비밀번호 보이기/숨기기 토글
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-password-btn"))
    togglePasswordVisibility(e);
});

// 폼 유효성 검사
const $button = document.querySelector(".user-form__btn");
disableButton($button);

document.addEventListener("focusout", (e) => {
  const target = e.target;
  if (e.target.id === "email") isEmailValidation(target);
  if (e.target.id === "username") return isUsernameValidation(target);
  if (e.target.id === "password") {
    isPasswordValidation(target);
    checkPasswordMatch();
  }
  if (e.target.id === "password-check") checkPasswordMatch();
  isFormValidation(e) ? enableButton($button) : disableButton($button);
});
