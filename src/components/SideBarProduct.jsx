import React from "react";
import range from "../img/range.svg"

function SideBarProduct(){
    return(
        <div className="bg-black h-full w-full max-w-96 rounded-xl">
            <form className="p-5 flex flex-col gap-8">
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
                    <input type="checkbox" name="favorite" id="favorite" />
                    <div className="text-white text-lg">Favorite Product</div>
                </label>
                <label htmlFor="coffee" className="flex gap-3">
                    <input type="checkbox" name="coffee" id="coffee" />
                    <div className="text-white text-lg">Coffee</div>
                </label>
                <label htmlFor="noncoffee" className="flex gap-3">
                    <input type="checkbox" name="noncoffee" id="noncoffee" />
                    <div className="text-white text-lg">Non Coffee</div>
                </label>
                <label htmlFor="food" className="flex gap-3">
                    <input type="checkbox" name="food" id="food" />
                    <div className="text-white text-lg">Foods</div>
                </label>
                <label htmlFor="addon" className="flex gap-3">
                    <input type="checkbox" name="addon" id="addon" />
                    <div className="text-white text-lg">Add-On</div>
                </label>
                <div className="text-white font-bold text-lg">Sort By</div>
                <label htmlFor="buy" className="flex gap-3">
                    <input type="checkbox" name="buy" id="buy" />
                    <div className="text-white text-lg">Buy 1 get 1</div>
                </label>
                <label htmlFor="coffee" className="flex gap-3">
                    <input type="checkbox" name="coffee" id="coffee" />
                    <div className="text-white text-lg">Flash sale</div>
                </label>
                <label htmlFor="birthdat" className="flex gap-3">
                    <input type="checkbox" name="birthdat" id="birthdat" />
                    <div className="text-white text-lg">Birthday Package</div>
                </label>
                <label htmlFor="cheap" className="flex gap-3">
                    <input type="checkbox" name="cheap" id="cheap" />
                    <div className="text-white text-lg">Cheap</div>
                </label>
                <div className="flex flex-col gap-2">
                    <div className="text-white font-bold text-lg">Range Price</div>
                    <div className="">
                        <img src={range} alt="" />
                    </div>
                    <button type="submit" className="w-full bg-[#FF8906] py-3 rounded-lg font-medium text-sm mb-4">Apply Filter</button>
                </div>
            </form>
        </div>
    )
}
export default SideBarProduct;
