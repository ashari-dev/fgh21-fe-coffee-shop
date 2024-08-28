import React from "react";
import ImgLogin from "../assets/img/Login.png";
import Logo from "../assets/components/Logo";
import { FaEnvelope } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import ImgFacebook from "../assets/img/facebook.png";
import ImgGoogle from "../assets/img/google.png";

function Login() {
  return (
    <div className="flex justify-center gap-16 h-screen">
      <div className="w-1/4 h-screen md:flex hidden">
        <img src={ImgLogin} alt="" />
      </div>
      <div className="w-3/4">
        <div className="flex flex-col justify-center w-full p-[50px] gap-[25px] h-screen">
          <Logo />
          <div className="flex flex-col gap-[25px] w-full justify-center">
            <h1 className="text-[#8E6447] text-[30px] font-bold">Login</h1>
            <p className="text-[#4F5665] text-[16px]">
              Fill out the form correctly
            </p>
            <div className="flex flex-col gap-[25px]">
              <label htmlFor="" className="text-[16px] font-bold">
                Email
              </label>
              <div className="flex w-full items-center border p-3 rounded-lg gap-[10px]">
                <FaEnvelope />
                <input
                  className="w-full"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <label htmlFor="" className="text-[16px] font-bold">
                Password
              </label>
              <div className="flex w-full items-center border p-3 rounded-lg gap-[10px]">
                <FaKey />
                <input
                  className="w-full"
                  type="password"
                  placeholder="Enter Your Password"
                />
                <FaEye />
              </div>
              <div className="flex justify-end text-[#FF8906]">
                Lupa Password?
              </div>
              <button className="w-full p-3 rounded-lg bg-[#FF8906] text-[16px] font-semibold">
                Login
              </button>
              <div className="flex gap-[10px] justify-center">
                <div className=" text-[16px]">Not Have An Account?</div>
                <div className="text-[#FF8906] text-[16px]">Register</div>
              </div>
              <div className="flex justify-center text-[#AAAAAA] text-[12px]">
                Or
              </div>
              <div className="flex justify-center gap-6">
                <button className=" flex w-[383px] p-3 rounded-lg gap-[10px] items-center justify-center shadow-lg">
                  <img
                    className="flex justify-center"
                    src={ImgFacebook}
                    alt=""
                  />
                  <div className="text-[18px] text-[#4F5665]">Facebook</div>
                </button>
                <button className="flex w-[383px] p-3 rounded-lg  justify-center items-center gap-[10px] shadow-lg">
                  <img className="flex justify-center" src={ImgGoogle} alt="" />
                  <div className="text-[18px] text-[#4F5665]">Google</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
