import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function InsertUser(){
    return(
        <div className="w-2/5 bg-white px-[28px] pt-[31px] h-screen">
            <form action="" className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <h1 className="font-semibold text-2xl">Insert User</h1>
                    <button className="text-red-600">
                        <IoMdCloseCircleOutline />
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-sm">Image User</span>
                    <div className="p-[15px] bg-[#E8E8E8] w-[50px] h-[50px] rounded-lg">
                        <CiImageOn/>
                    </div>
                    <button className="bg-[#FF8906] w-[80px] rounded-md px-[16px]">
                        <span className="text-xs">Upload</span>
                    </button>
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="fullName" className="font-bold">FullName</label>
                    <div className="w-full flex items-center relative">
                    <FaRegUser className="absolute left-4"/>
                    <input type="text" id="fullName" placeholder="Enter Full Name" name="fullName" className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"/>
                    </div>
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="email" className="font-bold">Email</label>
                    <div className="w-full flex items-center relative">
                    <MdOutlineEmail className="absolute left-4"/>
                    <input type="text" id="email" placeholder="Enter Your Email" name="email" className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"/>
                    </div>
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="phone"className="font-bold">Phone</label>
                    <div className="w-full flex items-center relative">
                    <FiPhoneOutgoing className="absolute left-4"/>
                    <input type="text" id="phone" placeholder="Enter Your Number" name="phone" className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"/>
                    </div>
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex justify-between">
                    <label htmlFor="password" className="font-bold">Password</label>
                    <label htmlFor="password" className="text-[#FF8906] font-semibold">Set New Password</label>
                    </div>
                    <div className="w-full flex items-center relative">
                    <RiLockPasswordLine className="absolute left-4"/>
                    <input type="text" id="password" placeholder="Enter Your Password" name="password" className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"/>
                    </div>
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="address" className="font-bold">Address</label>
                    <div className="w-full flex items-center relative">
                    <MdLocationPin className="absolute left-4"/>
                    <input type="text" id="address" placeholder="Enter Your Address" name="address" className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"/>
                    </div>
                </div>
                <div className="flex gap-2 flex-col">
                    <label htmlFor="" className="font-bold">Type of User</label>
                    <div className="flex justify-between">
                        <input type="button" value="Normal User" className="border hover:border-[#FF8906] flex justify-center rounded-md px-[60px]"/>
                        <input type="button" value="Admin" className="border hover:border-[#FF8906] flex justify-center rounded-md px-[60px]"/>
                    </div>
                </div>
                <div className="flex">
                    <button className="bg-[#FF8906] w-full rounded-md py-[10px]">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default InsertUser