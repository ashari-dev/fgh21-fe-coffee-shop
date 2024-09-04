import React from "react";
import {
  FaRegUser,
  FaLocationDot,
  FaPhone,
  FaRegCreditCard,
  FaTruck,
  FaRepeat,
  FaX,
} from "react-icons/fa6";
import Kopie from "../img/Kopie.svg";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

function DetailOrder() {
  let { id } = useParams();
  const [data, setData] = React.useState({})
  const [product, setProduct] = React.useState({})
  async function GetPayment() {
    const response = await fetch(`http://localhost:8000/transaction/${id}`)
    const json = await response.json()
    setData(json.result)
  }
  async function GetProduct() {
    const response = await fetch(`http://localhost:8000/transaction/products/${id}`)
    const json = await response.json()
    setProduct(json.result)
  }
  React.useEffect(()=>{
    GetPayment()
    GetProduct()
  },[])
  console.log(data.price)
  console.log(product)
  const price = data.price.reduce((a, b) => a + b, 0);
  const quantity = data.quantity.reduce((a, b) => a + b, 0);
  const subTotal = price * quantity
  return (
    <Layout>
      <div className="bg-black w-screen h-24"></div>
      <div className="flex flex-col gap-6 md:px-32 px-5 py-16">
        <div className="flex flex-col text-[#4F5665] gap-1">
          <div className="flex gap-1 text-[#0B0909]">
            <div className="font-medium text-5xl">Order</div>
            <div className="font-bold text-5xl ">#{data.noOrder}</div>
          </div>
          <div className="">21 March 2023 at 10:30 AM</div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/2 pr-2">
            <div className="text-[#0B132A] font-medium text-xl mb-4">
              Order Information
            </div>
            <div className="flex items-center p-4 gap-2 border-b-2">
              <FaRegUser className="text-[#4F5665]" />
              <div className="flex w-full justify-between">
                <div className="font-medium text-[#4F5665]">Full Name</div>
                <div className="text-[#0B132A] font-bold">
                  {data.fullName}
                </div>
              </div>
            </div>
            <div className="flex items-center p-4 gap-2 border-b-2">
              <FaLocationDot className="text-[#4F5665]" />
              <div className="flex w-full justify-between">
                <div className="font-medium text-[#4F5665]">Address</div>
                <div className="text-[#0B132A] font-bold">
                  {data.address}
                </div>
              </div>
            </div>
            <div className="flex items-center p-4 gap-2 border-b-2">
              <FaPhone className="text-[#4F5665]" />
              <div className="flex w-full justify-between">
                <div className="font-medium text-[#4F5665]">Phone</div>
                <div className="text-[#0B132A] font-bold">{data.phoneNumber ? data.phoneNumber :"-"}</div>
              </div>
            </div>
            <div className="flex items-center p-4 gap-2 border-b-2">
              <FaRegCreditCard className="text-[#4F5665]" />
              <div className="flex w-full justify-between">
                <div className="font-medium text-[#4F5665]">Payment Method</div>
                <div className="text-[#0B132A] font-bold">{data.payment}</div>
              </div>
            </div>
            <div className="flex items-center p-4 gap-2 border-b-2">
              <FaTruck className="text-[#4F5665]" />
              <div className="flex w-full justify-between">
                <div className="font-medium text-[#4F5665]">Shipping</div>
                <div className="text-[#0B132A] font-bold">{data.orderType}</div>
              </div>
            </div>
            <div className="flex items-center p-3 gap-2 border-b-2">
              <FaRepeat className="text-[#4F5665]" />
              <div className="flex w-full justify-between items-center">
                <div className="font-medium text-[#4F5665]">Shipping</div>
                <div className="bg-[#00A700]/20 p-2 text-xs rounded-full text-[#00A700] font-bold">
                  {data.transactionStatus}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 gap-2">
              <div className="font-medium text-[#4F5665]">Total Transaksi</div>
              <div className="text-[#FF8906] font-bold">IDR. {subTotal.toLocaleString("id")}</div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 pl-2">
            <div className="text-[#0B132A] font-medium text-xl">Your Order</div>
            {product.map((item) => {
                return (
                  <div key={item.id} className="flex gap-7 p-2 bg-[#E8E8E8]/30 rounded-md w-full">
                    <div className="">
                      <img src={Kopie} alt="" className="w-44 h-44" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-center bg-[#D00000] p-2 text-white rounded-full">
                        FLASH SALE!
                      </div>
                      <div className="text-[#0B0909] font-bold text-lg">
                        {item.title}
                      </div>
                      <div className="flex gap-2 ">
                        <div className="">{item.quantity}pcs</div>
                        <div className="">|</div>
                        <div className="">{item.size}</div>
                        <div className="">|</div>
                        <div className="">{item.variant}</div>
                        <div className="">|</div>
                        <div className="">{item.orderType}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-[#D00000] line-through font-medium text-xs">
                          IDR {(item.price * 2).toLocaleString("id")}
                        </div>
                        <div className="font-medium text-[#FF8906]">IDR {item.price.toLocaleString("id")}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailOrder;
