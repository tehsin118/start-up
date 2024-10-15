import React, { useState } from "react";
const Textarea = ({
  wrapperClass,
  className,
  inputClass,
  label,
  labelClass,
  onChange,
  name,
  id,
  value,
  placeholder,
  rows,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  height,
  width,
  maxLength,
  error,
  errorMessage,
  disabled = false,
}) => {
  const inputStyle = {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    width: width,
    minWidth: minWidth,
    maxWidth: maxWidth,
  };

  return (
    <>
      <div
        className={`textarea-box  ${error ? "error" : ""} ${className}`}
        style={inputStyle}
      >
        <label className="text-primary-text">{label}</label>
        <div
          className={`input-wrapper  ${wrapperClass} ${disabled && "disabled"}`}
        >
          <textarea
            autoComplete="off"
            spellCheck
            rows={rows}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={inputClass}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </div>
        {errorMessage && (
          <p className="extra-small text-xs font-medium text-red-600">
            {errorMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default Textarea;
