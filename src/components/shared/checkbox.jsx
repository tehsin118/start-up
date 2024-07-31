import React from "react";

const Checkbox = ({ id, name, label, disabled = false, checked, onChange }) => {
  return (
    <div className="checkbox-wrapper flex">
      <input
        id={id}
        name={name}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label className="cbx" htmlFor={id}></label>
      <label className="lbl text-sm" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
