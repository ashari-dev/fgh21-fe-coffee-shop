import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function HomeComponent() {
  return (
    <div className="flex h-[60vh] w-full">
      <div className="flex flex-col max-w-[50%] h-full gap-6 mt-14 ml-36 mr-16">
        <div className="pl-8 border-l-4">
          <h1 className="text-5xl">We Provide <span className="text-[#8E6447]"> Good Coffee </span>and <span className="text-[#8E6447]">Healthy Meals</span> </h1>
        </div>
        <div className="flex flex-col gap-6 text-[#4F5665]">
          <p>
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-2 items-center">
              <FaCheckCircle className="text-[#2FAB73]" /> High quality beans
            </li>
            <li className="flex gap-2 items-center">
              <FaCheckCircle className="text-[#2FAB73]" /> Healthy meals, you
              can request the ingredients
            </li>
            <li className="flex gap-2 items-center">
              <FaCheckCircle className="text-[#2FAB73]" /> Chat with our staff
              to get better experience for ordering
            </li>
            <li className="flex gap-2 items-center">
              <FaCheckCircle className="text-[#2FAB73]" /> Free member card with
              a minimum purchase of IDR 200.000.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#FF8906] flex max-w-[50%] w-full h-full"></div>
    </div>
  );
}

export default HomeComponent;
