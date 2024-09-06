import { setErrorBorder } from "./SetBorder";

const inputNames = ["year", "month", "day"];

// Function to validate the inputs
function checkInput(input, errLabel, message, label) {
  // Check if the name of the input is equal to "year"
  if (input.current.name === inputNames[0]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, errLabel.current, message, label.current);
  }

  // Check if the name of the input is equal to "month"
  if (input.current.name === inputNames[1]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, errLabel.current, message, label.current);

    if (input.current.value.trim() > 12)
      setErrorBorder(
        input.current,
        errLabel.current,
        "Month cannot exceed 12.",
        label.current,
      );
  }

  // Check if the name of the input is equal to "day"
  if (input.current.name === inputNames[2]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, errLabel.current, message, label.current);

    if (input.current.value.trim() > 31)
      setErrorBorder(
        input.current,
        errLabel.current,
        "Day cannot exceed 31.",
        label.current,
      );
  }
}

export { checkInput };
