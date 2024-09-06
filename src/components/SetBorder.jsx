// Function to add validation error styling
function setErrorBorder(input, errLabel, message, label) {
  input.className = "form-control error";
  errLabel.style.color = "var(--clr-red)";
  errLabel.innerText = message;
  label.style.color = "var(--clr-red)";
}

// Function to remove validation error styling
function removeErrorBorder(input, errLabel, label) {
  if (input.current.className === "form-control error") {
    if (input.current.value != "") {
      input.current.className = "form-control";
      errLabel.current.innerText = "";
      label.current.style.color = "var(--clr-smokey-grey)";
    }
  }
}

export { setErrorBorder, removeErrorBorder };
