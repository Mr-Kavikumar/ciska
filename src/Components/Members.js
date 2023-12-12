import React from "react";
import Headings from "./layout/Headings";
import MembersCard from "./layout/MembersCard";
import kavikumar from "../assets/kavikumar.jpg";
import Button from "./layout/Button";
import { Link } from "react-scroll";
import Slider from "react-slick";
import Ganesh from "../assets/Ganesh.jpg"


function Members() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="min-h-screen flex-col items-center md:px-32 px-5 my-10">
    <div className="flex flex-col items-center md:flex md:flex-row md:justify-between">
    <Headings title1="Our" title2="Members"></Headings>
          <Link className="md:block" to="" spy={true} smooth={true} duration={500}>
            <Button title="See All Member"></Button>
          </Link>
    </div>
    {/* {/* <div className="flex flex-row justify-center gap-2 py-4 ">
        <button className="bg-purple-300 px-4 py-2 rounded-lg">move left</button>
        <button className="bg-purple-300 px-4 py-2 rounded-lg">move right</button>
    </div> */}
      <div className="items-center flex flex-row gap-6 mt-6 overflow-x-auto">
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
