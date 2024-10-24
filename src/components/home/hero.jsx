import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="text-center ">
        <ul>
          <li>
            <input type="radio" name="" id="" />
          </li>
        </ul>
        <h3 className="font-semibold mb-10">
          Setup your own color scheme and typography
        </h3>

        <h4>
          use <b> npx npm-check-updates -u </b> then <b>npm i</b> to update and
          install all updated dependencies
        </h4>

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
