import React from "react";
import Headings from "./layout/Headings";
import Button from "./layout/Button";
import kavikumar from "../assets/kavikumar.jpg";
import Ganesh from "../assets/Ganesh.jpg";
import WorksCard from "./layout/WorksCard";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";

function Works() {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <Headings title1="Our" title2="Works"></Headings>
      </div>
      <div className="flex flex-row gap-5 pt-14 overflow-x-auto">
        <WorksCard
          image={kavikumar}
          title="kavikumar"
          para="cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb"
        />
        <WorksCard
          image={Ganesh}
          title="kavikumar"
          para="cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb"
        />
        <WorksCard
          image={kavikumar}
          title="kavikumar"
          para="cvbnbgbigbakdfbnxbmgiepitgjkngknfjkadijgbiadpbjadfjibadjfgbkjdfgbkdb"
        />
      </div>
    </div>
  );
}

export default Works;
