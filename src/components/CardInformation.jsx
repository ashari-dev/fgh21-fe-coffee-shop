import React from "react";
import glass from "../assets/img/glassadmin.svg";
import truck from "../assets/img/truckadmin.svg";
import user from "../assets/img/useradmin.svg";
import { FaArrowTrendUp } from "react-icons/fa6";

function CardInformation() {
  return (
    <div>
      <div className="md:flex justify-between ml-20 mr-20 mt-6">
        {/* {LEFT} */}
        <div className="bg-[#6FC276] w-96 h-32 rounded-md flex flex-col gap-4 justify-center pl-6">
          <div className="flex flex-row items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
              <img src={glass} alt="" className="w-6 h-6" />
            </div>
            <div className="text-white font-medium">Order On Progress</div>
          </div>
          <div className="flex gap-5 text-white">
            <div className="font-bold text-2xl">200</div>
            <div className="flex items-center text-xs gap-2">
              <div>+11.01%</div>
              <div>
                <FaArrowTrendUp />
              </div>
            </div>
          </div>
        </div>

        {/* {MID} */}
        <div className="bg-[#6C69D4] w-96 h-32 rounded-md flex flex-col gap-4 justify-center pl-6">
          <div className="flex flex-row items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
              <img src={truck} alt="" className="w-6 h-6" />
            </div>
            <div className="text-white font-medium">Order Shipping</div>
          </div>
          <div className="flex gap-5 text-white">
            <div className="font-bold text-2xl">100</div>
            <div className="flex items-center text-xs gap-2">
              <div>+4.01%</div>
              <div>
                <FaArrowTrendUp />
              </div>
            </div>
          </div>
        </div>
        {/* {RIGHT} */}
        <div className="bg-[#C56FBC] w-96 h-32 rounded-md flex flex-col gap-4 justify-center pl-6">
          <div className="flex flex-row items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
              <img src={user} alt="" className="w-6 h-6" />
            </div>
            <div className="text-white font-medium">Order Done</div>
          </div>
          <div className="flex gap-5 text-white">
            <div className="font-bold text-2xl">50</div>
            <div className="flex items-center text-xs gap-2">
              <div>+2.01%</div>
              <div>
                <FaArrowTrendUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardInformation;
