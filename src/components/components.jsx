import React from "react";
import Input from "./shared/input";
import eyeOpen from "../assets/icons/eye-open.svg";
import Button from "./shared/button";
import Textarea from "./shared/textarea";

const Components = () => {
  return (
    <div className="bg-slate-300">
      <h1>Components</h1>
      <p>
        Set colors scheme or design according your requirements,
      </p>
      <div className="max-w-96 m-auto flex flex-col gap-4">
        <Input type="password" label="Input" placeholder="Input component" icon={eyeOpen} />
        <div className="flex gap-2">
        <Button text="Secondary loading" className="w-52 btn-secondary"/>
        <Button text="Secondary Button" className="w-52 btn-secondary" loading/>
        </div>

        <div className="flex gap-2">
        <Button text="Primary Button" className="w-52 btn-primary"/>
        <Button text="Primary loading" className="w-52 btn-primary" loading/>
        </div>
        <Textarea label="Textarea" rows={6} placeholder="Enter your textarea content"/>
      </div>
    </div>
  );
};

export default Components;
