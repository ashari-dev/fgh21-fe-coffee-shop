import React from "react";
import { FaCircleXmark } from "react-icons/fa6";

function PaymentListOrder() {
  return (
    <>
      <div className="flex flex-col p-32 gap-12">
        <div className="text-4xl">Payment Details</div>
        <div className="flex gap-12">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>Your Order</div>
              <button className="bg-orange-400 px-4 py-2 rounded-xl">
                + Add Menu
              </button>
            </div>
            <div className="flex gap-8 bg-gray-100 p-4">
              <div className=" w-1/5 bg-blue-400"></div>
              <div className="w-3/5 flex flex-col gap-3">
                <div className="bg-red-700 max-w-[120px] flex items-center justify-center text-white p-1 rounded-xl font-semibold">
                  FLASH SALE!
                </div>
                <div className="font-bold">Hazelnut Latte</div>
                <div className="flex gap-4 text-gray-600">
                  <div>2pcs</div>
                  <div>Regular</div>
                  <div>Ice</div>
                  <div>Dine In</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[10px]">IDR40.000</div>
                  <div className="text-[15px]">IDR 20.000</div>
                </div>
              </div>
              <button className="w-1/5 text-red-800 text-2xl flex justify-center items-center">
                <FaCircleXmark />
              </button>
            </div>
            <div className="flex gap-8 bg-gray-100 p-4">
              <div className=" w-1/5 bg-blue-400"></div>
              <div className="w-3/5 flex flex-col gap-3">
                <div className="bg-red-700 max-w-[120px] flex items-center justify-center text-white p-1 rounded-xl font-semibold">
                  FLASH SALE!
                </div>
                <div className="font-bold">Hazelnut Latte</div>
                <div className="flex gap-4 text-gray-600">
                  <div>2pcs</div>
                  <div>Regular</div>
                  <div>Ice</div>
                  <div>Dine In</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[10px]">IDR40.000</div>
                  <div className="text-[15px]">IDR 20.000</div>
                </div>
              </div>
              <button className="w-1/5 text-red-800 text-2xl flex justify-center items-center">
                <FaCircleXmark />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold">Payment Info & Delivery</div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 font-bold">
                  <label htmlFor="email">Email</label>
                  <input
                    className="border outline-none w-full h-12 pl-4"
                    type="email"
                    placeholder="Enter Your Email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col gap-2 font-bold">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    className="border outline-none w-full h-12 pl-4"
                    type="text"
                    placeholder="Enter Your Full Name"
                    id="fullname"
                  />
                </div>
                <div className="flex flex-col gap-2 font-bold">
                  <label htmlFor="address">Address</label>
                  <input
                    className="border outline-none w-full h-12 pl-4"
                    type="text"
                    placeholder="Enter Your Address"
                    id="address"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">Delivery</div>
                  <div className="flex gap-2">
                    <button className="flex-1 border py-2 border-orange-400">
                      Dine In
                    </button>
                    <button className="flex-1 border py-2 text-gray-500">
                      Door Delivery
                    </button>
                    <button className="flex-1 border py-2 text-gray-500">
                      Pick Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div>Total</div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p>Order</p>
                  <p className="font-bold">Idr. 40.000</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery</p>
                  <p className="font-bold">Idr. 0</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p className="font-bold">Idr. 4000</p>
                </div>
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="font-bold">Idr. 44.000</p>
                </div>
              </div>
              <button className="bg-orange-400 py-4">Checkout</button>
              <div className="flex flex-col gap-2">
                <div>We Accept</div>
                <div className="flex justify-between">
                  <button>Bri</button>
                  <button>Dana</button>
                  <button>BCA</button>
                  <button>Gopay</button>
                  <button>Ovo</button>
                  <button>Paypal</button>
                </div>
              </div>
              <div>*Get Discount if you pay with Bank Central Asia</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentListOrder;
