import { setErrorBorder } from "./SetBorder";

const inputNames = ["year", "month", "day"];

function checkInput(input, label, message) {
  if (
    input.current.value.trim() === "" &&
    input.current.name == inputNames[0]
  ) {
    setErrorBorder(input.current, label.current, message);
    console.log(`Error in ${input.current.name}`);
    console.log(label.current.innerText);
  }

  if (
    input.current.value.trim() === "" &&
    input.current.name == inputNames[1]
  ) {
    setErrorBorder(input.current, label.current, message);
    console.log(`Error in ${input.current.name}`);
  }

  if (
    input.current.value.trim() === "" &&
    input.current.name == inputNames[2]
  ) {
    setErrorBorder(input.current, label.current, message);
    console.log(`Error in ${input.current.name}`);
  }
}

export { checkInput };
