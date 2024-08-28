import React from "react";
import Cover from "../assets/img/product_cover.png"

function ProductCover() {
   return(
    <>
        <div className="w-screen h-72">
            <div className="relative">
                <img src={Cover} alt="product_img" className="w-screen"/>
            </div>
            <div className="absolute top-0 py-36 px-32 text-5xl text-white w-3/5">We Provide Good Coffee and Healthy Meals</div>
        </div>
    </>
   ) 
}

export default ProductCover