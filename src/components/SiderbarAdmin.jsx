import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { GiGlassShot } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { RxExit } from "react-icons/rx";


function SidebarAdmin(){
    return(
        <div className="w-1/5 bg-white flex flex-col gap-4 pt-[24px] h-full">
            <button className="flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg px-[11px]">
                <CgMenuGridR />
                <span>Dashboard</span>
            </button>
            <button className="flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg px-[11px]">
                <GiGlassShot/>
                <span>Product</span>
            </button>
            <button className="flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg px-[11px]">
                <FaShoppingBag/>
                <span>Order</span>
            </button>
            <button className="flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg px-[11px]">
                <HiUsers />
                <span>User</span>
            </button>
            <button className="flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg px-[11px]">
                <RxExit />
                <span>Keluar</span>
            </button>
        </div>
    )
}

export default SidebarAdmin;
