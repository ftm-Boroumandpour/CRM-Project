import React from "react";

function FormInput({ name, label, value, type, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
