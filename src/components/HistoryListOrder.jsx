import React from "react";
import { FaArrowsSpin, FaRotate, FaCalendarDays, FaEnvelope, FaChevronDown } from "react-icons/fa6";
import coffe from "../assets/img/coffe_1.svg"
import Pagination from "./Pagination"

function HistoryListOrder() {
    return(
        <>
            <div className="flex gap-5 px-32 pt-16">
                <div className="text-5xl">History Order</div>
                <div className="px-5 py-3 bg-[#E8E8E8]">2</div>
            </div>
            <div>
                <div className="flex px-32 items-center py-9 gap-20">
                    <div className="bg-[#E8E8E899] p-2 flex gap-5 min-w-96 min-h-16">
                        <button className="bg-white p-3">
                            On Progress
                        </button>
                        <button>
                            Sending Goods
                        </button>
                        <button>
                            Finish Order
                        </button>
                    </div>
                    <div className="flex items-center gap-2 justify-evenly bg-[#E8E8E899] min-w-52 min-h-16">
                        <FaCalendarDays></FaCalendarDays>
                        January 2023
                        <FaChevronDown></FaChevronDown>
                    </div>
                </div>
                <div className="px-32">
                    <div className="flex flex-col gap-5 w-[680px]">
                        <div className="flex gap-5 bg-[#E8E8E84D] p-2 w-[680px] justify-between">
                            <div className=" w-28 h-28">
                                <img src={coffe} alt="" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <FaEnvelope></FaEnvelope>
                                        No. Order
                                    </div>
                                    <div className="font-bold">
                                        #12354-09893
                                    </div>
                                </div>
                                <div className="text-[#FF8906]">
                                    Views Order Detail
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarDays></FaCalendarDays>
                                    Date
                                </div>
                                <div className="font-bold">
                                    23 January 2023
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaRotate></FaRotate>
                                    Total
                                </div>
                                <div className="font-bold">
                                    Idr 40.000
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaArrowsSpin></FaArrowsSpin>
                                    Status
                                </div>
                                <div className="font-bold bg-[#FF890633] text-[#FF8906] text-xs p-1 rounded-full">
                                    On Progress
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 bg-[#E8E8E84D] p-2 w-[680px] justify-between">
                            <div className=" w-28 h-28">
                                <img src={coffe} alt="" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <FaEnvelope></FaEnvelope>
                                        No. Order
                                    </div>
                                    <div className="font-bold">
                                        #12354-09893
                                    </div>
                                </div>
                                <div className="text-[#FF8906]">
                                    Views Order Detail
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarDays></FaCalendarDays>
                                    Date
                                </div>
                                <div className="font-bold">
                                    23 January 2023
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaRotate></FaRotate>
                                    Total
                                </div>
                                <div className="font-bold">
                                    Idr 40.000
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaArrowsSpin></FaArrowsSpin>
                                    Status
                                </div>
                                <div className="font-bold bg-[#FF890633] text-[#FF8906] text-xs p-1 rounded-full">
                                    On Progress
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 bg-[#E8E8E84D] p-2 w-[680px] justify-between">
                            <div className=" w-28 h-28">
                                <img src={coffe} alt="" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <FaEnvelope></FaEnvelope>
                                        No. Order
                                    </div>
                                    <div className="font-bold">
                                        #12354-09893
                                    </div>
                                </div>
                                <div className="text-[#FF8906]">
                                    Views Order Detail
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarDays></FaCalendarDays>
                                    Date
                                </div>
                                <div className="font-bold">
                                    23 January 2023
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaRotate></FaRotate>
                                    Total
                                </div>
                                <div className="font-bold">
                                    Idr 40.000
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaArrowsSpin></FaArrowsSpin>
                                    Status
                                </div>
                                <div className="font-bold bg-[#FF890633] text-[#FF8906] text-xs p-1 rounded-full">
                                    On Progress
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 bg-[#E8E8E84D] p-2 w-[680px] justify-between">
                            <div className=" w-28 h-28">
                                <img src={coffe} alt="" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <FaEnvelope></FaEnvelope>
                                        No. Order
                                    </div>
                                    <div className="font-bold">
                                        #12354-09893
                                    </div>
                                </div>
                                <div className="text-[#FF8906]">
                                    Views Order Detail
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarDays></FaCalendarDays>
                                    Date
                                </div>
                                <div className="font-bold">
                                    23 January 2023
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaRotate></FaRotate>
                                    Total
                                </div>
                                <div className="font-bold">
                                    Idr 40.000
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaArrowsSpin></FaArrowsSpin>
                                    Status
                                </div>
                                <div className="font-bold bg-[#FF890633] text-[#FF8906] text-xs p-1 rounded-full">
                                    On Progress
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Pagination></Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryListOrder