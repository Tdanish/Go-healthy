import React from "react";

function Test({ itemname, price, image }) {
  return (
    <div className="group hover:shadow w-full bg-blue-400 cursor-pointer">
      <div className=" xl:h-56 md:h-64  h-72 w-full overflow-hidden ">
        <img
          src={image}
          alt=""
          className="object-contain transition-all group-hover:scale-105"
        />
      </div>
      {/* container  */}
      <div className=" p-4">
        <h1 className="font-medium capitalize ">{itemname}</h1>
        <p className="text-orange-500 mt-2">Rs.{price}</p>
      </div>
    </div>
  );
}

export default Test;
