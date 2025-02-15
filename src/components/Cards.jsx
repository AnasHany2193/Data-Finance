import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105">
          <img
            src={Single}
            alt="single"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b">1 Grabted User</p>
            <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
          </div>
          <button className="dark:bg-[#00df9a] dark:text-black bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 py-3 mx-auto">
            Start Trial
          </button>
        </div>
        <div className="flex flex-col w-full p-4 my-8 duration-300 bg-gray-100 rounded-lg shadow-xl md:my-4 hover:scale-105">
          <img
            src={Double}
            alt="double"
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Double User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b">1 Grabted User</p>
            <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black dark:bg-black dark:text-[#00df9a] w-[200px] rounded-md font-bold my-6 py-3 mx-auto">
            Start Trial
          </button>
        </div>
        <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105">
          <img
            src={Triple}
            alt="trTriple"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Triple User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b">1 Grabted User</p>
            <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
          </div>
          <button className="dark:bg-[#00df9a] dark:text-black bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 py-3 mx-auto">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
