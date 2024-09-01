import React from "react";
import ImagesProduct from "../img/grid-product.png";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function GridProduct(props) {
  const nav = useNavigate();
  return (
    <div className="gap-4 p-8 min-h-[490px]">
      <div className="flex flex-col md:pb-32 relative">
        <img
          className="min-w-[300px] bg-black"
          src="https://picsum.photos/id/63/500/500"
          alt=""
        />
        <div className="max-w-[262px] md:absolute bg-white p-2 flex flex-col gap-2 md:top-60 md:left-2">
          <div className="text-2xl font-semibold">{props.data.title}</div>
          <p className="text-gray-600">{props.data.description}</p>
          <p className="text-orange-400 text-2xl">IDR. {props.data.price}</p>
          <div className="flex flex-col md:flex-row md:gap-4 gap-2 w-full">
            <button
              onClick={() => {
                nav("/detail-product/" + props.data.id);
              }}
              className="md:w-3/4 w-full bg-orange-400 rounded-[6px] p-2"
            >
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
