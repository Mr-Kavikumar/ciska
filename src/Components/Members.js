import React from "react";
import Headings from "./layout/Headings";
import kavikumar from "../assets/kavikumar.jpg";
import Button from "./layout/Button";
import { Link } from "react-router-dom";
import Ganesh from "../assets/Ganesh.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const membersData = [
  {
    img: kavikumar,
    name: "Kavikumar",
    job: "Software developer",
    institution: "CIT",
    event: "10,Half Marathon",
    contact: "ckavikumar2k@gmail.com",
    batch: "2020-2024",
  },
  {
    img: Ganesh,
    name: "GaneshMoorthy",
    job: "Mechanical Engineer",
    institution: "CIT",
    event: "Deca,110 Hurdles",
    contact: "ckavikumar2k@gmail.com",
    batch: "2021-2025",
  },
  {
    img: kavikumar,
    name: "Kavikumar",
    job: "Software developer",
    institution: "CIT",
    event: "10,Half Marathon",
    contact: "ckavikumar2k@gmail.com",
    batch: "2020-2024",
  },
  {
    img: Ganesh,
    name: "GaneshMoorthy",
    job: "Mechanical Engineer",
    institution: "CIT",
    event: "Deca,110 Hurdles",
    contact: "ckavikumar2k@gmail.com",
    batch: "2021-2025",
  },
  {
    img: kavikumar,
    name: "Kavikumar",
    job: "Software developer",
    institution: "CIT",
    event: "10,Half Marathon",
    contact: "ckavikumar2k@gmail.com",
    batch: "2020-2024",
  },
  {
    img: Ganesh,
    name: "GaneshMoorthy",
    job: "Mechanical Engineer",
    institution: "CIT",
    event: "Deca,110 Hurdles",
    contact: "ckavikumar2k@gmail.com",
    batch: "2021-2025",
  },
  {
    img: kavikumar,
    name: "Kavikumar",
    job: "Software developer",
    institution: "CIT",
    event: "10,Half Marathon",
    contact: "ckavikumar2k@gmail.com",
    batch: "2020-2024",
  },
  {
    img: Ganesh,
    name: "GaneshMoorthy",
    job: "Mechanical Engineer",
    institution: "CIT",
    event: "Deca,110 Hurdles",
    contact: "ckavikumar2k@gmail.com",
    batch: "2021-2025",
  },
];
const splideOptions = {
  perPage: 4,
  perMove: 1,
  type:"loop",
  autoplay: true,
  interval: 4000, // Autoplay interval in milliseconds
  pauseOnHover: true,
  gap: "1rem",
  pagination: false,
  breakpoints: {
    // Large screens (1200px and above)
    1200: { perPage: 2.5 },
    // Medium screens (991px to 1199px)
    991: { perPage: 2 },
    // Small screens (768px to 990px)
    768: { perPage: 1.5 },
    // Extra small screens (500px to 767px)
    500: { perPage: 1 },
    // Mobile screens (less than 500px)
    425: { perPage: 1 },
  },
};

const Members = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 ">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <Headings title1="Our" title2="Members" />
        <Link to="" spy={true} smooth={true} duration={500}>
          <Button title="See All Works" />
        </Link>
      </div>
      <div className="mt-4 ">
        <Splide options={splideOptions}>
          {membersData.map((member, i) => (
            <SplideSlide key={i}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img
                    className="rounded-t-lg h-[260px] w-full"
                    src={member.img}
                    alt=""
                  />
                </div>

                <div className="p-5">
                  <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white flex justify-center items-center pb-2">
                    {member.name}
                  </h5>
                  <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-sm">
                    <span className=" font-semibold text-white">Job :</span>{" "}
                    {member.job}
                  </p>
                  <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-sm">
                    <span className=" font-semibold text-white">
                      Institution :
                    </span>
                    {member.institution}
                  </p>
                  <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-sm">
                    <span className=" font-semibold text-white">Event : </span>
                    {member.event}
                  </p>
                  <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-sm">
                    <span className=" font-semibold text-white">Contact :</span>
                    {member.contact}
                  </p>
                  <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-sm">
                    <span className=" font-semibold text-white">Batch :</span>{" "}
                    {member.batch}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Members;
