import React from "react";

const Checkbox = ({ id, name, label, labelClass, disabled = false, checked, onChange }) => {
  return (
    <div className="checkbox-wrapper flex ">
      <input
        id={id}
        name={name}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label className="cbx  font-medium" htmlFor={id}></label>
      <label className={`lbl font-medium ${labelClass}`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
