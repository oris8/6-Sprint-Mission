import {
  showErrorInput,
  removeErrorInput,
} from "../utils/inputErrorMsgHandler.js";

function checkLength(value) {
  return value.length >= 4 && value.length <= 12;
}

function checkLetter(value) {
  return !/^[\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/.test(value);
}

export default function isUsernameValidation($username) {
  if (!$username.value)
    return showErrorInput($username, "닉네임을 입력해주세요");
  if (!checkLetter($username.value))
    return showErrorInput($username, "올바른 값을 입력해주세요");
  if (!checkLength($username.value))
    return showErrorInput($username, "4-12자 이내로 입력해주세요");
  else {
    removeErrorInput($username);
  }

  $username.classList.remove("input--border-warning");
  $username.classList.add("input--border-primary");
}
