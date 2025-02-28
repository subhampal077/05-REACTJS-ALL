import React from "react";

function CustomInput({ id, type, label, name, value, onChange, error }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className="error">{error}</p>
    </div>
  );
}

export default CustomInput;
