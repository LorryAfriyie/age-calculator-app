function setErrorBorder(input, label, message) {
  input.className = "form-control error";
  label.style.color = "hsl(0, 100%, 67%)";
  label.innerText = message;
}

function removeErrorBorder(input, label) {
  if (input.current.className === "form-control error") {
    if (input.current.value != "") {
      input.current.className = "form-control";
      label.current.innerText = "";
    }
  }
}

export { setErrorBorder, removeErrorBorder };
