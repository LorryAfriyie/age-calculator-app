/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, name, value, onChange, labelName, placeHolder }, ref, ref2) => {
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
        <small className="err-message" ref={ref2}></small>
      </div>
    );
  },
);

export default Input;
