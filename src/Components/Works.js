import React from "react";
import Headings from "./layout/Headings";
import kavikumar from "../assets/kavikumar.jpg";
import Button from "./layout/Button";
import { Link } from "react-router-dom";
import Ganesh from "../assets/Ganesh.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const worksData = [
  {
    image: kavikumar,
    title: "Kavikumar",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
  },
  {
    image: Ganesh,
    title: "GaneshMoorthy",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
  },
  {
    image: kavikumar,
    title: "Kavikumar",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
  },
  {
    image: Ganesh,
    title: "GaneshMoorthy",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
  },
  {
    image: kavikumar,
    title: "Kavikumar",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
  },
  {
    image: Ganesh,
    title: "GaneshMoorthy",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
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
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 ">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <Headings title1="Our" title2="Works" />
        <Link to="" spy={true} smooth={true} duration={500}>
          <Button title="See All Works" />
        </Link>
      </div>

      <div className="mt-4">
      <Splide options={splideOptions}>
        {worksData.map((member, i) => (
          <SplideSlide key={i}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div>
              <img
                className="rounded-t-lg h-[300px] w-full"
                src={member.image}
                alt=""
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center items-center pb-2">
                {member.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {member.para}
              </p>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </div>
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
