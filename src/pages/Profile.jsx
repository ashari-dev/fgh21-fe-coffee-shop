import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FaUser } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import ImgProfileUser from "../assets/img/profileUser.png";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="p-32">
        <div className="flex flex-col justify-center gap-[44px]">
          <h1 className="font-bold text-[48px]">Profile</h1>
          <div className="md:flex md:flex-row flex flex-col justify-center gap-[30px] md:gap-[10px]">
            <div className="md:w-[500px] w-full h-[443px] gap-[15px] border rounded-lg border-[#E8E8E8]">
              <div className="flex flex-col p-[20px]  gap-[30px] justify-center items-center ">
                <h2 className="font-bold">Galuh Wizard</h2>
                <p className="text-[#4F5665] text-[16px]">
                  ghaluhwizz@gmail.com
                </p>
                <img
                  src={ImgProfileUser}
                  className=" w-[113px] border-2 border-black  rounded-full"
                ></img>
                <button className="bg-[#FF8906] rounded-lg p-[12px]">
                  Upload New Photo
                </button>
                <p className="text-[#4F5665] font-semibold">
                  Since 20 January 2022
                </p>
              </div>
            </div>
            <div className="w-full gap-[15px] border rounded-lg border-[#E8E8E8]">
              <form className="flex flex-col gap-[25px] pr-[50px] pl-[50px] pt-[25px] pb-[25px]">
                <div className="flex flex-col gap-[14px]">
                  <label className="text-[16px] font-bold">Full Name</label>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaUser />
                    <input
                      type="name"
                      placeholder="Ghaluh Wizard"
                      className="outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[14px]">
                  <label className="text-[16px] font-bold">Email</label>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaEnvelope />
                    <input
                      type="email"
                      placeholder="ghaluhwizz@gmail.com"
                      className="outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[14px]">
                  <label className="text-[16px] font-bold">Phone</label>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaPhone />
                    <input
                      type="text"
                      placeholder="082116304338"
                      className="outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[14px]">
                  <div className="flex justify-between">
                    <label className="text-[16px] font-bold">Password</label>
                    <div className="flex justify-end text-[#FF8906]">
                      Set New Password
                    </div>
                  </div>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaKey />
                    <input
                      type="password"
                      placeholder="**********"
                      className="outline-none w-full"
                    />
                    <FaEye />
                  </div>
                </div>
                <div className="flex flex-col gap-[14px]">
                  <label className="text-[16px] font-bold">Addres</label>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaLocationDot />
                    <input
                      type="text"
                      placeholder="Griya Bandung Indah"
                      className="outline-none w-full"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#FF8906] rounded-lg p-[18px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
