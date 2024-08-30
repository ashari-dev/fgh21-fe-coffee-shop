import React from "react";
import ImgRegister from "../assets/img/Register.svg"
import google from "../assets/img/google.svg"
import facebook from "../assets/img/facebook.svg"
import { FaRegEnvelope, FaRegUser, FaKey, FaRegEye } from "react-icons/fa6";
import Logo from "../assets/components/Logo";
import { Link } from "react-router-dom";


function Register() {
    let [pass, setPassword] = React.useState("password");
    function changePassword() {
        if (pass === "password") {
        setPassword("text");
        } else {
        setPassword("password");
        }
    }
    let [confPass, setConfPassword] = React.useState("password");
    function setChangePassword() {
        if (confPass === "password") {
            setConfPassword("text");
        } else {
            setConfPassword("password");
        }
    }
  return (
        <div className="flex w-full h-screen items-center gap-16 md:pr-32 md:p-0 p-5">
            <div className="md:flex md:w-1/4 hidden">
                <img src={ImgRegister} alt="" className="object-cover h-screen"/>
            </div>
            <form className="flex flex-col justify-center gap-6 md:w-3/4 w-full">
                <Logo/>
                <div className="font-semibold text-[#8E6447] text-2xl">Register</div>
                <div className="text-[#4F5665] text-base">Fill out the form correctly</div>
                <label htmlFor="name" className="flex flex-col gap-1 w-full justify-center">
                    <div className="text-[#0B132A] font-semibold text-base">Full Name</div>
                    <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                        <FaRegUser />
                        <input type="text" name="name" id="name" placeholder="Enter Your Full Name" className="w-full outline-none"/>
                    </div>
                </label>
                <label htmlFor="email" className="flex flex-col gap-1 w-full justify-center">
                    <div className="text-[#0B13
                    Hazelnut Latte
                    You can explore the menu that we provide with fun and have their own taste and make your day better.
                    
                    IDR 20.0002A] font-semibold text-base">Email</div>
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
                <label htmlFor="confirmpassword" className="flex flex-col gap-1 w-full justify-center">
                    <div className="text-[#0B132A] font-semibold text-base">Confirm Password</div>
                    <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                        <FaKey />
                        <input type={confPass} name="confirmpassword" id="confirmpassword" placeholder="Enter Your Password Again" className="w-full outline-none"/>
                        <button type="button" onClick={setChangePassword}>
                            <FaRegEye />
                        </button>
                    </div>
                </label>
                <button type="submit" className="bg-[#FF8906] text-[#0B132A] p-3 rounded-lg font-medium text-base">Register</button>
                <div className="flex justify-center gap-1 text-base">
                    <div className="text-[#4F5665]">Have An Account?</div>
                    <Link to={"/login"} className="text-[#FF8906]">Login</Link>
                </div>
                <div className="flex text-[#4F5665] text-xs justify-center">Or</div>
                <div className="flex gap-4 items-center w-full mb-11">
                    <div className="flex items-center justify-center h-16 rounded-xl w-1/2 gap-2 shadow-xl">
                        <img src={facebook} alt="" className="w-6 h-6"/>
                        <div className="text-[#4F5665] font-medium text-lg">Facebook</div>
                    </div>
                    <div className="flex items-center justify-center h-16 rounded-xl w-1/2 gap-2 shadow-xl">
                        <img src={google} alt="" className="w-6 h-6"/>
                        <div className="text-[#4F5665] font-medium text-lg">Google</div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;
