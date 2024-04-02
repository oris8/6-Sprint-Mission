import { showErrorInput, removeErrorInput } from "./ui.js";

function checkPasswordRegex(value) {
  return /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/.test(
    value
  );
}

function isPasswordValidation(target) {
  if (!target.value) return showErrorInput(target, "비밀번호를 입력해주세요");
  // if (!checkPasswordRegex(target.value))
  //   return showErrorInput(
  //     target,
  //     "8-20자 사이의 영어, 숫자, 특수문자를 입력해주세요"
  //   );
  if (target.value.length < 8)
    return showErrorInput(target, "비밀번호를 8자 이상 입력해주세요");
  else removeErrorInput(target);

  target.classList.remove("input--border-warning");
  target.classList.add("input--border-primary");
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
