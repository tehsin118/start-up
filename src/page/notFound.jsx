import React from "react";
import error from "../assets/icons/not-found.svg";
import Button from "../components/shared/button";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate()
  return (
    <>
      <section className="flex justify-center items-center gap-10  flex-col h-[100vh]">
        <img src={error} alt="" className="max-w-80" />

        <p className="text-xl w-full md:max-w-[40%] text-center  ">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </p>
        <Button text="Go back" className="btn-primary w-52 py-3" onClick={()=>navigate(-1)}/>
      </section>
    </>
  );
};

export default NotFound;
