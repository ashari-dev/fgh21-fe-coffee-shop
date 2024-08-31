import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Coupon from "../assets/img/coupon.png"

function PromoList() {
    return(
        <>
            <div className="pt-12 md:mt-48 flex flex-col gap-6">
                <div className="flex items-center justify-between md:mx-32 mx-5">
                    <div className="text-5xl">
                        <span>Today</span>
                        <span className="text-[#8E6447]">Promo</span>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button className="bg-[#E8E8E8] p-4 rounded-full">
                            <FaArrowLeft className="text-xl"></FaArrowLeft> 
                        </button>
                        <button className="bg-[#FF8906] p-4 rounded-full">
                            <FaArrowRight className="text-xl"></FaArrowRight> 
                        </button>
                    </div>
                </div>
                <div className="flex overflow-x-scroll gap-12 md:mx-0 mx-5">
                    <button className="p-2 bg-[#88B788] flex rounded-2xl flex-shrink-0 ">
                        <div>
                            <img src={Coupon} alt="" />
                        </div>
                        <div className="flex flex-col gap-5 text-left">
                            <div>
                                <div className="font-semibold">HAPPY MOTHER&apos;S DAY!</div>
                                <div>Get one of our favorite menu for free!</div>
                            </div>
                            <div className="text-white">Klaim Kupon</div>
                        </div>
                    </button>
                    <button className="p-2 bg-[#88B788] flex rounded-2xl flex-shrink-0">
                        <div>
                            <img src={Coupon} alt="" />
                        </div>
                        <div className="flex flex-col gap-5 text-left">
                            <div>
                                <div className="font-semibold">HAPPY MOTHER&apos;S DAY!</div>
                                <div>Get one of our favorite menu for free!</div>
                            </div>
                            <div className="text-white">Klaim Kupon</div>
                        </div>
                    </button>
                    <button className="p-2 bg-[#88B788] flex rounded-2xl flex-shrink-0">
                        <div>
                            <img src={Coupon} alt="" />
                        </div>
                        <div className="flex flex-col gap-5 text-left">
                            <div>
                                <div className="font-semibold">HAPPY MOTHER&apos;S DAY!</div>
                                <div>Get one of our favorite menu for free!</div>
                            </div>
                            <div className="text-white">Klaim Kupon</div>
                        </div>
                    </button>
                    <button className="p-2 bg-[#88B788] flex rounded-2xl flex-shrink-0">
                        <div>
                            <img src={Coupon} alt="" />
                        </div>
                        <div className="flex flex-col gap-5 text-left">
                            <div>
                                <div className="font-semibold">HAPPY MOTHER&apos;S DAY!</div>
                                <div>Get one of our favorite menu for free!</div>
                            </div>
                            <div className="text-white">Klaim Kupon</div>
                        </div>
                    </button>
                </div>
                <div className="flex gap-2 md:mx-32 mx-5">
                    <div className="w-7 h-2.5 bg-[#FF8906] rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-[#DDE0E4] rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-[#DDE0E4] rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-[#DDE0E4] rounded-full"></div>
                </div>
            </div>
        </>
    )
}

export default PromoList