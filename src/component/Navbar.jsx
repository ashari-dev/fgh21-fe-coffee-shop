import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="flex justify-between px-32 items-center py-3.5 bg-[#0B090921]">
        <div className="flex gap-16">
          <div>logo</div>
          <div className="flex gap-14 text-white">
            <div>Home</div>
            <div>Product</div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <button>
            <FaSearch className="text-white text-xl"></FaSearch>
          </button>
          <button>
            <FaShoppingCart className="text-white text-xl"></FaShoppingCart>
          </button>
          <div className="flex gap-5">
            <button
              type="button"
              className="border-2 border-white py-3 px-4 rounded text-white"
            >
              SignIn
            </button>
            <button type="button" className="bg-[#FF8906] py-3 px-4 rounded">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
