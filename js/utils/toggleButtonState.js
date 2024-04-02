function enableButton(target) {
  target.removeAttribute("disabled");
}
function disableButton(target) {
  target.setAttribute("disabled", "disabled");
}

export { enableButton, disableButton };
