import React from "react";
import forgetpass from "../assets/img/picforgetpassword.jpeg"
import logomessage from "../assets/img/logomessage.svg"
import { MdOutlineEmail } from "react-icons/md";



function Forgetpassword(){
    return(
        <div>
            <div className="md:flex gap-16">
                {/* {LEFT} */}
               <div className="w-1/4 hidden md:block">
                    <div>
                        <img src={forgetpass} alt="" className="h-screen object-cover"/>
                    </div>
               </div>   
               {/* {RIGHT} */}
               <div className="md:w-3/4 content-center">
                    <div>
                        <div className="flex flex-col md:mr-28 gap-8 ml-5 mr-5 mt-44 md:mt-0 md:ml-0">
                            <div>
                                Waiting for component logo
                            </div>
                            <div className="text-4xl text-[#8E6447] font-semibold">
                                Fill out the form correctly
                            </div>
                            <div>
                                We will send new password to your email
                            </div>
                            <form className="flex-col gap">
                                <div className="mb-3 font-semibold">  
                                    Email
                                </div>
                                <div className="mb-8 border-2 rounded-lg">
                                    <MdOutlineEmail className="h-7 w-7 absolute mt-2 ml-6"/>
                                    <input className="w-full h-[44px] pl-16"type="text" name="password" placeholder="Enter Your Email"/>
                                </div>
                                <div>
                                    <button className="w-full bg-[#FF8906] h-[50px] rounded-md font-medium">Submit</button>
                                </div>
                            </form> 
                        </div>  
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Forgetpassword