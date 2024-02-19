import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/Logo.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const handeChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="flex  fixed top-0 w-full justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row space-x-4 justify-center">
          <img src={logo} className="h-10 w-10 cursor-pointer " alt=""></img>
          <Link to="/" className="font-semibold text-2xl p-1 cursor-pointer">
            CISKA
          </Link>
        </div>
        <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-yellow-300 transition-all cursor-pointer "
          >
            Home
          </Link>
          <Link
            to="members"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-yellow-300 transition-all cursor-pointer "
          >
            Members
          </Link>
          <Link
            to="register"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-yellow-300 transition-all cursor-pointer "
          >
            Register
          </Link>
          <Link
            to="works"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-yellow-300 transition-all cursor-pointer "
          >
            Works
          </Link>
          <Link
            to="contactus"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-yellow-300 transition-all cursor-pointer "
          >
            Contact us
          </Link>
        </nav>
        <div className="flex md:hidden" onClick={handeChange}>
          <div className="p-2 cursor-pointer">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden  flex flex-col fixed bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-1000`}
      >
        <Link
          onClick={handeChange}
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-yellow-300 transition-all cursor-pointer "
        >
          Home
        </Link>
        <Link
          onClick={handeChange}
          to="register"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-yellow-300 transition-all cursor-pointer "
        >
          Register
        </Link>
        <Link
          onClick={handeChange}
          to="works"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-yellow-300 transition-all cursor-pointer "
        >
          Works
        </Link>
        <Link
          onClick={handeChange}
          to="members"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-yellow-300 transition-all cursor-pointer "
        >
          Members
        </Link>

        <Link
          onClick={handeChange}
          to="contactus"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-yellow-300 transition-all cursor-pointer "
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
