import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Pagination() {
    return(
    <>
        <div className="flex items-center gap-5">
            <button className="bg-[#FF8906] py-2.5 px-5 text-xl rounded-full">1</button>
            <button className="bg-[#E8E8E8] text-[#A0A3BD] py-3 px-5 text-xl rounded-full">2</button>
            <button className="bg-[#E8E8E8] text-[#A0A3BD] py-3 px-5 text-xl rounded-full">3</button>
            <button className="bg-[#E8E8E8] text-[#A0A3BD] py-3 px-5 text-xl rounded-full">4</button>
            <button className="bg-[#E8E8E8] text-[#FFFFFF] p-4 text-xl rounded-full"><FaArrowRight className="text-xl"></FaArrowRight></button>
        </div>
    </> 
    )
}
export default Pagination