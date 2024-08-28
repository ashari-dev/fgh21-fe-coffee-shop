import React from "react";
import Home from "../assets/img/home.png"
import { FaCommentDots } from "react-icons/fa6";

function HomeCover() {
    return(
        <>
            <div className="flex h-screen">
                <div className="flex-1 flex justify-center flex-col bg-gradient-to-t from-[#777C82] to-[#0B0909]">
                    <div className="w-screen h-1/2 md:hidden">
                        <img src={Home} alt="home_img" className="w-screen h-3/4 object-cover"/>
                    </div>
                    <div className="flex h-screen justify-center flex-col gap-6 px-5 md:px-32">
                        <div className="text-5xl text-white"> 
                            Start Your Day with Coffee and Good Meals
                        </div>
                        <div className="text-white">
                            We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!
                        </div>
                        <div className="hidden md:block">
                            <button className="bg-[#FF8906] w-36 h-12 rounded">Get Started</button>
                        </div>
                        <div className="flex justify-between items-center md:hidden">                            
                            <div>
                                <button className="bg-[#FF8906] w-36 h-12 rounded">Get Started</button>
                            </div>
                            <div>
                                <button className="bg-[#FF8906] p-4 rounded-full"><FaCommentDots className="text-2xl"></FaCommentDots></button>
                            </div>
                        </div>
                        <div className="text-[#FF8906] flex gap-10 justify-between md:justify-normal">
                            <div>
                                <div className="text-5xl">
                                    90+
                                </div>
                                <div>
                                    Staff
                                </div>
                            </div>
                            <div className="border h-20"></div>
                            <div>
                                <div className="text-5xl">
                                    30+
                                </div>
                                <div>
                                    Stores
                                </div>
                            </div>
                            <div className="border h-20"></div>
                            <div>
                                <div className="text-5xl">
                                    300+
                                </div>
                                <div>
                                    Costumers
                                </div>
                            </div>
                        </div>    
                    </div>  
                </div>
                <div className="hidden md:block md:flex-1">
                    <div>
                        <img src={Home} alt="home_img" className="w-screen h-screen object-cover"/>
                    </div>
                    <button className="bg-[#FF8906] p-7 rounded-full absolute bottom-24 right-36"><FaCommentDots className="text-5xl"></FaCommentDots></button>
                </div>
            </div>
        </>
    )
}

export default HomeCover