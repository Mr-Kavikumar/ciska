import React from "react";

function WorksCard(props) {
  return (
    <div
      className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
        rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out"
    >
      <div>
        <img className="h-40 w-full" src={props.image}></img>
      </div>
      <h1 className="font-semibold text-lg">{props.title}</h1>
      <p className="break-words w-full text-start">{props.para}</p>
      <h3 className="text-gray-400 cursor-pointer hover:text-yellow-300 transition duration-300 ease-in-out">
        Explore More
      </h3>
    </div>
  );
}

export default WorksCard;
