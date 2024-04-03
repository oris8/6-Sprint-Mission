function enableButton($button) {
  $button.removeAttribute("disabled");
}
function disableButton($button) {
  $button.setAttribute("disabled", "disabled");
}

export { enableButton, disableButton };
