import React, { useState, useEffect } from "react";
import SidebarAdmin from "../components/SiderbarAdmin";
import { FaPlus, FaRegListAlt, FaUserCircle } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import EditUser from "../components/EditUser";
import InsertUser from "../components/InsertUser";
import Navbar from "../component/Navbar";
import NavbarAdmin from "../component/NavbarAdmin";
import { useParams } from "react-router-dom";

function UserList() {
  const [showUpdate, setShowUpdate] = useState(0);
  const [showAdd, SetShowAdd] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [dataPage, setDataPage] = useState({});
  const [inputSearch, setInputSearch] = useState("");
  const [page, setPage] = useState(1);

  async function deleteItem(id) {
    await fetch(`http://103.93.58.89:23230/profile/${id}`, {
      method: "DELETE",
    });
    dataUser();
  }

  async function filterUsers(e) {
    e.preventDefault();
    const listDataUser = await fetch(
      `http://103.93.58.89:23230/profile?page=${page}&search=${inputSearch}`,
      {}
    );

    const listFilterUser = await listDataUser.json();
    setListUser(listFilterUser.result);
    const pageInfo = listFilterUser.pageInfo;
    setDataPage(pageInfo);
  }

  async function paginationUsers(e) {
    e.preventDefault();
    const listDataUser = await fetch(
      `http://103.93.58.89:23230/profile?page=${page}&search=${inputSearch}`,
      {}
    );
    const listFilterUser = await listDataUser.json();
    setListUser(listFilterUser.result);
    const pageInfo = listFilterUser.pageInfo;
    setDataPage(pageInfo);
  }

  async function dataUser() {
    const endPoint = `http://103.93.58.89:23230/profile`;
    const response = await fetch(endPoint);
    const data = await response.json();
    const listData = data.result;
    console.log(listData);
    const pageInfo = data.pageInfo;
    setDataPage(pageInfo);
    setListUser(listData);
  }
  useEffect(() => {
    dataUser();
  }, [showAdd, showUpdate]);
  const dataTotalPage = dataPage.totalPage;
  return (
    <>
      <Navbar />
      <div className="py-8 flex items-center justify-between border-b"></div>
      <div className="flex ">
        <SidebarAdmin active={4} />
        <div className="relative w-full">
          {showAdd ? <InsertUser closeMenu={SetShowAdd} /> : ""}
          {showUpdate ? (
            <EditUser closeMenu={setShowUpdate} id={showUpdate} />
          ) : (
            ""
          )}

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
                <form onSubmit={filterUsers} className="flex flex-col gap-2">
                  <label htmlFor="search" className="text-xs text-[#4F5665]">
                    Search user
                  </label>
                  <div className="flex gap-5">
                    <div className="border flex px-2 rounded-md items-center">
                      <input
                        type="text"
                        id="search"
                        name="search"
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
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
                    {listUser.map((item) => {
                      return (
                        <tr
                          key={item.id}
                          data={item.id}
                          className="border-t text-[#4F5665]"
                        >
                          <td className="text-center ">
                            <input type="checkbox" />
                          </td>
                          <td className="py-3 flex items-center justify-center">
                            <div className="flex items-center justify-center rounded bg-blue-400 h-12 w-12 overflow-hidden">
                              <img
                                src={item.image ? item.image : <FaUserCircle />}
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="text-center">{item.fullName}</td>
                          <td className="text-center">{item.phoneNumber}</td>
                          <td className="text-center">{item.address}</td>
                          <td className="text-center">{item.email}</td>
                          <td className="flex justify-center">
                            <div className="flex gap-3">
                              <div className="bg-[#8E64471A] h-6 w-6 rounded-full flex items-center justify-center">
                                <FaRegListAlt className="text-[#8E6447]" />
                              </div>
                              <button
                                onClick={() => setShowUpdate(item.id)}
                                className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center"
                              >
                                <FiEdit3 className="text-[#FF8906]" />
                              </button>
                              <button
                                onClick={() => deleteItem(item.id)}
                                className="bg-[#D000001A] h-6 w-6 rounded-full flex items-center justify-center"
                              >
                                <AiOutlineDelete className="text-[#d00000]" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between text-[#4F5665]">
                <div>
                  <p>
                    Show {listUser.length} user of {dataPage.totalData} user
                  </p>
                </div>
                <form action="" onSubmit={paginationUsers}>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      onClick={
                        page > 1 ? () => setPage(page - 1) : () => setPage(1)
                      }
                      className="hover:text-[#FF8906]"
                    >
                      <input type="button" value="Prev" />
                    </button>
                    <div>{page}</div>
                    <button
                      type="submit"
                      onClick={
                        page < dataPage.totalPage
                          ? () => setPage(page + 1)
                          : () => setPage(1)
                      }
                      className="hover:text-[#FF8906]"
                    >
                      <input type="button" value="Next" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
