import isEmailValidation from "../validation/isEmailValidation.js";
import isUsernameValidation from "../validation/isUsernameValidation.js";
import {
  isPasswordValidation,
  checkPasswordMatch,
} from "../validation/isPasswordValidation.js";

const isFormValidation = () => {
  const $inputs = document.querySelectorAll("input");
  let isValid = true;

  $inputs.forEach((input) => {
    if (
      input.classList.contains("input--border-warning") ||
      input.value === ""
    ) {
      isValid = false;
    }
  });
  return isValid;
};

export {
  isEmailValidation,
  isUsernameValidation,
  isPasswordValidation,
  checkPasswordMatch,
  isFormValidation,
};
