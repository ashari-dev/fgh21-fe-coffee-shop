import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { GiGlassShot } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { RxExit } from "react-icons/rx";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function SidebarAdmin(props) {
  const active = props.active;
  const nav = useNavigate();
  return (
    <div className="w-1/5 flex flex-col gap-2 pt-[24px] h-full">
      <button
        onClick={() => {
          nav("/dashboard-admin");
        }}
        className={active == 1 ? "flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] bg-[#FF8906] rounded-lg py-3 px-[11px]" : "flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg py-3 px-[11px]"}
      >
        <CgMenuGridR />
        <span>Dashboard</span>
      </button>
      <button
        onClick={() => {
          nav("/list-product");
        }}
        className={active == 2 ? "flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] bg-[#FF8906] rounded-lg py-3 px-[11px]" : "flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg py-3 px-[11px]"}
      >
        <GiGlassShot />
        <span>Product</span>
      </button>
      <button
        onClick={() => {
          nav("/order-list");
        }}
        className={active == 3 ? "flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] bg-[#FF8906] rounded-lg py-3 px-[11px]" : "flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg py-3 px-[11px]"}
      >
        <FaShoppingBag />
        <span>Order</span>
      </button>
      <button
        onClick={() => {
          nav("/user-list");
        }}
        className={active == 4 ? "flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] bg-[#FF8906] rounded-lg py-3 px-[11px]" : "flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg py-3 px-[11px]"}
      >
        <HiUsers />
        <span>User</span>
      </button>
      <button
        onClick={() => {
          nav("/login");
        }}
        className="flex items-center gap-2 ml-[42px] mr-[12px] hover:bg-[#FF8906] rounded-lg py-3 px-[11px]"
      >
        <RxExit />
        <span>Keluar</span>
      </button>
    </div>
  );
}

export default SidebarAdmin;
