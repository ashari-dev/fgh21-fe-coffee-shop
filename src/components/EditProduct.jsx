import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function EditProduct(props) {
  return (
    <div>
      <div className="absolute bg-[#00000099] w-full flex h-screen justify-end">
        <div className=" bg-white p-5 flex flex-col w-1/3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl">Edit Product</h1>
            <button
              onClick={() => {
                props.closeMenu(false);
              }}
              className="text-red-600"
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>
          <form action="" className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm">Photos Product</span>
              <div className="p-[15px] bg-[#E8E8E8] w-[50px] h-[50px] rounded-lg">
                <CiImageOn />
              </div>
              <button className="bg-[#FF8906] w-[80px] rounded-md px-[16px]">
                <span className="text-xs">Upload</span>
              </button>
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="productName" className="font-bold">
                Product Name
              </label>
              <div className="w-full flex items-center relative">
                <input
                  type="text"
                  id="productName"
                  placeholder="Enter Product Name"
                  name="productName"
                  className="h-[40px] px-5 outline-none w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="price" className="font-bold">
                Price
              </label>
              <div className="w-full flex items-center relative">
                <input
                  type="text"
                  id="price"
                  placeholder="Enter Product Price"
                  name="price"
                  className="h-[40px] px-5 outline-none w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
            </div>

            <div className="flex gap-2 flex-col">
              <label htmlFor="description" className="font-bold">
                Description
              </label>
              <div className="w-full flex items-center relative">
                <textarea
                  className=" px-5 py-3 outline-none w-full bg-[#DEDEDE] rounded-lg"
                  name="description"
                  id="description"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="" className="font-bold">
                Product Size
              </label>
              <div className="flex justify-between">
                <input
                  type="button"
                  value="R"
                  className="border hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
                <input
                  type="button"
                  value="L"
                  className="border hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
                <input
                  type="button"
                  value="XL"
                  className="border hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
                <input
                  type="button"
                  value="250 gr"
                  className="border hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
                <input
                  type="button"
                  value="500 gr"
                  className="border  hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="" className="font-bold">
                Stock
              </label>
              <div className="flex justify-between">
                <select
                  className="h-[40px] px-5 outline-none w-full bg-[#DEDEDE] rounded-lg"
                  name="stock"
                  id="stock"
                >
                  <option value="">Enter Product Stock</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <button className="bg-[#FF8906] w-full rounded-md py-[10px]">
                Edit Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
