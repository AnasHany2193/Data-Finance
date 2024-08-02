import React from "react";
import LapTop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full px-4 py-16 bg-black dark:bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded-lg"
          src={LapTop}
          alt="laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="py-2 text-2xl font-bold text-white dark:text-black md:text-4xl sm:text-3xl">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-white dark:text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            suscipit sequi aliquid minima, animi odit soluta facere quaerat sed
            repellat impedit harum in velit recusandae dolorem totam unde
            tempora delectus?
          </p>
          <button className="bg-[#00df9a] text-black dark:bg-black dark:text-[#00df9a] w-[200px] rounded-md font-bold my-6 py-3 mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
