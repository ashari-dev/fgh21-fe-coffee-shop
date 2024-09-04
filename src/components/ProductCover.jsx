import React from "react";
import Cover from "../assets/img/product_cover.png"

function ProductCover() {
   return(
    <>
        <div className="bg-black w-full h-24"></div>
        <div className="w-full h-72 md:block hidden">
            <div className="">
                <img src={Cover} alt="product_img" className="w-full"/>
            </div>
        </div>
        <div className="-mt-16 px-32 text-5xl text-white w-3/5 md:block hidden">We Provide Good Coffee and Healthy Meals</div>
    </>
   ) 
}

export default ProductCover