import React from "react";
import Headings from "./layout/Headings";
import MembersCard from "./layout/MembersCard";
import kavikumar from "../assets/kavikumar.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./layout/Button";
import { Link } from "react-scroll";
import Ganesh from "../assets/Ganesh.jpg"

function Members() {
  return (
    <div className="min-h-screen flex-col items-center md:px-32 px-5 my-10">
      <Headings title1="Our" title2="Members"></Headings>
      <div className="flex flex-row gap-6 mt-6 overflow-x-auto">
        <MembersCard
          img={kavikumar}
          name="kavikumar"
          job="Software developer"
          institution="CIT"
          event="10,Half Marathon"
          contact="ckavikumar2k@gmail.com"
          batch="2020-2024"
        />
        <MembersCard
          img={Ganesh}
          name="GaneshMoorthy"
          job="Mechanical Engineer"
          institution="CIT"
          event="Deca,110 Hurdles"
          contact="ckavikumar2k@gmail.com"
          batch="2021-2025"
        />
        <MembersCard
          img={kavikumar}
          name="kavikumar"
          job="Software developer"
          institution="CIT"
          event="10,Half Marathon"
          contact="ckavikumar2k@gmail.com"
          batch="2020-2024"
        />
        <MembersCard
          img={kavikumar}
          name="kavikumar"
          job="Software developer"
          institution="CIT"
          event="10,Half Marathon"
          contact="ckavikumar2k@gmail.com"
          batch="2020-2024"
        />
        <MembersCard
          img={kavikumar}
          name="kavikumar"
          job="Software developer"
          institution="CIT"
          event="10,Half Marathon"
          contact="ckavikumar2k@gmail.com"
          batch="2020-2024"
        />
        <div className="flex flex-row items-center space-x-5 pr-5">
          <Link to="" spy={true} smooth={true} duration={500} className="relative">
            <Button title="SeeMore"></Button>
            <FaArrowRight size={16} className="cursor-pointer absolute top-[30px] right-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Members;
