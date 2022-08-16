import React from "react";

export const Card = ({ image, detail }) => {
  return (
    <div className="group hover:shadow bg-yellow-400 cursor-pointer mx-3">
      <div className=" group hover:shadow h-80 w-80 overflow-hidden ">
        <img
          src={image}
          alt=""
          className="object-contain transition-all group-hover:scale-105"
        />
      </div>
      <div className="text-center">
        <p>{detail}</p>
      </div>
    </div>
  );
};
