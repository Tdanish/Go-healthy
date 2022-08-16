import React from "react";

function Header({ tittle, btn, btn2 }) {
  return (
    <div>
      <div className="navbar flex justify-between p-4">
        <h2 className="font-bold text-blue-600  ">{tittle}</h2>
        <ul className="flex space-x-4 ">
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Services</li>
        </ul>
        <div className="space-x-3">
          <button className="rounded-full border border-gray-400 bg-white px-4 py-1 hover:bg-black hover:text-white  ">
            {btn}
          </button>
          <button className="rounded-full border border-gray-400 bg-black text-white px-4 py-1 hover:bg-white hover:text-black">
            {btn2}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
