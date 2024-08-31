import React from "react";
import Logo from "../assets/components/Logo";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";

function NavbarAdmin() {
  return (
    <>
      <nav className="py-3 px-12 flex items-center justify-between border-b">
        <div>
          <Logo />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <IoMdSearch className="text-3xl text-[#4F5665]" />
          </div>
          <div>
            <BsCart3 className="text-3xl text-[#4F5665]" />
          </div>

          <div className="flex gap-3">
            <div className="flex rounded-full overflow-hidden border border-[#4F5665] ">
              <img
                className="h-12 w-12 p-1 rounded-full"
                src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png"
                alt="img"
              />
            </div>
            <button>
              <IoIosArrowDown className="text-2xl text-[#4F5665]" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAdmin;
