import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black dark:text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df8a] dark:text-[#00df8a]">
        REACT.
      </h1>
      <ul className="hidden space-x-6 md:flex">
        <li className="text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
          Home
        </li>
        <li className="text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
          Company
        </li>
        <li className="text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
          Resources
        </li>
        <li className="text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
          About
        </li>
        <li className="text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
          Contact
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="block text-black md:hidden dark:text-white"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-full bg-white dark:bg-[#000300] border-r border-gray-900 dark:border-r-gray-900 ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df8a] dark:text-[#00df8a]">
          REACT.
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4  border-b border-gray-300 dark:border-gray-600 text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
            Home
          </li>
          <li className="p-4  border-b border-gray-300 dark:border-gray-600 text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
            Company
          </li>
          <li className="p-4  border-b border-gray-300 dark:border-gray-600 text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
            Resources
          </li>
          <li className="p-4  border-b border-gray-300 dark:border-gray-600 text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
            About
          </li>
          <li className="p-4 text-black dark:text-white font-medium hover:text-[#00df9a] cursor-pointer dark:hover:text-[#00df9a] transition-colors duration-300">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
