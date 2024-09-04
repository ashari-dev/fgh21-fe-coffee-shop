import React, { useState } from "react";
import SidebarAdmin from "../components/SiderbarAdmin";
import { FaPlus, FaRegListAlt} from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import DetailOrderSheet from "../components/DetailOrderSheet";
import Navbar from "../component/Navbar";

function OrderList() {
  const [detailOrder, SetDetailOrder] = useState(false);

  return (
    <>
      <Navbar />
      <div className="py-8 flex items-center justify-between border-b"></div>
      <div className="flex ">
        <SidebarAdmin />
        <div className="relative w-full">
          {detailOrder ? <DetailOrderSheet closeMenu={SetDetailOrder} /> : ""}
          <div className="border-l w-full min-h-screen pt-6 pl-7 pr-20 flex flex-col gap-5">
            <div className="text-2xl">Order List</div>
            <div className="flex justify-between items-center">
              <div>
                <button className="flex items-center gap-3 bg-[#FF8906] p-2 rounded-md">
                  <FaPlus /> Add Order
                </button>
              </div>
              <div className="flex gap-3">
                <form className="flex flex-col gap-2">
                  <label htmlFor="status" className="text-xs text-[#4F5665]">
                    Status
                  </label>
                  <div className="flex gap-5">
                    <div className="border flex p-2 rounded-md items-center">
                      <select
                        className="w-60 bg-white outline-none text-[#4F5665]"
                        name="status"
                        id="status"
                      >
                        <option value="">All</option>
                        <option value="">Done</option>
                        <option value="">Panding</option>
                        <option value="">On Proses</option>
                        <option value="">Waiting</option>
                      </select>
                    </div>
                  </div>
                </form>
                <form className="flex flex-col gap-2">
                  <label htmlFor="search" className="text-xs text-[#4F5665]">
                    Search Order
                  </label>
                  <div className="flex gap-5">
                    <div className="border flex px-2 rounded-md items-center">
                      <input
                        type="text"
                        id="search"
                        placeholder="Enter User Name"
                        className="outline-none"
                      />
                      <IoMdSearch className="text-[#4F5665]" />
                    </div>
                    <button className="flex items-center gap-3 bg-[#FF8906] p-2 rounded-md">
                      <CiFilter /> Filter
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-col gap-5 border rounded-md p-5">
              <div className="">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="w-16">#</th>
                      <th className="w-36">No. Order</th>
                      <th className="w-60">Date</th>
                      <th>Order</th>
                      <th className="w-48">Status</th>
                      <th className="w-44">Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t text-[#4F5665]">
                      <td className="text-center ">
                        <input type="checkbox" />
                      </td>
                      <td className="items-center">#12354-09893</td>
                      <td className="text-center">26 January 2023</td>
                      <td className="py-3">
                        <div className="flex w-full  justify-center">
                          <ul className="list-disc">
                            <li className="">Hazelnut Latte R 1x</li>
                            <li>Caramel Machiato L 1x</li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="text-[#00A700] flex justify-center">
                          <p className="bg-[#00A70033] px-3 py-1 rounded-full font-semibold ">
                            Done
                          </p>
                        </div>
                      </td>
                      <td className="text-center">IDR 40.000</td>
                      <td className="">
                        <div className="flex gap-3 h-full justify-center ">
                          <button
                            onClick={() => SetDetailOrder(true)}
                            className="bg-[#8E64471A] h-6 w-6 rounded-full flex items-center justify-center"
                          >
                            <FaRegListAlt className="text-[#8E6447]" />
                          </button>
                          <button className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center">
                            <FiEdit3 className="text-[#FF8906]" />
                          </button>
                          <div className="bg-[#D000001A] h-6 w-6 rounded-full flex items-center justify-center">
                            <AiOutlineDelete className="text-[#d00000]" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-t text-[#4F5665]">
                      <td className="text-center ">
                        <input type="checkbox" />
                      </td>
                      <td className="items-center">#12354-09893</td>
                      <td className="text-center">26 January 2023</td>
                      <td className="py-3">
                        <div className="flex w-full  justify-center">
                          <ul className="list-disc">
                            <li className="">Hazelnut Latte R 1x</li>
                            <li>Caramel Machiato L 1x</li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="text-[#D00000] flex justify-center">
                          <p className="bg-[#D0000033] px-3 py-1 rounded-full font-semibold ">
                            Pending
                          </p>
                        </div>
                      </td>
                      <td className="text-center">IDR 40.000</td>
                      <td className="">
                        <div className="flex gap-3 h-full justify-center ">
                          <button
                            onClick={() => SetDetailOrder(true)}
                            className="bg-[#8E64471A] h-6 w-6 rounded-full flex items-center justify-center"
                          >
                            <FaRegListAlt className="text-[#8E6447]" />
                          </button>
                          <button className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center">
                            <FiEdit3 className="text-[#FF8906]" />
                          </button>
                          <div className="bg-[#D000001A] h-6 w-6 rounded-full flex items-center justify-center">
                            <AiOutlineDelete className="text-[#d00000]" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-t text-[#4F5665]">
                      <td className="text-center ">
                        <input type="checkbox" />
                      </td>
                      <td className="items-center">#12354-09893</td>
                      <td className="text-center">26 January 2023</td>
                      <td className="py-3">
                        <div className="flex w-full  justify-center">
                          <ul className="list-disc">
                            <li className="">Hazelnut Latte R 1x</li>
                            <li>Caramel Machiato L 1x</li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="text-[#FF8906] flex justify-center">
                          <p className="bg-[#FF890633] px-3 py-1 rounded-full font-semibold ">
                            On Prosess
                          </p>
                        </div>
                      </td>
                      <td className="text-center">IDR 40.000</td>
                      <td className="">
                        <div className="flex gap-3 h-full justify-center ">
                          <button
                            onClick={() => SetDetailOrder(true)}
                            className="bg-[#8E64471A] h-6 w-6 rounded-full flex items-center justify-center"
                          >
                            <FaRegListAlt className="text-[#8E6447]" />
                          </button>
                          <button className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center">
                            <FiEdit3 className="text-[#FF8906]" />
                          </button>
                          <div className="bg-[#D000001A] h-6 w-6 rounded-full flex items-center justify-center">
                            <AiOutlineDelete className="text-[#d00000]" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-t text-[#4F5665]">
                      <td className="text-center ">
                        <input type="checkbox" />
                      </td>
                      <td className="items-center">#12354-09893</td>
                      <td className="text-center">26 January 2023</td>
                      <td className="py-3">
                        <div className="flex w-full  justify-center">
                          <ul className="list-disc">
                            <li className="">Hazelnut Latte R 1x</li>
                            <li>Caramel Machiato L 1x</li>
                          </ul>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="text-[#4F5665] flex justify-center">
                          <p className="bg-[#4F566533] px-3 py-1 rounded-full font-semibold ">
                            Waiting
                          </p>
                        </div>
                      </td>
                      <td className="text-center">IDR 40.000</td>
                      <td className="">
                        <div className="flex gap-3 h-full justify-center ">
                          <button
                            onClick={() => {
                              SetDetailOrder(true);
                            }}
                            className="bg-[#8E64471A] h-6 w-6 rounded-full flex items-center justify-center"
                          >
                            <FaRegListAlt className="text-[#8E6447]" />
                          </button>
                          <button className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center">
                            <FiEdit3 className="text-[#FF8906]" />
                          </button>
                          <div className="bg-[#D000001A] h-6 w-6 rounded-full flex items-center justify-center">
                            <AiOutlineDelete className="text-[#d00000]" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between text-[#4F5665]">
                <div>
                  <p>Show 5 user of 100 user</p>
                </div>
                <div className="flex gap-3">
                  <span>Prev</span>
                  <span className="text-[#FF8906]">1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span className="text-black">Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
