import { setErrorBorder } from "./SetBorder";

const inputNames = ["year", "month", "day"];

// Function to validate the inputs
function checkInput(input, label, message) {
  // Check if the name of the input is equal to "year"
  if (input.current.name === inputNames[0]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, label.current, message);

    if (input.current.value.trim() <= 0)
      setErrorBorder(
        input.current,
        label.current,
        "Year cannot be 0 and lower.",
      );
  }

  // Check if the name of the input is equal to "month"
  if (input.current.name === inputNames[1]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, label.current, message);

    if (input.current.value.trim() > 12)
      setErrorBorder(input.current, label.current, "Month cannot exceed 12.");
  }

  // Check if the name of the input is equal to "day"
  if (input.current.name === inputNames[2]) {
    if (input.current.value.trim() === "")
      setErrorBorder(input.current, label.current, message);

    if (input.current.value.trim() > 31)
      setErrorBorder(input.current, label.current, "Day cannot exceed 31.");
  }
}

export { checkInput };
