import {
  showErrorInput,
  removeErrorInput,
} from "../utils/inputErrorMsgHandler.js";

function checkEmailRegex(value) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
}

export default function isEmailValidation($email) {
  if (!$email.value) return showErrorInput($email, "이메일을 입력해주세요");
  if (!checkEmailRegex($email.value))
    return showErrorInput($email, "잘못된 이메일 형식입니다");
  else removeErrorInput($email);

  $email.classList.remove("input--border-warning");
  $email.classList.add("input--border-primary");
}
