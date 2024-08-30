import React, { useState } from "react";
import SidebarAdmin from "../components/SiderbarAdmin";
import { FaPlus, FaRegListAlt, FaUserCircle } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import EditUser from "../components/EditUser";
import InsertUser from "../components/InsertUser";
import NavbarAdmin from "../component/NavbarAdmin";

function UserList() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, SetShowAdd] = useState(false);
  return (
    <>
      <NavbarAdmin />

      <div className="flex ">
        <SidebarAdmin />
        <div className="relative w-full">
          {showAdd ? <InsertUser closeMenu={SetShowAdd} /> : ""}
          {showUpdate ? <EditUser closeMenu={setShowUpdate} /> : ""}

          <div className="border-l w-full min-h-screen pt-6 pl-7 pr-20 flex flex-col gap-5">
            <div className="text-2xl">User List</div>
            <div className="flex justify-between items-center">
              <div>
                <button
                  onClick={() => {
                    SetShowAdd(true);
                  }}
                  className="flex items-center gap-3 bg-[#FF8906] p-2 rounded-md"
                >
                  <FaPlus /> Add User
                </button>
              </div>
              <div>
                <form className="flex flex-col gap-2">
                  <label htmlFor="search" className="text-xs text-[#4F5665]">
                    Search user
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
                      <th className="w-24">Image</th>
                      <th className="w-60">Full Name</th>
                      <th>Phone</th>
                      <th className="w-48">Address</th>
                      <th className="w-44">Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t text-[#4F5665]">
                      <td className="text-center ">
                        <input type="checkbox" />
                      </td>
                      <td className="py-3 flex items-center justify-center">
                        <div className="flex items-center justify-center rounded bg-blue-400 h-12 w-12">
                          <FaUserCircle />
                        </div>
                      </td>
                      <td className="text-center">Eleanor Pena</td>
                      <td className="text-center">(205) 555-0100</td>
                      <td className="text-center">
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </td>
                      <td className="text-center">cikaracak@gmail.com</td>
                      <td className="justify-center flex">
                        <div className="flex gap-3">
                          <div className="bg-[#8E64471A] h-6 w-6 rounded-full flex items-center justify-center">
                            <FaRegListAlt className="text-[#8E6447]" />
                          </div>
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
                      <td className="py-3 flex items-center justify-center">
                        <div className="flex items-center justify-center rounded bg-blue-400 h-12 w-12">
                          <FaUserCircle />
                        </div>
                      </td>
                      <td className="text-center">Eleanor Pena</td>
                      <td className="text-center">(205) 555-0100</td>
                      <td className="text-center">
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </td>
                      <td className="text-center">cikaracak@gmail.com</td>
                      <td className="justify-center flex">
                        <div className="flex gap-3">
                          <div className="bg-[#8E64471A] h-6 w-6 rounded-full flex items-center justify-center">
                            <FaRegListAlt className="text-[#8E6447]" />
                          </div>
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
                      <td className="py-3 flex items-center justify-center">
                        <div className="flex items-center justify-center rounded bg-blue-400 h-12 w-12">
                          <FaUserCircle />
                        </div>
                      </td>
                      <td className="text-center">Eleanor Pena</td>
                      <td className="text-center">(205) 555-0100</td>
                      <td className="text-center">
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </td>
                      <td className="text-center">cikaracak@gmail.com</td>
                      <td className="justify-center flex">
                        <div className="flex gap-3">
                          <div className="bg-[#8E64471A] h-6 w-6 rounded-full flex items-center justify-center">
                            <FaRegListAlt className="text-[#8E6447]" />
                          </div>
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

export default UserList;
