import React from "react";
import Navbar from "../component/Navbar.jsx"
import { FaStar, FaRegThumbsUp, FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import coffe_1 from "../assets/img/coffe_1.svg"
import coffe_2 from "../assets/img/coffe_2.svg"
import coffe_3 from "../assets/img/coffe_3.svg"
import coffe_4 from "../assets/img/coffe_4.svg"
import Pagination from "../components/Pagination.jsx";

function DetailProduct(){
    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col md:flex-row md:px-32 px-5 py-16 gap-5 mb-16">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <img src={coffe_1} className="bg-black w-full object-cover"/>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <img src={coffe_2} className="flex w-full bg-black" />
                        <img src={coffe_2} className="flex w-full bg-black" />
                        <img src={coffe_2} className="flex w-full bg-black" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:w-1/2">
                    <div className="flex font-bold text-lg text-white max-w-36 justify-center bg-[#D00000] rounded-full p-2">FLASH SALE!</div>
                    <div className="text-[#0B0909] font-medium text-5xl">Hazelnut Latte</div>
                    <div className="flex gap-4 items-center">
                        <div className="font-medium text-[#D00000] text-xs">IDR 20.000</div>
                        <div className="text-[#FF8906] font-medium text-2xl">IDR 10.000</div>
                    </div>
                    <div className="flex gap-3 items-center  text-sm">
                        <FaStar className="text-[#FF8906]"/>
                        <FaStar className="text-[#FF8906]"/>
                        <FaStar className="text-[#FF8906]"/>
                        <FaStar className="text-[#FF8906]"/>
                        <FaStar className="text-[#FF8906]"/>
                        <div className="text-[#4F5665]">5.0</div>
                    </div>
                    <div className="flex gap-4 items-center text-lg">
                        <div className="text-[#4F5665]">200+ Review</div>
                        <div className="text-[#4F5665]">|</div>
                        <div className="text-[#4F5665]">Recommendation</div>
                        <FaRegThumbsUp className="text-[#FF8906]"/>
                    </div>
                    <div className="text-[#4F5665]">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</div>
                    <div className="flex gap-4 items-center">
                        <button type="button" className="flex items-center justify-center rounded-md border-[#FF8906] border-2 w-9 h-9">
                            <FaMinus className=""/>
                        </button>
                        <div className="font-bold text-lg">1</div>
                        <button type="button" className="flex items-center justify-center rounded-md bg-[#FF8906] w-9 h-9">
                            <FaPlus className=""/>
                        </button>
                    </div>
                    <div className="text-[#0B0909] font-bold text-lg">Choose Size</div>
                    <div className="flex gap-5">
                        <button type="button" className="flex items-center justify-center h-11 w-1/3 border-2 text-base text-[#0B0909] rounded-md border-[#FF8906]">Reguler</button>
                        <button type="button" className="flex items-center justify-center h-11 w-1/3 border-2 text-base border-[#E8E8E8] rounded-md text-[#0B0909]">Medium</button>
                        <button type="button" className="flex items-center justify-center h-11 w-1/3 border-2 text-base border-[#E8E8E8] rounded-md text-[#0B0909]">Large</button>
                    </div>
                    <div className="text-[#0B0909] font-bold text-lg">Hot/Ice</div>
                    <div className="flex gap-5 w-full mb-4">
                        <button type="button" className="flex items-center justify-center h-11 w-1/2 border-2 text-base text-[#0B0909] rounded-md border-[#FF8906]">Ice</button>
                        <button type="button" className="flex items-center justify-center h-11 w-1/2 border-2 text-base border-[#E8E8E8] rounded-md text-[#0B0909]">Hot</button>
                    </div>
                    <div className="flex gap-5 w-full mb-4">
                        <button type="button" className="flex items-center justify-center h-11 w-1/2 text-base text-[#0B0909] rounded-md bg-[#FF8906]">Buy</button>
                        <button type="button" className="flex gap-1 items-center justify-center h-11 w-1/2 border-2 text-base border-[#FF8906] rounded-md text-[#FF8906]">
                            <div className="">
                                <MdOutlineShoppingCart />
                            </div>
                            <div className="">add to cart</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center px-32 py-16 gap-1 font-medium text-5xl mb-6">
                <div className="text-[#0B0909]">Recommendation</div>
                <div className="text-[#8E6447]">For You</div>
            </div>
        </div>
    )
}

export default DetailProduct