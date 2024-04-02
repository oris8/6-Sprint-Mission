export default function togglePasswordVisibility(e) {
  const $togglePasswordBtn = e.target;
  const $iconEye = $togglePasswordBtn.querySelector("i");

  const $parentNode = e.target.parentNode;
  const $input = $parentNode.querySelector("input");

  $iconEye.classList.toggle("icon-eye-off");
  $iconEye.classList.toggle("icon-eye");

  $iconEye.classList.contains("icon-eye")
    ? $input.setAttribute("type", "text")
    : $input.setAttribute("type", "password");
}
