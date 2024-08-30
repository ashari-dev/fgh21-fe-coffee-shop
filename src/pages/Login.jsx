import React from "react";
import ImgLogin from "../assets/img/Login.png";
import Logo from "../assets/components/Logo";
import { FaEnvelope } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { FaEye, FaRegEnvelope, FaRegEye } from "react-icons/fa6";
import ImgFacebook from "../assets/img/facebook.png";
import ImgGoogle from "../assets/img/google.png";
import { Link } from "react-router-dom";

function Login() {
  let [pass, setPassword] = React.useState("password");
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  return (
    <div className="flex justify-center flex-col md:flex-row gap-16 h-screen">
      <div className="md:w-1/4 h-screen md:flex hidden">
        <img src={ImgLogin} alt="" className="object-cover"/>
      </div>
      <div className="md:w-3/4">
        <div className="flex flex-col justify-center md:pr-32 gap-6 p-5 h-screen">
          <Logo />
          <div className="flex flex-col gap-[25px] w-full justify-center">
            <h1 className="text-[#8E6447] text-[30px] font-bold">Login</h1>
            <p className="text-[#4F5665] text-[16px]">
              Fill out the form correctly
            </p>
            <form className="flex flex-col gap-[25px]">
              <label htmlFor="email" className="flex flex-col gap-1 w-full justify-center">
                  <div className="text-[#0B132A] font-semibold text-base">Email</div>
                  <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                      <FaRegEnvelope />
                      <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full outline-none"/>
                  </div>
              </label>
              <label htmlFor="password" className="flex flex-col gap-1 w-full justify-center">
                <div className="text-[#0B132A] font-semibold text-base">Password</div>
                <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                    <FaKey />
                    <input type={pass} name="password" id="password" placeholder="Enter Your Password" className="w-full outline-none"/>
                    <button type="button" onClick={changePassword}>
                      <FaRegEye />
                    </button>
                </div>
              </label>
              <Link
                to={"/forget-password"}
                className="flex justify-end text-[#FF8906]"
              >
                Lupa Password?
              </Link>
              <button
                type="submit"
                className="w-full p-3 rounded-lg bg-[#FF8906] text-[16px] font-semibold"
              >
                Login
              </button>
            </form>
            <div className="flex gap-[10px] justify-center">
              <div className=" text-[16px]">Not Have An Account?</div>
              <Link to={"/register"} className="text-[#FF8906] text-[16px]">
                Register
              </Link>
            </div>
            <div className="flex justify-center text-[#AAAAAA] text-[12px]">
              Or
            </div>
            <div className="flex justify-center gap-6">
              <button className=" flex w-[383px] p-3 rounded-lg gap-[10px] items-center justify-center shadow-lg">
                <img className="flex justify-center" src={ImgFacebook} alt="" />
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
  );
}

export default Login;
