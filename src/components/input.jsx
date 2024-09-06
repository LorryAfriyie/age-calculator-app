/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { ErrorLabel, Label } from "./Label";

// Input component with a useRef parameter
const Input = forwardRef(
  (
    { type, name, value, onChange, labelName, placeHolder, labelRef, label },
    ref,
  ) => {
    return (
      <div className="form-control">
        <Label name={name} labelName={labelName} ref={label} />
        <input
          type={type}
          id={name}
          className={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          ref={ref}
        />
        <ErrorLabel ref={labelRef} />
      </div>
    );
  },
);

export default Input;
