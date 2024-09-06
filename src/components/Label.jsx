/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Label = forwardRef(({ name, labelName }, ref) => {
  return (
    <label htmlFor={name} ref={ref}>
      {labelName}
    </label>
  );
});

const ErrorLabel = forwardRef(({}, ref) => {
  return <small ref={ref} className="poppins-regular-italic"></small>;
});

export { Label, ErrorLabel };
