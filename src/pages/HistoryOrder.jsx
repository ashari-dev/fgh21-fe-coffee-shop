import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Kopie from "../img/Kopie.svg"
import Pagination from "../components/Pagination";
import { FaRegTrashCan, FaRegComments, FaRegCalendarDays, FaRotate,FaArrowsSpin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetTransactionQuery } from "../redux/services/transaction";
import { useSelector } from "react-redux";

function HistoryOrder() {
    const token = useSelector((state) => state.auth.token);
    console.log(token)
    const { data, err, isLoading } = useGetTransactionQuery(token);
    console.log(data)
    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col gap-16 md:p-32 pt-32 p-5">
                <div className="flex gap-7 items-end">
                    <div className="text-[#0B0909] font-medium text-5xl">History Order</div>
                    <div className="flex items-center justify-center text-[#0B132A] text-sm w-8 h-8 bg-[#E8E8E8] rounded-sm">
                        2
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col md:w-2/3 gap-5">
                        {isLoading || err
                        ? ""
                        : data.result.map((item) => {
                            return (
                                <>
                                <div className="flex gap-5 bg-[#E8E8E8]/30 p-4 rounded-lg" key={item.id}>
                            <div className="w-32 h-32">
                                <img src={Kopie} alt="" className="rounded-sm object-cover"/>
                            </div>
                            <div className="">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegTrashCan />
                                            <div className="">
                                                No. Order
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">#{item.NoOrder}</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegCalendarDays />
                                            <div className="">
                                                Date
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">23 January 2023</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRotate />
                                            <div className="">
                                                Total
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">Idr {(item.Price * item.Quantity).toLocaleString("id")}</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaArrowsSpin />
                                            <div className="">
                                                Status
                                            </div>
                                        </div>
                                        <div className="flex items-center p-2 bg-[#FF8906]/20 rounded-full font-bold text-[#FF8906] text-xs">
                                            {item.OrderTypes}
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/detail-order/${item.NoOrder}`} className="text-sm underline text-[#FF8906] font-medium">Views Order Detail</Link>
                            </div>
                                </div>
                                </>
                            )
                        })}
                        {/* <div className="flex gap-5 bg-[#E8E8E8]/30 p-4 rounded-lg">
                            <div className="w-32 h-32">
                                <img src={Kopie} alt="" className="rounded-sm object-cover"/>
                            </div>
                            <div className="">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegTrashCan />
                                            <div className="">
                                                No. Order
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">#12354-09893</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegCalendarDays />
                                            <div className="">
                                                Date
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">23 January 2023</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRotate />
                                            <div className="">
                                                Total
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">Idr 40.000</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaArrowsSpin />
                                            <div className="">
                                                Status
                                            </div>
                                        </div>
                                        <div className="flex items-center p-2 bg-[#FF8906]/20 rounded-full font-bold text-[#FF8906] text-xs">
                                            On Progress
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/detail-order"} className="text-sm underline text-[#FF8906] font-medium">Views Order Detail</Link>
                            </div>
                        </div> */}
                        {/* <div className="flex gap-5 bg-[#E8E8E8]/30 p-4 rounded-lg">
                            <div className="w-32 h-32">
                                <img src={Kopie} alt="" className="rounded-sm object-cover"/>
                            </div>
                            <div className="">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegTrashCan />
                                            <div className="">
                                                No. Order
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">#12354-09893</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegCalendarDays />
                                            <div className="">
                                                Date
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">23 January 2023</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRotate />
                                            <div className="">
                                                Total
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">Idr 40.000</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaArrowsSpin />
                                            <div className="">
                                                Status
                                            </div>
                                        </div>
                                        <div className="flex items-center p-2 bg-[#FF8906]/20 rounded-full font-bold text-[#FF8906] text-xs">
                                            On Progress
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/detail-order"} className="text-sm underline text-[#FF8906] font-medium">Views Order Detail</Link>
                            </div>
                        </div>
                        <div className="flex gap-5 bg-[#E8E8E8]/30 p-4 rounded-lg">
                            <div className="w-32 h-32">
                                <img src={Kopie} alt="" className="rounded-sm object-cover"/>
                            </div>
                            <div className="">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegTrashCan />
                                            <div className="">
                                                No. Order
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">#12354-09893</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegCalendarDays />
                                            <div className="">
                                                Date
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">23 January 2023</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRotate />
                                            <div className="">
                                                Total
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">Idr 40.000</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaArrowsSpin />
                                            <div className="">
                                                Status
                                            </div>
                                        </div>
                                        <div className="flex items-center p-2 bg-[#FF8906]/20 rounded-full font-bold text-[#FF8906] text-xs">
                                            On Progress
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/detail-order"} className="text-sm underline text-[#FF8906] font-medium">Views Order Detail</Link>
                            </div>
                        </div>
                        <div className="flex gap-5 bg-[#E8E8E8]/30 p-4 rounded-lg">
                            <div className="w-32 h-32">
                                <img src={Kopie} alt="" className="rounded-sm object-cover"/>
                            </div>
                            <div className="">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegTrashCan />
                                            <div className="">
                                                No. Order
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">#12354-09893</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRegCalendarDays />
                                            <div className="">
                                                Date
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">23 January 2023</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaRotate />
                                            <div className="">
                                                Total
                                            </div>
                                        </div>
                                        <div className="font-bold py-2 text-[#0B132A]">Idr 40.000</div>
                                    </div>
                                    <div className="flex flex-col gap-3 py-3">
                                        <div className="flex items-center gap-2">
                                            <FaArrowsSpin />
                                            <div className="">
                                                Status
                                            </div>
                                        </div>
                                        <div className="flex items-center p-2 bg-[#FF8906]/20 rounded-full font-bold text-[#FF8906] text-xs">
                                            On Progress
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/detail-order"} className="text-sm underline text-[#FF8906] font-medium">Views Order Detail</Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="md:w-1/3 md:pl-5">
                        <div className="flex flex-col gap-2 p-5 border-2 rounded-lg">
                            <FaRegComments className="text-[#4F5665] w-10 h-10"/>
                            <div className="font-bold text-lg">Send Us Message</div>
                            <div className="text-[#4F5665]">if your unable to find answer or find your product quickly, please describe your problem and tell us. we will give you solution.</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HistoryOrder;

