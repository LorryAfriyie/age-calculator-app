import { setErrorBorder } from "./SetBorder";

const inputNames = ["year", "month", "day"];

// Function to validate the inputs
function checkInput(input, errLabel, message, label) {
  // Check if the name of the input is equal to "year"
  if (input.current.name === inputNames[0]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, errLabel.current, message, label.current);
    else if (input.current.value.trim() > new Date().getFullYear()) {
      setErrorBorder(
        input.current,
        errLabel.current,
        "Must be in the past",
        label.current,
      );
    } else if (input.current.value.trim() <= 0) {
      setErrorBorder(
        input.current,
        errLabel.current,
        "Must be a valid year",
        label.current,
      );
    } else return;
  }

  // Check if the name of the input is equal to "month"
  if (input.current.name === inputNames[1]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, errLabel.current, message, label.current);
    else if (
      input.current.value.trim() > 12 ||
      input.current.value.trim() <= 0
    ) {
      setErrorBorder(
        input.current,
        errLabel.current,
        "Must be a valid month",
        label.current,
      );
    } else return;
  }

  // Check if the name of the input is equal to "day"
  if (input.current.name === inputNames[2]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, errLabel.current, message, label.current);
    else if (
      input.current.value.trim() > 31 ||
      input.current.value.trim() <= 0
    ) {
      setErrorBorder(
        input.current,
        errLabel.current,
        "Must be a valid date",
        label.current,
      );
    } else return;
  }
}

function checkErrors(form) {
  let isValid = true;

  form.current.querySelectorAll(".form-control").forEach((control) => {
    if (control.classList.contains("error")) {
      isValid = false;
    }
  });

  return isValid;
}

export { checkInput, checkErrors };
