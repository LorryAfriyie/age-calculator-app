function Input({ id, className, type, name, value, onChange, labelName }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{labelName}</label>
      <input
        type={type}
        id={id}
        className={className}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
