import {
  showErrorInput,
  removeErrorInput,
} from "../utils/inputErrorMsgHandler.js";

function checkPasswordRegex(value) {
  return /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/.test(
    value
  );
}

function isPasswordValidation($password) {
  if (!$password.value)
    return showErrorInput($password, "비밀번호를 입력해주세요");
  // if (!checkPasswordRegex($password.value))
  //   return showErrorInput(
  //     $password,
  //     "8-20자 사이의 영어, 숫자, 특수문자를 입력해주세요"
  //   );
  if ($password.value.length < 8)
    return showErrorInput($password, "비밀번호를 8자 이상 입력해주세요");
  else removeErrorInput($password);

  $password.classList.remove("input--border-warning");
  $password.classList.add("input--border-primary");
}

function checkPasswordMatch() {
  const $passwordInput = document.getElementById("password");
  const $passwordCheck = document.getElementById("password-check");
  if ($passwordInput.value !== $passwordCheck.value)
    return showErrorInput($passwordCheck, "비밀번호가 일치하지 않습니다");
  else removeErrorInput($passwordCheck);

  $passwordCheck.classList.remove("input--border-warning");
  $passwordCheck.classList.add("input--border-primary");
}

export { isPasswordValidation, checkPasswordMatch };
