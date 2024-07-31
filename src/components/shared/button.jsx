import React from "react";
import loader from "../../assets/icons/loading.svg";
const Button = ({
  text,
  img,
  className,
  onClick,
  minHeight,
  maxHeight,
  minWidth,
  height,
  width,
  disabled,
  imgClass,
  loading=false,
  maxWidth,
  padding,
}) => {
  const buttonStyle = {
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWidth: minWidth,
    maxWidth: maxWidth,
    height: height,
    width: width,
    padding: padding,
  };
  if (loading) {
    disabled = true;
  }
  return (
    <button
      className={className}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <>
          <span className="flex justify-center  items-center gap-2">
            {text}
            <img src={loader} alt="" className="w-5 rotate-360 invert"/>
          </span>
        </>
      ) : (
        <>
          {img && <img src={img} alt="Button Image" className={imgClass} />}
          <span>{text}</span>
        </>
      )}
    </button>
  );
};
export default Button;