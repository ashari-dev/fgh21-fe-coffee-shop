import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function HomeComponent() {
  return (
    <div className="flex w-full h-1/2">
      <div className="flex flex-col md:max-w-[50%] h-full gap-6 md:pt-14 px-5 md:pl-36 md:pr-16">
      <div className="bg-[#FF8906] w-full h-full md:hidden"></div>
        <div className="pl-8 border-l-4 border-[#FF8906]">
          <h1 className="md:text-5xl text-2xl">We Provide <span className="text-[#8E6447]"> Good Coffee </span>and <span className="text-[#8E6447]">Healthy Meals</span> </h1>
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
      <div className="bg-[#FF8906] md:flex md:w-[100vh] w-full md:h-[50vh] hidden"></div>
    </div>
  );
}

export default HomeComponent;
