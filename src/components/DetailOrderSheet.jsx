import React from "react";
import { CiImageOn } from "react-icons/ci";
import {
  FaLocationDot,
  FaPhone,
  FaRegCreditCard,
  FaRegUser,
  FaTruck,
} from "react-icons/fa6";
import { FcProcess } from "react-icons/fc";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Kopie from "../img/Kopie.svg";
import { useSelector } from "react-redux";

function DetailOrderSheet(props) {
  const token = useSelector((state) => state.auth.token);
  async function Update(e) {
    e.preventDefault();
    const status = e.target.status.value;

    const statusInt = parseInt(status, 10);
    console.log(statusInt);

    const formData = new URLSearchParams();
    formData.append("transactionStatus", statusInt);

    const dataStatus = await fetch(
      "http://localhost:8000/transaction-status/update/" + props.data.noOrder,
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      }
    );
    console.log(dataStatus);
    const listData = await dataStatus.json();
    console.log(listData);
    props.closeMenu(false);
  }

  return (
    <div className="">
      <div className="absolute bg-[#00000099] w-full h-screen flex justify-end">
        <div className=" bg-white p-5 flex flex-col w-1/3">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold text-2xl">
              Order #{props.data.noOrder}
            </h1>
            <button
              onClick={() => {
                props.closeMenu(false);
              }}
              className="text-red-600"
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>
          <div className="font-semibold">Order Information</div>
          <form onSubmit={Update} className="">
            <div className="">
              <div className="flex items-center p-4 gap-2 border-b-2">
                <FaRegUser className="text-[#4F5665]" />
                <div className="flex w-full justify-between">
                  <div className="font-medium text-xs text-[#4F5665]">
                    Full Name
                  </div>
                  <div className="text-[#0B132A] font-bold text-xs">
                    Ghaluh Wizard Anggoro
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 gap-2 border-b-2">
                <FaLocationDot className="text-[#4F5665]" />
                <div className="flex w-full justify-between">
                  <div className="font-medium text-xs text-[#4F5665]">
                    Address
                  </div>
                  <div className="text-[#0B132A] font-bold text-xs">
                    Griya bandung indah
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 gap-2 border-b-2">
                <FaPhone className="text-[#4F5665]" />
                <div className="flex w-full justify-between">
                  <div className="font-medium text-xs text-[#4F5665]">
                    Phone
                  </div>
                  <div className="text-[#0B132A] font-bold text-xs">
                    082116304338
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 gap-2 border-b-2">
                <FaRegCreditCard className="text-[#4F5665]" />
                <div className="flex w-full justify-between">
                  <div className="font-medium text-xs text-[#4F5665]">
                    Payment Method
                  </div>
                  <div className="text-[#0B132A] font-bold text-xs">Cash</div>
                </div>
              </div>
              <div className="flex items-center p-4 gap-2 border-b-2">
                <FaTruck className="text-[#4F5665]" />
                <div className="flex w-full justify-between">
                  <div className="font-medium text-xs text-[#4F5665]">
                    Shipping
                  </div>
                  <div className="text-[#0B132A] font-bold text-xs">
                    Dine In
                  </div>
                </div>
              </div>
              <div className="flex items-center p-3 gap-2 border-b-2">
                <FcProcess className="text-[#4F5665]" />
                <div className="flex w-full justify-between items-center">
                  <div className="font-medium text-xs text-[#4F5665]">
                    status
                  </div>
                  <select
                    name="status"
                    className="bg-gray-400/20 p-2 text-xs rounded-lg font-medium"
                  >
                    <option value={4}>Done</option>
                    <option value={2}>On Progress</option>
                    <option value={1}>Waiting</option>
                    <option value={3}>Pending</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 gap-2">
                <div className="font-medium text-xs text-[#4F5665]">
                  Total Transaksi
                </div>
                <div className="text-[#FF8906] font-bold text-xs">
                  IDR 40.000
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-5">
                <div className="flex gap-5 p-2 bg-[#E8E8E8]/30 rounded-md w-full">
                  <div className="">
                    <img src={Kopie} alt="" className="w-20 h-20" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[#0B0909] font-bold text-lg">
                      Hazelnut Latte
                    </div>
                    <div className="flex gap-2 text-xs">
                      <div className="">2pcs</div>
                      <div className="">|</div>
                      <div className="">Regular</div>
                      <div className="">|</div>
                      <div className="">Ice</div>
                      <div className="">|</div>
                      <div className="">Dine In</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-[#D00000] line-through font-medium text-xs">
                        IDR 40.000
                      </div>
                      <div className="font-medium text-[#FF8906]">
                        IDR 20.000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-7 p-2 bg-[#E8E8E8]/30 rounded-md w-full">
                  <div className="">
                    <img src={Kopie} alt="" className="w-20 h-20" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="text-[#0B0909] font-bold text-lg">
                      Hazelnut Latte
                    </div>
                    <div className="flex gap-2 text-xs">
                      <div className="">2pcs</div>
                      <div className="">|</div>
                      <div className="">Regular</div>
                      <div className="">|</div>
                      <div className="">Ice</div>
                      <div className="">|</div>
                      <div className="">Dine In</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-[#D00000] font-medium text-xs line-through">
                        IDR 40.000
                      </div>
                      <div className="font-medium text-[#FF8906]">
                        IDR 20.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-orange-500 w-full h-10 font-medium rounded-lg"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default DetailOrderSheet;
