import React, { useState, useEffect } from "react";
import SidebarAdmin from "../components/SiderbarAdmin";
import { FaPlus, FaRegListAlt } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import DetailOrderSheet from "../components/DetailOrderSheet";
import NavbarAdmin from "../component/NavbarAdmin";
import TransactionStatus from "../components/TransactionStatus";

function OrderList() {
  const [detailOrder, SetDetailOrder] = useState(false);
  const [listTransaction, setListTransaction] = useState([]);
  const [dataPage, setDataPage] = useState({});
  const [inputSearch, setInputSearch] = useState("");
  const [status, setStatus] = useState(1);
  const [page, setPage] = useState(1);
  const [data, setDataOrder] = useState({});

  
  async function deleteItem(id) {
    await fetch(`http://localhost:8000/transaction/${id}`, {
      method: "DELETE",
    });
    dataTransaction();
  }

  async function filterTransactions(e) {
    console.log(inputSearch);
    e.preventDefault();
    const listDataTransaction = await fetch(
      `http://localhost:8000/transaction/admin?page=${page}&search=${inputSearch}`,
      {}
    );
    const listFilterTransaction = await listDataTransaction.json();
    setListTransaction(listFilterTransaction.result);
    const pageInfo = listFilterTransaction.pageInfo;
    setDataPage(pageInfo);
  }

  async function filterStatus() {
    // e.preventDefault();
    // const status = e.target.findStatus.value
    const listDataTransaction = await fetch(
      `http://localhost:8000/transaction/status?search=${status}`,
      {}
    );
    const listFilterTransaction = await listDataTransaction.json();
    setListTransaction(listFilterTransaction.result);
    const pageInfo = listFilterTransaction.pageInfo;
    setDataPage(pageInfo);
    console.log(pageInfo);
  }
  async function paginationTransactions(e) {
    e.preventDefault();
    const listDataTransaction = await fetch(
      `http://localhost:8000/transaction/admin?page=${page}&search=${inputSearch}`,
      {}
    );
    const listFilterTransaction = await listDataTransaction.json();
    setListTransaction(listFilterTransaction.result);
    const pageInfo = listFilterTransaction.pageInfo;
    setDataPage(pageInfo);
  }

  async function dataTransaction() {
    const endPoint = `http://localhost:8000/transaction/admin`;
    const response = await fetch(endPoint);
    const data = await response.json();
    const listData = data.result;
    const pageInfo = data.pageInfo;
    console.log(data);
    setDataPage(pageInfo);
    setListTransaction(listData);
  }

  useEffect(() => {
    filterStatus();
  }, [status]);
  
  useEffect(()=>{
    dataTransaction();
    filterStatus()
  }, [status])

  useEffect(() => {
    dataTransaction();
  }, [detailOrder]);
  const changetData = (data) => {
    setDataOrder(data);
    SetDetailOrder(true);
  };
  return (
    <>
      <NavbarAdmin />

      <div className="flex ">
        <SidebarAdmin active={3} />
        <div className="relative w-full">
          {detailOrder ? (
            <DetailOrderSheet closeMenu={SetDetailOrder} data={data} />
          ) : (
            ""
          )}
          <div className="border-l w-full min-h-screen pt-6 pl-7 pr-20 flex flex-col gap-5">
            <div className="text-2xl">Order List</div>
            <div className="flex justify-between items-center">
              <div>
                <button className="flex items-center gap-3 bg-[#FF8906] p-2 rounded-md">
                  <FaPlus /> Add Order
                </button>
              </div>
              <div className="flex gap-3">
                <form onSubmit={filterStatus} className="flex flex-col gap-2">
                  <label htmlFor="status" className="text-xs text-[#4F5665]">
                    Status
                  </label>
                  <div className="flex gap-5">
                    <div className="border flex p-2 rounded-md items-center">
                      <select
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-60 bg-white outline-none text-[#4F5665]"
                        name="findStatus"
                        id="status"
                      >
                        <option>All</option>
                        <option value={1}>Pending</option>
                        <option value={2}>On Proses</option>
                        <option value={3}>Waiting</option>
                        <option value={4}>Done</option>
                      </select>
                    </div>
                  </div>
                </form>
                <form
                  onSubmit={filterTransactions}
                  className="flex flex-col gap-2"
                >
                  <label htmlFor="search" className="text-xs text-[#4F5665]">
                    Search Order
                  </label>
                  <div className="flex gap-5">
                    <div className="border flex px-2 rounded-md items-center">
                      <input
                        type="text"
                        id="search"
                        placeholder="Enter Order"
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
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
                    {listTransaction.map((item) => {
                      return (
                        <tr className="border-t text-[#4F5665]">
                          <td className="text-center ">
                            <input type="checkbox" />
                          </td>
                          <td className="items-center">{item.noOrder}</td>
                          <td className="text-center">26 January 2023</td>
                          <td className="py-3">
                            <div className="flex w-full  justify-center">
                              <ul className="list-disc">
                                <li className="">{item.title} x{item.quantity}</li>
                                {/* <li>Caramel Machiato L 1x</li> */}
                              </ul>
                            </div>
                          </td>
                          <td className="text-center">
                            <div className="flex justify-center">
                              <TransactionStatus data={item.orderStatus} />
                            </div>
                          </td>
                          <td className="text-center">
                            IDR {item.price.toLocaleString("id")}
                          </td>
                          <td className="">
                            <div className="flex gap-3 h-full justify-center ">
                              <button
                                onClick={() => changetData(item)}
                                className="bg-[#8E64471A] h-6 w-6 rounded-full flex items-center justify-center"
                              >
                                <FaRegListAlt className="text-[#8E6447]" />
                              </button>
                              <button className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center">
                                <FiEdit3 className="text-[#FF8906]" />
                              </button>
                              <button
                                onClick={() => deleteItem(item.id)}
                                className="bg-[#D000001A] h-6 w-6 rounded-full flex items-center justify-center">
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
                    Show {listTransaction.length} transaction of{" "}
                    {dataPage.totalData} transaction
                  </p>
                </div>
                <form action="" onSubmit={paginationTransactions}>
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

export default OrderList;
