function setErrorBorder(input, message, label) {
  input.className = "form-control error";
  label.innerText = message;
}

function removeErrorBorder(input, label) {}

export { setErrorBorder, removeErrorBorder };
