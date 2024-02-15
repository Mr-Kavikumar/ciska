import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import Headings from "./layout/Headings";
import kavikumar from "../assets/kavikumar.jpg";
import Ganesh from "../assets/Ganesh.jpg";
import { Link } from "react-router-dom";

const WorksExtended = () => {
  const worksData = [
    {
      image: kavikumar,
      title: "Kavikumar",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery1",
    },
    {
      image: Ganesh,
      title: "GaneshMoorthy",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery2",
    },
    {
      image: kavikumar,
      title: "Kavikumar",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery1",
    },
    {
      image: Ganesh,
      title: "GaneshMoorthy",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery2",
    },
    {
      image: kavikumar,
      title: "Kavikumar",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery1",
    },
    {
      image: Ganesh,
      title: "GaneshMoorthy",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery2",
    },
    {
      image: kavikumar,
      title: "Kavikumar",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery1",
    },
    {
      image: Ganesh,
      title: "GaneshMoorthy",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery2",
    },
    {
      image: kavikumar,
      title: "Kavikumar",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery1",
    },
    {
      image: Ganesh,
      title: "GaneshMoorthy",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery2",
    },
    {
      image: kavikumar,
      title: "Kavikumar",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery1",
    },
    {
      image: Ganesh,
      title: "GaneshMoorthy",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt fuga, enim facilis quisquam, consequatur minus obcaecati minima vitae dolor dolores ipsa eum aliquid reiciendis temporibus possimus vero tempore corporis.",
      link: "/Gallery2",
    },
  ];
  const images = [
    {
      id: 1,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
      id: 2,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
      id: 3,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    {
      id: 4,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    },
    {
      id: 5,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    },
  ];

  const splideOptions = {
    perPage: 1,
    perMove: 1,
    type: "loop",
    autoplay: true,
    interval: 3500,
    pauseOnHover: true,
    pagination: false,
    arrows: false,
    speed: 800,
    transition: "ease",
  };

  return (
    <div className="flex flex-col justify-center lg:px-32 px-5 m-5">
      <div className="flex flex-col items-center lg:flex-row justify-center">
        <Headings title1="Our" title2="Works" />
      </div>
      <div className="mt-8">
        <Splide options={splideOptions} className="splide">
          {images.map((member, id) => (
            <SplideSlide key={id} className="w-full h-96">
              <div className="flex justify-center items-center">
                <img
                  src={member.src}
                  alt=""
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {worksData.map((member, i) => (
          <div
            key={i}
            className="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-black shadow-lg"
          >
            <div>
              <img
                className="rounded-t-lg h-[220px] w-full object-cover"
                src={member.image}
                alt=""
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center items-center pb-2">
                {member.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
                {member.para}
              </p>
              <Link to={member.link} spy={true} smooth={true} duration={500}>
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
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksExtended;
