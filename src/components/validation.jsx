import { setErrorBorder } from "./SetBorder";

const inputNames = ["year", "month", "day"];

// Function to validate the inputs
function checkInput(input, errLabel, message, label) {
  console.log("Year: " + input.current.value);
  // Check if the name of the input is equal to "year"
  if (input.current.name === inputNames[0]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, errLabel.current, message, label.current);

    if (input.current.value.trim() > new Date().getFullYear()) {
      setErrorBorder(
        input.current,
        errLabel.current,
        "Must be in the past",
        label.current,
      );
      console.log("flag year");
    }
  }

  // Check if the name of the input is equal to "month"
  if (input.current.name === inputNames[1]) {
    console.log("Month: " + input.current.value);
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, errLabel.current, message, label.current);

    if (input.current.value.trim() > 12) {
      setErrorBorder(
        input.current,
        errLabel.current,
        "Must be a valid month",
        label.current,
      );
      console.log("flag month");
    }
  }

  // Check if the name of the input is equal to "day"
  if (input.current.name === inputNames[2]) {
    console.log("Day: " + input.current.value);
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, errLabel.current, message, label.current);

    if (input.current.value.trim() > 31) {
      setErrorBorder(
        input.current,
        errLabel.current,
        "Must be a valid date",
        label.current,
      );
      console.log("flag date");
    }
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
