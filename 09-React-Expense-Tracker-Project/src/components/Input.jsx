import React from "react";

function Input({label, id, name, value, onChange, errors}) {
  return (
    <>
      <label htmlFor="title">{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className="error-text">{errors}</p>
    </>
  );
}

export default Input;
