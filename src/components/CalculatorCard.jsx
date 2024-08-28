import Input from "./input";
import Button from "./button";
import AgeDisplay from "./AgeDisplay";

function CalculatorCard() {
  return (
    <div className="calculator_card">
      <div className="dob_inputs poppins-bold">
        <Input type={"text"} labelName={"Day"} />
        <Input type={"text"} labelName={"Month"} />
        <Input type={"text"} labelName={"Year"} />
      </div>

      <Button />
      {/*  <div className="border" /> */}

      <AgeDisplay />
    </div>
  );
}

export default CalculatorCard;
