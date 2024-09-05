import Input from "./input";
import Button from "./button";
import AgeDisplay from "./AgeDisplay";
import { useState, useRef, useEffect } from "react";
import { checkInput } from "./validation";
import { removeErrorBorder } from "./SetBorder";

function CalculatorCard() {
  // Date variables
  const now = new Date();
  const _year = now.getFullYear();
  const _month = now.getMonth();
  const _day = now.getDay();

  // State variables to hold data from input
  const [data, setData] = useState({
    year: "",
    month: "",
    day: "",
  });

  // State variable to hold age calculation
  const [result, setResult] = useState({
    resultYear: "",
    resultMonth: "",
    resultDay: "",
  });

  // useRef variables to be able to access DOM elements
  const yearInput = useRef(null),
    monthInput = useRef(null),
    dayInput = useRef(null),
    yearErrMsg = useRef(null),
    monthErrMsg = useRef(null),
    dayErrMsg = useRef(null);

  // Array of objects to use for validation purposes
  const inputs = [
    { input: yearInput, message: "This field is required", label: yearErrMsg },
    {
      input: monthInput,
      message: "This field is required",
      label: monthErrMsg,
    },
    { input: dayInput, message: "This field is required", label: dayErrMsg },
  ];

  // Function to validate or calculate when the conditions are met after submission
  function calculateAge(e) {
    e.preventDefault();

    if (
      data.day.trim() != "" &&
      data.month.trim() != "" &&
      data.year.trim() != ""
    )
      setResult({
        resultDay:
          _day > data.day.trim()
            ? _day - data.day.trim()
            : data.day.trim() - _day,
        resultMonth:
          _month > data.month.trim()
            ? _month - data.month.trim()
            : data.month.trim() - _month,
        resultYear:
          _year === data.year.trim()
            ? _year - data.year.trim()
            : _year - data.year.trim(),
      });
    else
      inputs.map((x) => {
        checkInput(x.input, x.label, x.message);
      });
  }

  // Handle onChange function for input controls
  function handleInputChange(e) {
    const { name, value } = e.target;

    setData((data) => ({ ...data, [name]: value }));
  }

  useEffect(() => {
    // Remove validation error on flagged inputs when corrected
    inputs.map((x) => {
      removeErrorBorder(x.input, x.label);
    });
  });

  return (
    <div className="calculator_card">
      <form onSubmit={calculateAge} noValidate>
        <div className="dob_inputs poppins-bold">
          {/* Day input */}
          <Input
            type={"text"}
            labelName={"Day"}
            name={"day"}
            value={data.day}
            onChange={handleInputChange}
            placeHolder={"DD"}
            ref={dayInput}
            labelRef={dayErrMsg}
          />

          {/* Month input */}
          <Input
            type={"text"}
            labelName={"Month"}
            name={"month"}
            value={data.month}
            onChange={handleInputChange}
            placeHolder={"MM"}
            ref={monthInput}
            labelRef={monthErrMsg}
          />

          {/* Year input  */}
          <Input
            type={"text"}
            labelName={"Year"}
            name={"year"}
            value={data.year}
            onChange={handleInputChange}
            placeHolder={"YYYY"}
            ref={yearInput}
            labelRef={yearErrMsg}
          />
        </div>

        {/* Submit button */}
        <div className="submit_container">
          <div className="border"></div>
          <Button type={"submit"} name={"submit"} />
        </div>
      </form>

      {/* Display final age calculation component */}
      <AgeDisplay
        year={result.resultYear}
        month={result.resultMonth}
        day={result.resultDay}
      />
    </div>
  );
}

export default CalculatorCard;
