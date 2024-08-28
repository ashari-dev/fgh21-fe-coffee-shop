import React from "react";
import Navbar from "../component/Navbar"
import SidebarAdmin from "../components/SiderbarAdmin";
import { CiSearch } from "react-icons/ci";
import { FaRegListAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { CiFilter } from "react-icons/ci";

function OrderList(){
    return(
        <div className="flex flex-col">
            <Navbar/>
            <div className="flex flex-row">
                <SidebarAdmin/>
                <div className="flex flex-col w-4/5 bg-white pl-[40px] pt-[23px] pr-[80px] gap-4">
                    <div className="flex w-full">
                        <div className="flex flex-col items-start gap-2 w-1/2">
                            <span className="text-black">Order List</span>
                            <button className="bg-[#FF8906] p-[10px] rounded-lg flex items-center">+ Add Order</button>
                        </div>
                        <div className="flex w-1/2 gap-4">
                            <div className="flex flex-col justify-end">
                                <label htmlFor="status">Status</label>
                                <select name="status" id="status" className="rounded-lg py-[10px] px-[12px]">
                                    <option value="all">All</option>
                                    <option value="done">Done</option>
                                    <option value="waiting">Waiting</option>
                                    <option value="onProgress">On Progress</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-end">
                                <label htmlFor="search">Search Order</label>
                                <div className="relative flex justify-center items-center">
                                    <input type="text" placeholder="Enter Order Number" id="search"className="text-sm border rounded-lg py-[10px] px-[12px]"/>
                                    <CiSearch className="absolute right-2"/>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end">
                                <button className="bg-[#FF8906] p-[10px] rounded-lg flex items-center">
                                    <CiFilter/>
                                    <span>Filter</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#E8E8E8] pb-6 rounded-xl px-6">
                        <table className="w-full my-[15px]">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" name=""/></th>
                                    <th>No. Order</th>
                                    <th>Date</th>
                                    <th>Order</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd:bg-[#F9FAFB] even:bg-white">
                                    <td><input type="checkbox" name=""/></td>
                                    <td>#12354-09893</td>
                                    <td>26 January 2023</td>
                                    <td>
                                    <ul>
                                    <li className="list-disc">Hazelnut Latte R 1x</li>
                                    <li className="list-disc">Caramel Machiato L 1x</li>
                                    </ul>
                                    </td>
                                    <td className="flex justify-center items-center">
                                        <span className="text-green-500 bg-green-300 text-xs rounded-lg px-[10px] py-[2px]">Done</span>
                                    </td>
                                    <td>IDR 40.000</td>
                                    <td className="flex gap-2 justify-center items-center">
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <FaRegListAlt className="text-[#8E6447] bg-[#8E64471A]"/>
                                        </button>
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <CiEdit className="text-[#FF8906] bg-[#FF89061A]"/>
                                        </button>
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <MdDeleteForever  className="text-red-600 bg-[#D000001A]"/>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="odd:bg-[#F9FAFB] even:bg-white">
                                    <td><input type="checkbox" name=""/></td>
                                    <td>#12354-09893</td>
                                    <td>26 January 2023</td>
                                    <td>
                                    <ul>
                                    <li className="list-disc">Hazelnut Latte R 1x</li>
                                    <li className="list-disc">Caramel Machiato L 1x</li>
                                    </ul>
                                    </td>
                                    <td className="flex justify-center items-center">
                                        <span className="text-[#FF8906] bg-[#FF890633] text-xs rounded-lg px-[10px] py-[2px]">On Progress</span>
                                    </td>
                                    <td>IDR 40.000</td>
                                    <td className="flex gap-2 justify-center items-center">
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <FaRegListAlt className="text-[#8E6447] bg-[#8E64471A]"/>
                                        </button>
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <CiEdit className="text-[#FF8906] bg-[#FF89061A]"/>
                                        </button>
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <MdDeleteForever  className="text-red-600 bg-[#D000001A]"/>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="odd:bg-[#F9FAFB] even:bg-white">
                                    <td><input type="checkbox" name=""/></td>
                                    <td>#12354-09893</td>
                                    <td>26 January 2023</td>
                                    <td>
                                    <ul>
                                    <li className="list-disc">Hazelnut Latte R 1x</li>
                                    <li className="list-disc">Caramel Machiato L 1x</li>
                                    </ul>
                                    </td>
                                    <td className="flex justify-center items-center">
                                        <span className="text-[#4F5665] bg-[#4F566533] text-xs rounded-lg px-[10px] py-[2px]">Waiting</span>
                                    </td>
                                    <td>IDR 40.000</td>
                                    <td className="flex gap-2 justify-center items-center">
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <FaRegListAlt className="text-[#8E6447] bg-[#8E64471A]"/>
                                        </button>
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <CiEdit className="text-[#FF8906] bg-[#FF89061A]"/>
                                        </button>
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <MdDeleteForever  className="text-red-600 bg-[#D000001A]"/>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="odd:bg-[#F9FAFB] even:bg-white">
                                    <td><input type="checkbox" name=""/></td>
                                    <td>#12354-09893</td>
                                    <td>26 January 2023</td>
                                    <td>
                                    <ul>
                                    <li className="list-disc">Hazelnut Latte R 1x</li>
                                    <li className="list-disc">Caramel Machiato L 1x</li>
                                    </ul>
                                    </td>
                                    <td className="flex justify-center items-center">
                                        <span className="text-[#D00000] bg-[#D0000033] text-xs rounded-lg px-[10px] py-[2px]">Pending</span>
                                    </td>
                                    <td>IDR 40.000</td>
                                    <td className="flex gap-2 justify-center items-center">
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <FaRegListAlt className="text-[#8E6447] bg-[#8E64471A]"/>
                                        </button>
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <CiEdit className="text-[#FF8906] bg-[#FF89061A]"/>
                                        </button>
                                        <button className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#8E64471A]">
                                            <MdDeleteForever  className="text-red-600 bg-[#D000001A]"/>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex w-full px-6 justify-between">
                            <div>Show 5 Order of 100 order</div>
                            <div className="flex gap-2">
                                <button>Prev</button>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6</button>
                                <button>7</button>
                                <button>8</button>
                                <button>9</button>
                                <button>10</button>
                                <button>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderList