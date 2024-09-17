function Button({ type, name }) {
  return (
    <button type={type} name={name} id={name} className={name}>
      <img src="images/icon-arrow.svg" alt="icon.svg" />
    </button>
  );
}

export default Button;
