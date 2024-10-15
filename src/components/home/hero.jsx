import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="text-center ">
        <h3 className="font-semibold mb-10">
          Setup your own color scheme and typography
        </h3>

        <ul className="flex gap-3 m-auto justify-center mb-10">
          <li>
            <NavLink to="" className="font-semibold">
              Input
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="font-semibold">
              Textare
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="font-semibold">
              Button
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="font-semibold">
              Checkbox
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="font-semibold">
              Radio Button
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="font-semibold">
              Table
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hero;
