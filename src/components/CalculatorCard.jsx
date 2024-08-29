import Input from "./input";
import Button from "./button";
import AgeDisplay from "./AgeDisplay";
import { useState, useRef } from "react";

function CalculatorCard() {
  const now = new Date();
  const _year = now.getFullYear();
  const _month = now.getMonth();
  const _day = now.getDay();

  function calculateAge(e) {
    e.preventDefault();

    setData({
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
  }

  const [data, setData] = useState({
    year: "",
    month: "",
    day: "",
    resultYear: "",
    resultMonth: "",
    resultDay: "",
  });

  const yearInput = useRef(null),
    monthInput = useRef(null),
    dayInput = useRef(null);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div className="calculator_card">
      <form onSubmit={calculateAge}>
        <div className="dob_inputs poppins-bold">
          <Input
            type={"text"}
            labelName={"Day"}
            name={"day"}
            value={data.day}
            onChange={handleInputChange}
            placeHolder={"DD"}
          />

          <Input
            type={"text"}
            labelName={"Month"}
            name={"month"}
            value={data.month}
            onChange={handleInputChange}
            placeHolder={"MM"}
          />

          <Input
            type={"text"}
            labelName={"Year"}
            name={"year"}
            value={data.year}
            onChange={handleInputChange}
            placeHolder={"YYYY"}
          />
        </div>

        <Button type={"submit"} name={"submit"} />
      </form>

      {/*  <div className="border" /> */}

      <AgeDisplay
        year={data.resultYear}
        month={data.resultMonth}
        day={data.resultDay}
      />
    </div>
  );
}

export default CalculatorCard;
