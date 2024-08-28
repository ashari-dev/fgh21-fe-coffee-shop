import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Pagination() {
    return(
    <>
        <div className="flex items-center gap-5">
            <button className="bg-[#FF8906] p-5 px-7 text-3xl rounded-full">1</button>
            <button className="bg-[#E8E8E8] text-[#A0A3BD] p-5 px-7 text-3xl rounded-full">2</button>
            <button className="bg-[#E8E8E8] text-[#A0A3BD] p-5 px-7 text-3xl rounded-full">3</button>
            <button className="bg-[#E8E8E8] text-[#A0A3BD] p-5 px-7 text-3xl rounded-full">4</button>
            <button className="bg-[#E8E8E8] text-[#FFFFFF] p-6 text-3xl rounded-full"><FaArrowRight className="text-3xl"></FaArrowRight></button>
        </div>
    </> 
    )
}
export default Pagination