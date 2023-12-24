import React from "react";
import Headings from "./layout/Headings";
import MembersCard from "./layout/MembersCard";
import kavikumar from "../assets/kavikumar.jpg";
import Button from "./layout/Button";
import { Link } from "react-router-dom";
import Ganesh from "../assets/Ganesh.jpg"


function Members() {
  return (
    <div className="flex-col items-center md:px-32 px-5 my-10">
    <div className="flex flex-col items-center md:flex md:flex-row md:justify-between">
    <Headings title1="Our" title2="Members"></Headings>
          <Link className="md:block" to="./AllMembers" spy={true} smooth={true} duration={500}>
            <Button title="See All Member"></Button>
          </Link>
    </div>
      <div className="items-center flex flex-row gap-6 mt-6 overflow-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-slate-700">
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
          img={Ganesh}
          name="GaneshMoorthy"
          job="Mechanical Engineer"
          institution="CIT"
          event="Deca,110 Hurdles"
          contact="ckavikumar2k@gmail.com"
          batch="2021-2025"
        />

      </div>
    </div>
  );
}

export default Members;
