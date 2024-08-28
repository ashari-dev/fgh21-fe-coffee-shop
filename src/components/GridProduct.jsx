import React from "react";
import ImagesProduct from "../assets/grid-product.png";
import { FaShoppingCart } from "react-icons/fa";

function GridProduct() {
  return (
    <div className="flex gap-4 p-8">
      <div className="flex flex-col h-screen">
        {/* <div className="bg-red-400">Images</div> */}
        <img src={ImagesProduct} alt="" />
        <div className="max-w-[262px] absolute bg-white p-2 flex flex-col gap-2 top-60 left-10">
          <div className="text-2xl font-semibold">Hazelnut Latte</div>
          <p className="text-gray-600">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
          <p className="text-orange-400 text-2xl">IDR 20.000</p>
          <div className="flex gap-4 w-full">
            <button className="w-3/4 bg-orange-400 rounded-[6px] p-2">
              Buy
            </button>
            <button className="w-1/4 border border-orange-400 flex justify-center items-center text-orange-400 rounded-xl rounded-[6px]">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridProduct;
