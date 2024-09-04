import React from "react";
import range from "../img/range.svg"
import { useState } from "react";

function SideBarProduct({ fetchProducts }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(20001);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 1);
        setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 1);
        setMaxPrice(value);
    };
    async function filterProducts(e) {
      e.preventDefault();
      const lowPrice = e.target.lowPrice.value;
      const highPrice = e.target.highPrice.value;
      const name = e.target.category.value;
      const title = e.target.seacrh.value;

      fetchProducts(lowPrice, highPrice, name, title);
    }
    return(
        <div className="bg-black h-full shrink-0 rounded-xl md:block hidden">
            <form onSubmit={filterProducts} className="p-5 flex flex-col gap-8">

                <div className="flex justify-between">
                    <div className="text-white font-semibold text-xl">Filter</div>
                    <div className="text-white font-bold text-lg">Reset Filter</div>
                </div>
                <label htmlFor="seacrh" className="flex flex-col gap-1">
                    <div className="text-white font-bold text-lg">Search</div>
                    <input type="text" name="seacrh" id="seacrh" placeholder="Search Your Product" className="p-3 w-full rounded-lg outline-none text-[#696F79]"/>
                </label>
                <div className="text-white font-bold text-lg">Category</div>
                <label htmlFor="favorite" className="flex gap-3">
                    <input type="radio" name="category" id="favorite" value="Favorite Product"/>
                    <div className="text-white text-lg">Favorite Product</div>
                </label>
                <label htmlFor="coffee" className="flex gap-3">
                    <input type="radio" name="category" id="coffee" value="Coffee"/>
                    <div className="text-white text-lg">Coffee</div>
                </label>
                <label htmlFor="noncoffee" className="flex gap-3">
                    <input type="radio" name="category" id="noncoffee" value="Non Coffee"/>
                    <div className="text-white text-lg">Non Coffee</div>
                </label>
                <label htmlFor="food" className="flex gap-3">
                    <input type="radio" name="category" id="food" value="Foods"/>
                    <div className="text-white text-lg">Foods</div>
                </label>
                <label htmlFor="addon" className="flex gap-3">
                    <input type="radio" name="category" id="addon" value="Add-On"/>
                    <div className="text-white text-lg">Add-On</div>
                </label>
                <div className="text-white font-bold text-lg">Sort By</div>
                <label htmlFor="buy" className="flex gap-3">
                    <input type="radio" name="sort" id="buy" />
                    <div className="text-white text-lg">Buy 1 get 1</div>
                </label>
                <label htmlFor="flash" className="flex gap-3">
                    <input type="radio" name="sort" id="flash" />
                    <div className="text-white text-lg">Flash sale</div>
                </label>
                <label htmlFor="birthdat" className="flex gap-3">
                    <input type="radio" name="sort" id="birthdat" />
                    <div className="text-white text-lg">Birthday Package</div>
                </label>
                <label htmlFor="cheap" className="flex gap-3">
                    <input type="radio" name="sort" id="cheap" />
                    <div className="text-white text-lg">Cheap</div>
                </label>
                <div className="flex flex-col gap-2">
                    <div className="text-white font-bold text-lg">Range Price</div>
                    <div className="">
                        <div className="flex">
                            <input type="range" id="lowPrice" name="lowPrice" min="0" max="20000" value={minPrice} onChange={handleMinChange} className="w-1/2"/>
                            <input type="range" id="highPrice" name="highPrice" min="20001" max="50000" value={maxPrice} onChange={handleMaxChange} className="w-1/2"/>
                        </div>
                        <div className="flex justify-between text-white mt-2">
                            <span>Idr.{minPrice}</span>
                            <span>Idr.{maxPrice}</span>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-[#FF8906] py-3 rounded-lg font-medium text-sm mb-4">Apply Filter</button>
                </div>
            </form>
        </div>
    )
}
export default SideBarProduct;
