import React, { useState } from "react";
import Input from "./shared/input";
import eyeOpen from "../assets/icons/eye-open.svg";
import Button from "./shared/button";
import Textarea from "./shared/textarea";
import Swal from "sweetalert2";
import Checkbox from "./shared/checkbox";
import RadioButton from "./shared/radioButton";

const Components = () => {

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: true,
  });

  const [selectedRadio, setSelectedRadio] = useState("radio1");

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete this bot?",
      text: "You won't be able to revert this!--- set your own colors in alert.scss",
      icon: "warning",
      width: 600,
      showCancelButton: true,
      buttonsStyling: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#000",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          width: 600,
          title: "Deleted!",
          text: "Your content has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };
  return (
    <div className="bg-slate-300">
      <h1>Components</h1>
      <p>Set colors scheme or design according your requirements,</p>
      <div className="max-w-96 m-auto flex flex-col gap-4">
        <Input
          type="password"
          label="Input"
          placeholder="Input component"
          icon={eyeOpen}
        />
        <div className="flex gap-2">
          <Button
            text="Click Me"
            className="w-52 btn-secondary"
            onClick={handleDelete}
          />
          <Button
            text="Secondary Button"
            className="w-52 btn-secondary"
            loading
          />
        </div>

        <div className="flex gap-2">
          <Button text="Primary Button" className="w-52 btn-primary" />
          <Button text="Primary loading" className="w-52 btn-primary" loading />
        </div>
<h5>
  Checkbox
</h5>
        <>
          <Checkbox
            id="checkbox1"
            label="unchecked disabled"
            disabled
            checked={checkboxes.checkbox1}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            id="checkbox2"
            label="Unchecked"
            checked={checkboxes.checkbox2}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            id="checkbox3"
            label="checked"
            checked={checkboxes.checkbox3}
            onChange={handleCheckboxChange}
          />{" "}
        </>


        {/* Radio button */}
        <>
        <RadioButton
        id="radio1"
        name="radio-group"
        label="Option 1"
        checked={selectedRadio === "radio1"}
        onChange={handleRadioChange}
      />
      <RadioButton
        id="radio2"
        name="radio-group"
        label="Option 2"
        checked={selectedRadio === "radio2"}
        onChange={handleRadioChange}
      />
  
        </>
        <Textarea
          label="Textarea"
          rows={6}
          placeholder="Enter your textarea content"
        />
      </div>
    </div>
  );
};

export default Components;
