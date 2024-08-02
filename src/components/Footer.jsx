import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedinIn,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df8a] dark:text-[#00df8a]">
          REACT.
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic
          voluptates modi expedita vitae officiis, iusto totam officia quibusdam
          necessitatibus, temporibus dolore quasi eius assumenda consequuntur,
          ab dolorem explicabo numquam.
        </p>
        <dir className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaLinkedinIn size={30} />
          <FaWhatsappSquare size={30} />
        </dir>
      </div>
      <div className="flex justify-between mt-6 lg:col-span-2">
        <div className="">
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul className="text-white">
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul className="text-white">
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul className="text-white">
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul className="text-white">
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
