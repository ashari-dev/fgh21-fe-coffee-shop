import React from "react";
import {
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaMinus,
  FaCircle,
} from "react-icons/fa6";

function HomeTestimonial() {
  return (
    <>
      <div className="flex bg-[rgba(0,0,0,0.9)] min-h-[583px] gap-4 py-16 pl-24">
        <div className="bg-white max-h-[432px] flex-1"></div>
        <div className="flex-1 pr-36 text-white flex-col flex gap-6">
          <div className="text-xl">TESTIMONIAL</div>
          <div className="text-3xl">Viezh Robert</div>
          <div className="text-[#FF8906]">Manager Coffe Shop</div>
          <div>
            “Wow... I am very happy to spend my whole day here. the Wi-fi is
            good, and the coffee and meals tho. I like it here!! Very
            recommended!
          </div>
          <div className="flex gap-8 items-center">
            <span className="flex gap-4 text-[#FF8906]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span>5,0</span>
          </div>
          <div className="flex gap-8">
            <button className="bg-white text-black p-4 rounded-full">
              <FaArrowLeft />
            </button>
            <button className="bg-[#FF8906] text-black p-4 rounded-full">
              <FaArrowRight />
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-[24px] text-[#FF8906]">
              <FaMinus />
            </div>
            <div className="flex text-[6px] gap-2">
              <FaCircle />
              <FaCircle />
              <FaCircle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTestimonial;
