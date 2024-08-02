import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="mx-4 text-black dark:text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center">
        <p className="font-bold p-2 text-[#00df9a] dark:text-[#00df9a]">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl font-bold md:text-7xl sm:text-6xl md:py-6">
          Grow with data.
        </h1>
        <div className="flex items-center justify-center">
          <p className="py-4 text-xl font-bold md:text-5xl sm:text-4xl md:py-6">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="pl-2 text-xl font-bold text-[#00df9a] dark:text-[#00df9a] md:text-5xl sm:text-4xl md:py-6"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-700 dark:text-gray-500 md:pl-4 md:text-2xl">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="dark:bg-[#00df9a] dark:text-black bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 py-3 mx-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
