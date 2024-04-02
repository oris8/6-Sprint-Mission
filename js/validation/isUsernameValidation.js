import { showErrorInput, removeErrorInput } from "./ui.js";

function checkLength(value) {
  return value.length >= 4 && value.length <= 12;
}

function checkLetter(value) {
  return !/^[\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/.test(value);
}

export default function isUsernameValidation(target) {
  if (!target.value) return showErrorInput(target, "닉네임을 입력해주세요");
  if (!checkLetter(target.value))
    return showErrorInput(target, "올바른 값을 입력해주세요");
  if (!checkLength(target.value))
    return showErrorInput(target, "4-12자 이내로 입력해주세요");
  else {
    removeErrorInput(target);
  }

  target.classList.remove("input--border-warning");
  target.classList.add("input--border-primary");
}
