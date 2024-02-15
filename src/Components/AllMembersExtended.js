import React from "react";
import Headings from "./layout/Headings";
import kavikumar from "../assets/kavikumar.jpg";
import Ganesh from "../assets/Ganesh.jpg";

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

const AllMembersExtended = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 ">
      <div className="flex flex-col items-center lg:flex-row justify-center m-5">
        <Headings title1="Our" title2="Members" />
      </div>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {membersData.map((member, i) => (
          <div
            key={i}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div>
              <img
                className="rounded-t-lg h-[220px] w-full"
                src={member.img}
                alt=""
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center items-center pb-2">
                {member.name}
              </h5>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-sm">
                <span className=" font-semibold text-white">Job :</span>{" "}
                {member.job}
              </p>
              <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-sm">
                <span className=" font-semibold text-white">Institution :</span>
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
        ))}
      </div>
    </div>
  );
};
export default AllMembersExtended;
