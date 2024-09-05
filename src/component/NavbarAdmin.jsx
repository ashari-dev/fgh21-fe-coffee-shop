import React from "react";
import Logo from "../assets/components/Logo";
import { IoIosArrowDown, IoIosArrowUp, IoMdSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { FaFileInvoice, FaPowerOff, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout } from "../redux/reducers/auth";
import { editProfile } from "../redux/reducers/profile";

function NavbarAdmin() {
  const profile = useSelector((state) => state.profile.data);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const dispatch = useDispatch()
  const processLogout = () => {
    dispatch(logout());
    dispatch(editProfile({}));
    navigate("/login");
  };
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
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              type="button"
              className="flex items-center gap-3 relative"
            >
              <div className="flex rounded-full overflow-hidden border border-[#4F5665] ">
                {profile.image && (
                  <img
                    className="h-12 w-12 p-1 rounded-full"
                    src={profile.image}
                    alt="img"
                  />
                )}
                {!profile.image && (
                  <div className="bg-[#FF8906] text-white h-12 w-12 flex justify-center items-center rounded-full">
                    <FaUser size={24} />
                  </div>
                )}
              </div>
              <div>
                {!showDropdown && (
                  <IoIosArrowDown className="text-2xl text-[#4F5665]" />
                )}
                {showDropdown && (
                  <IoIosArrowUp className="text-2xl text-[#4F5665]" />
                )}
              </div>
              {showDropdown && (
                <div className="absolute -bottom-[115px] p-5 right-0 w-full min-w-[200px] bg-white shadow rounded">
                  <div className="flex flex-col gap-5">
                    <Link to="/profile" className="flex gap-5 items-center">
                      <FaUser />
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/history-order"
                      className="flex gap-5 items-center"
                    >
                      <FaFileInvoice />
                      <span>Your Order</span>
                    </Link>
                    <button
                      onClick={processLogout}
                      type="button"
                      className="flex gap-5 items-center"
                    >
                      <FaPowerOff />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarAdmin;
