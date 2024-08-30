import React from "react";
import forgetpass from "../assets/img/picforgetpassword.jpeg";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "../assets/components/Logo";
import { FaRegEnvelope } from "react-icons/fa6";

function Forgetpassword() {
  return (
    <div>
      <div className="md:flex gap-16">
        {/* {LEFT} */}
        <div className="w-1/4 hidden md:block">
          <div>
            <img src={forgetpass} alt="" className="h-screen object-cover" />
          </div>
        </div>
        {/* {RIGHT} */}
        <div className="md:w-3/4 content-center">
          <div>
            <div className="flex flex-col md:mr-28 gap-8 ml-5 mr-5 mt-44 md:mt-0 md:ml-0">
              <div>
                <Logo />
              </div>
              <div className="text-4xl text-[#8E6447] font-semibold">
                Fill out the form correctly
              </div>
              <div>We will send new password to your email</div>
              <form className="flex flex-col gap-6">
                <label htmlFor="email" className="flex flex-col gap-1 w-full justify-center mb-6-">
                  <div className="text-[#0B132A] font-semibold text-base">Email</div>
                  <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                      <FaRegEnvelope />
                      <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full outline-none"/>
                  </div>
                </label>
                <div>
                  <button className="w-full bg-[#FF8906] h-[50px] rounded-md font-medium">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgetpassword;
