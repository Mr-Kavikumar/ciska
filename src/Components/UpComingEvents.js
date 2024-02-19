import React from "react";
import { Link } from "react-router-dom";
import Button from "./layout/Button";
import Headings from "./layout/Headings";
import Poster from "../assets/Poster.png";

const UpComingEventsData = [
  {
    id: 1,
    image: Poster,
    title1: "Register",
    title2: "Now",
    content:
      "It appears to be a line of code written in JSX, likely part of a React.js application or a similar JavaScript framework. Let's break down the code: Make sure to list them in reverse order as compared to min-width breakpoints so that they override each other as expected. You can even create breakpoints with both min-width and max-width definitions if necessary, for example:",
    button1: { to: "./RegisterExtended", title: "Register" },
    button2: { to: "./UpComingEvents", title: "Up Coming Events !" },
  },
  {
    id: 2,
    image: Poster,
    title1: "Register",
    title2: "Now",
    content:
      "It appears to be a line of code written in JSX, likely part of a React.js application or a similar JavaScript framework. Let's break down the code: Make sure to list them in reverse order as compared to min-width breakpoints so that they override each other as expected. You can even create breakpoints with both min-width and max-width definitions if necessary, for example:",
    button1: { to: "./RegisterExtended", title: "Register" },
    button2: { to: "./UpComingEvents", title: "Up Coming Events !" },
  },
  {
    id: 3,
    image: Poster,
    title1: "Register",
    title2: "Now",
    content:
      "It appears to be a line of code written in JSX, likely part of a React.js application or a similar JavaScript framework. Let's break down the code: Make sure to list them in reverse order as compared to min-width breakpoints so that they override each other as expected. You can even create breakpoints with both min-width and max-width definitions if necessary, for example:",
    button1: { to: "./RegisterExtended", title: "Register" },
    button2: { to: "./UpComingEvents", title: "Up Coming Events !" },
  },
  {
    id: 4,
    image: Poster,
    title1: "Register",
    title2: "Now",
    content:
      "It appears to be a line of code written in JSX, likely part of a React.js application or a similar JavaScript framework. Let's break down the code: Make sure to list them in reverse order as compared to min-width breakpoints so that they override each other as expected. You can even create breakpoints with both min-width and max-width definitions if necessary, for example:",
    button1: { to: "./RegisterExtended", title: "Register" },
    button2: { to: "./UpComingEvents", title: "Up Coming Events !" },
  },
];

const UpComingEvents = () => {
  return (
    <div>
      <div className="flex flex-col items-center lg:flex-row justify-center m-5">
        <Headings title1="UpComing" title2=" Events" />
      </div>
      {UpComingEventsData.map((event) => (
        <div
          key={event.id}
          className={`flex flex-col-reverse md:flex-row items-center gap-20 md:mx-32 mx-5 mt-14 mb-5 ${
            event.id % 2 === 0 ? "even-poster-on-left" : "odd-poster-on-left"
          }`}
        >
          <div
            className={`cursor-pointer w-full md:w-2/6 hidden md:block ${
              event.id % 2 === 0 ? "order-2" : ""
            }`}
          >
            <img src={event.image} alt="" />
          </div>
          <div
            className={`w-full md:w-2/4 text-center space-y-2 ${
              event.id % 2 === 0 ? "md:order-1" : ""
            }`}
          >
            <Headings title1={event.title1} title2={event.title2}></Headings>
            <p>{event.content}</p>
            <div className="flex flex-row items-center justify-center gap-8">
              <Link
                to={event.button1.to}
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button title={event.button1.title}></Button>
              </Link>
              <Link
                to={event.button2.to}
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button title={event.button2.title}></Button>
              </Link>
            </div>
          </div>
          <div
            className={`cursor-pointer h-60 w-40 flex justify-center md:w-2/5 md:hidden ${
              event.id % 2 === 0 ? "order-1" : ""
            }`}
          >
            <img src={event.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpComingEvents;
