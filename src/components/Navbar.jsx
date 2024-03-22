import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-10 py-5 md:px-[150px] px-[30px] fixed z-20 bg-gradient-to-t bg-[#212223] md:bg-transparent w-full">
      <Link to="/" className="text-white hover:text-gray-400 cursor-pointer font-semibold hover:underline-offset-4 hover:underline underline-offset-8">
        Home
      </Link>
      <Link className="text-white hover:text-gray-400 cursor-pointer font-semibold hover:underline-offset-4 hover:underline underline-offset-8">
        About us
      </Link>
      <Link to="/model" className="text-white hover:text-gray-400 cursor-pointer font-semibold hover:underline-offset-4 hover:underline underline-offset-8">
        Try our model
      </Link>
    </div>
  );
}

export default Navbar;
