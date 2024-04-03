export function showErrorInput($input, errorMessage) {
  removeErrorInput($input);
  const $errorMsgElement = document.createElement("div");
  $errorMsgElement.classList.add("input--caption-warning");
  $errorMsgElement.textContent = errorMessage;
  $input.parentNode.appendChild($errorMsgElement);
  $input.classList.add("input--border-warning");
}

export function removeErrorInput($input) {
  const siblings = Array.from($input.parentNode.children);
  const $errorMsgElement = siblings.find((sibling) =>
    sibling.classList.contains("input--caption-warning")
  );
  if (!$errorMsgElement) return;
  $errorMsgElement.remove();
}
