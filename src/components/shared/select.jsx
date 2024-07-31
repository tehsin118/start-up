import React from "react";
import { Select } from "antd";
// import chevron from "../assets/icons/chevron-down.svg";

const CustomSelect = ({
  wrapperClasses,
  value,
  onChange,
  options,
  label,
  error,
  minHeight,
  maxHeight,
  minWidth,
  height,
  width,
}) => {
  const selectStyle = {
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWidth: minWidth,
    height: height,
    width: width,
  };

  return (
    <>
      <div
        className={`select-wrapper ${wrapperClasses}  ${error ? "error" : ""} `}
        style={selectStyle}
      >
          <label className={value ? "active" : ""}> {label}</label>
        <Select
          onChange={onChange}
          options={options?.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          value={value}
        />

      </div>
    </>
  );
};

export default CustomSelect;
