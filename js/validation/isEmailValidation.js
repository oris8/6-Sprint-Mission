import { showErrorInput, removeErrorInput } from "./ui.js";

function checkEmailRegex(value) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
}

export default function isEmailValidation(target) {
  if (!target.value) return showErrorInput(target, "이메일을 입력해주세요");
  if (!checkEmailRegex(target.value))
    return showErrorInput(target, "잘못된 이메일 형식입니다");
  else removeErrorInput(target);

  target.classList.remove("input--border-warning");
  target.classList.add("input--border-primary");
}
