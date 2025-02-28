import React from "react";

function CustomSelect({
  id,
  label,
  name,
  value,
  onChange,
  error,
  defaultOption,
  options,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        // ref={categoryRef}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}

        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}

export default CustomSelect;
