/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, name, value, onChange, labelName, placeHolder }, ref) => {
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
      </div>
    );
  },
);

export default Input;
