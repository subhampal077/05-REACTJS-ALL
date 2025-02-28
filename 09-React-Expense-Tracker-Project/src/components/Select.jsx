import React from "react";

function Select({ label, id, name, value, onChange, defaultOption, options, errors }) {

  return (
    <>
      <label htmlFor="category">{label}</label>
      <select required id={id} name={name} value={value} onChange={onChange}>
        <option hidden>{defaultOption}</option>

        {options.map((element) => {
          return <option key={element} value={element}>{element}</option>;
        })}
      </select>

      <p className="error-text">{errors}</p>
    </>
  );
}

export default Select;
