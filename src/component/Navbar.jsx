import React from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import Logo from "../assets/components/Logo";

function Navbar() {
  return (
    <>
      <div className="absolute w-screen flex justify-between px-5 md:px-32 items-center py-3.5 bg-[#0B090921]">
        <div className="flex gap-16">
        <div className="flex items-center w-screen md:w-40 justify-between">
          <Logo></Logo>
          <div className="flex gap-4 md:hidden">
            <button>
              <FaShoppingCart className="text-white text-2xl"></FaShoppingCart>
            </button>
            <button>
              <FaBars className="text-white text-2xl"></FaBars>
            </button>
          </div>
        </div>
          <div className="hidden md:flex gap-14 text-white items-center">
            <div>Home</div>
            <div>Product</div>
          </div>
        </div>
        <div className="hidden md:flex gap-6 items-center">
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
