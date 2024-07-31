import React from "react";

const RadioButton = ({ id, name, label, checked, onChange }) => {
  return (
    <div className="radio-wrapper cursor-pointer">
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="text-base font-medium pl-2 cursor-pointer">{label}</label>
    </div>
  );
};

export default RadioButton;