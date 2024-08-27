import Input from "./input";
import Button from "./button";

function CalculatorCard() {
  return (
    <div className="calculator_card poppins-bold">
      <div className="dob_inputs">
        <Input type={"text"} labelName={"Day"} />
        <Input type={"text"} labelName={"Month"} />
        <Input type={"text"} labelName={"Year"} />
      </div>

      <Button />
      <div className="border" />
    </div>
  );
}

export default CalculatorCard;
