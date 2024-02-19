import React from "react";
import { Link } from "react-router-dom";
import Button from "./layout/Button";
import Headings from "./layout/Headings";
import Poster from "../assets/Poster.png";

function Register() {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-20 md:mx-32 mx-5 mt-14">
      <div className="cursor-pointer w-full md:w-2/6  hidden md:block">
        <img src={Poster} alt="" />
      </div>
      <div className="w-full md:w-2/4 text-center space-y-2">
        <Headings title1="Register" title2="Now"></Headings>
        <p>
          It appears to be a line of code written in JSX, likely part of a
          React.js application or a similar JavaScript framework. Let's break
          down the code: Make sure to list them in reverse order as compared to
          min-width breakpoints so that they override each other as expected.
          You can even create breakpoints with both min-width and max-width
          definitions if necessary, for example:
        </p>
        <div className=" flex flex-row items-center justify-center gap-8">
          <Link to="./RegisterExtended" spy={true} smooth={true} duration={500}>
            <Button title="Register"></Button>
          </Link>
          <Link to="./UpComingEvents" spy={true} smooth={true} duration={500}>
            <Button title="Up Coming Events !"></Button>
          </Link>
        </div>
      </div>
      <div className="cursor-pointer h-60 w-40 flex justify-center  md:w-2/5 md:hidden">
        <img src={Poster} alt="" />
      </div>
    </div>
  );
}

export default Register;
