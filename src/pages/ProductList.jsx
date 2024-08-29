import React, { useState } from "react";
import Navbar from "../component/Navbar";
import SidebarAdmin from "../components/SiderbarAdmin";
import { FaPlus, FaRegListAlt, FaUserCircle } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import InsertProduct from "../components/InsertProduct";
import EditProduct from "../components/EditProduct";

function ProductList() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, SetShowAdd] = useState(false);
  return (
    <>
      <div className="flex">
        <SidebarAdmin />
        <div className="relative w-full">
          {showAdd ? <InsertProduct closeMenu={SetShowAdd} /> : ""}
          {showUpdate ? <EditProduct closeMenu={setShowUpdate} /> : ""}

          <div className="border-l w-full min-h-screen pt-6 pl-7 pr-20 flex flex-col gap-5">
            <div className="text-2xl">Product List</div>
            <div className="flex justify-between items-center">
              <div>
                <button
                  onClick={() => {
                    SetShowAdd(true);
                  }}
                  className="flex items-center gap-3 bg-[#FF8906] p-2 rounded-md"
                >
                  <FaPlus /> Add Product
                </button>
              </div>
              <div>
                <form className="flex flex-col gap-2">
                  <label htmlFor="search" className="text-xs text-[#4F5665]">
                    Search Product
                  </label>
                  <div className="flex gap-5">
                    <div className="border flex px-2 rounded-md items-center">
                      <input
                        type="text"
                        id="search"
                        placeholder="Enter Product Name"
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
                      <th className="w-24">Image</th>
                      <th>Product Name</th>
                      <th className="w-32">Price</th>
                      <th className="w-52">Desc</th>
                      <th className="w-36">Produc Size</th>
                      <th className="w-36">Method</th>
                      <th className="w-24">Stock</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t text-[#4F5665]">
                      <td className="text-center ">
                        <input type="checkbox" />
                      </td>
                      <td className="items-center px-6">
                        <div className="flex items-center justify-center rounded bg-blue-400 h-12 w-12">
                          <FaUserCircle />
                        </div>
                      </td>
                      <td className="text-center px-3 py-3">
                        Caramel Machiato
                      </td>
                      <td className="text-center px-3 py-3">IDR 40.000</td>
                      <td className="text-center px-3 py-3">
                        Cold brewing is a method of brewing that ...
                      </td>
                      <td className="text-center px-3 py-3">R,L,XL,250gr</td>
                      <td className="text-center px-3 py-3">
                        Deliver, Dine In
                      </td>
                      <td className="text-center px-3 py-3">200</td>
                      <td className="justify-center text-center">
                        <div className="flex gap-3 w-full justify-center">
                          <button
                            onClick={() => setShowUpdate(true)}
                            className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center"
                          >
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
                      <td className="items-center px-6">
                        <div className="flex items-center justify-center rounded bg-blue-400 h-12 w-12">
                          <FaUserCircle />
                        </div>
                      </td>
                      <td className="text-center px-3 py-3">
                        Caramel Machiato
                      </td>
                      <td className="text-center px-3 py-3">IDR 40.000</td>
                      <td className="text-center px-3 py-3">
                        Cold brewing is a method of brewing that ...
                      </td>
                      <td className="text-center px-3 py-3">R,L,XL,250gr</td>
                      <td className="text-center px-3 py-3">
                        Deliver, Dine In
                      </td>
                      <td className="text-center px-3 py-3">200</td>
                      <td className="justify-center text-center">
                        <div className="flex gap-3 w-full justify-center">
                          <button
                            onClick={() => setShowUpdate(true)}
                            className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center"
                          >
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
                      <td className="items-center px-6">
                        <div className="flex items-center justify-center rounded bg-blue-400 h-12 w-12">
                          <FaUserCircle />
                        </div>
                      </td>
                      <td className="text-center px-3 py-3">
                        Caramel Machiato
                      </td>
                      <td className="text-center px-3 py-3">IDR 40.000</td>
                      <td className="text-center px-3 py-3">
                        Cold brewing is a method of brewing that ...
                      </td>
                      <td className="text-center px-3 py-3">R,L,XL,250gr</td>
                      <td className="text-center px-3 py-3">
                        Deliver, Dine In
                      </td>
                      <td className="text-center px-3 py-3">200</td>
                      <td className="justify-center text-center">
                        <div className="flex gap-3 w-full justify-center">
                          <button
                            onClick={() => setShowUpdate(true)}
                            className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center"
                          >
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

export default ProductList;
