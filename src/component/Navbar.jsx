import React from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import Logo from "../assets/components/Logo";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  const navigate = useNavigate();
  const dataToken = useSelector((state) => state.auth.token);
  return (
    <>
      <div className="fixed w-full flex justify-between py-2 px-5 md:px-32 items-center bg-[#0B090921]">
        <ScrollRestoration />
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
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
          </div>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <button>
            <FaSearch className="text-white text-xl"></FaSearch>
          </button>
          <button
            onClick={() => {
              navigate("/payment-detail");
            }}
          >
            <FaShoppingCart className="text-white text-xl"></FaShoppingCart>
          </button>
          <div className="">
            {dataToken === null ? (
              <div className="flex gap-5">
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  type="button"
                  className="border-2 border-white py-3 px-4 rounded text-white"
                >
                  SignIn
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  type="button"
                  className="bg-[#FF8906] py-3 px-4 rounded"
                >
                  SignUp
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to={"/profile"}>
                  <div className="flex rounded-full overflow-hidden border border-[#4F5665] ">
                    <img
                      className="h-12 w-12 p-1 rounded-full"
                      src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png"
                      alt="img"
                    />
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/history-order");
                  }}
                >
                  <IoIosArrowDown className="text-2xl text-[#4F5665]" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
