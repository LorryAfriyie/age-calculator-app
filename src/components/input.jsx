import { forwardRef } from "react";

function Input({ type, name, value, onChange, labelName, placeHolder }) {
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
      />
    </div>
  );
}

export default Input;
