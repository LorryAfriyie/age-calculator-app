/* eslint-disable react/display-name */
import { forwardRef } from "react";
import ErrorLabel from "./ErrorLabel";

const Input = forwardRef(
  ({ type, name, value, onChange, labelName, placeHolder, labelRef }, ref) => {
    return (
      <div className="form-control">
        <label htmlFor={name}>{labelName}</label>
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
