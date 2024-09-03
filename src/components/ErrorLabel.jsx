/* eslint-disable react/display-name */
import { forwardRef } from "react";

const ErrorLabel = forwardRef(({}, ref) => {
  return <small ref={ref} className="poppins-regular-italic"></small>;
});

export default ErrorLabel;
