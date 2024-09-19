import Input from "./input";
import Button from "./button";
import AgeDisplay from "./AgeDisplay";
import { useState, useRef, useEffect } from "react";
import { checkInput, checkErrors } from "./validation";
import { removeErrorBorder } from "./SetBorder";

function CalculatorCard() {
  // Date variables
  const now = new Date();

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
    form = useRef(null);

  const yearErrMsg = useRef(null),
    monthErrMsg = useRef(null),
    dayErrMsg = useRef(null);

  const yearLabel = useRef(null),
    monthLabel = useRef(null),
    dayLabel = useRef(null);

  // Array of objects to use for validation purposes
  const inputs = [
    {
      input: yearInput,
      message: "This field is required",
      errLabel: yearErrMsg,
      label: yearLabel,
    },
    {
      input: monthInput,
      message: "This field is required",
      errLabel: monthErrMsg,
      label: monthLabel,
    },
    {
      input: dayInput,
      message: "This field is required",
      errLabel: dayErrMsg,
      label: dayLabel,
    },
  ];

  function dayCalculation() {
    let value = 0;
    const _day = now.getDate(),
      day = parseInt(data.day.trim());

    // console.log(`System day: ${_day} \n Input day: ${day}`);

    if (_day > day) {
      value = _day - day;
      //console.log("first day break");
    } else if (_day === day) {
      value = _day - day;
      //console.log("second day break");
    } else if (day > _day) {
      value = day - _day;
      //console.log("third day break");
    } else return;

    return value;
  }

  function monthCalculation() {
    let value = 0;
    const _month = parseInt(now.getMonth() + 1),
      month = parseInt(data.month.trim());

    //console.log(`System month: ${_month} \n Input month: ${month}`);

    if (month > _month) {
      value = month - _month;
      //console.log("first month break");
    } else if (month === _month) {
      value = month - _month;
      //console.log("second month break");
    } else if (_month > month) {
      value = _month - month;
      //console.log("last month break");
    } else return;

    return value;
  }

  function yearCalculation() {
    let value = 0;
    const _year = now.getFullYear(),
      year = parseInt(data.year.trim());

    // console.log(`System year: ${_year} \n Input year: ${year}`);

    if (_year === year) value = _year - year;
    else if (year < _year) value = _year - year;
    else return;

    return value;
  }

  // Function to validate or calculate when the conditions are met after submission
  function calculateAge(e) {
    e.preventDefault();

    inputs.map((x) => {
      checkInput(x.input, x.errLabel, x.message, x.label);
    });

    if (checkErrors(form))
      setResult({
        resultDay: dayCalculation(),
        resultMonth: monthCalculation(),
        resultYear: yearCalculation(),
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
      removeErrorBorder(x.input, x.errLabel, x.label);
    });
  });

  return (
    <div className="calculator_card">
      <form onSubmit={calculateAge} ref={form} noValidate>
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
            label={dayLabel}
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
            label={monthLabel}
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
            label={yearLabel}
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
