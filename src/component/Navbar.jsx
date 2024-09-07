import React from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaUser,
  FaPowerOff,
  FaFileInvoice,
  FaUserTie,
} from "react-icons/fa";
import Logo from "../assets/components/Logo";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp, IoMdSearch } from "react-icons/io";
import { logout } from "../redux/reducers/auth";
import { removeData } from "../redux/reducers/carts";
import { editProfile } from "../redux/reducers/profile";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();
  const [role, setRole] = React.useState(0)
  const token = useSelector((state) => state.auth.token);
  React.useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
          if(decoded.role === 2){
            setRole(decoded.role)
          } else {
            setRole(decoded.role)
          }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.log('Token is empty or undefined');
    }
  }, []);
  const profile = useSelector((state) => state.profile.data);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const dispatch = useDispatch();
  const processLogout = () => {
    dispatch(logout());
    dispatch(removeData())
    dispatch(editProfile({}));
    navigate("/login");
  };

  return (
    <>
      <div className="fixed z-10 w-full flex justify-between py-2 px-5 md:px-32 items-center bg-[#0B090921]">
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
            {token === null ? (
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
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                type="button"
                className="flex items-center gap-3 relative"
              >
                <div className="flex rounded-full overflow-hidden border border-[#4F5665] ">
                  {profile.image && <img
                    className="h-12 w-12 p-1 rounded-full"
                    src={profile.image}
                    alt="img"
                  />}
                  {!profile.image && <div className="bg-[#FF8906] text-white h-12 w-12 flex justify-center items-center rounded-full">
                    <FaUser size={24} />
                    </div>}
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
                  <div className="absolute top-10 p-5 right-0 w-full min-w-[200px] bg-white shadow rounded">
                    <div className="flex flex-col gap-5">
                      <Link to="/profile" className="flex gap-5 items-center">
                        <FaUser />
                        <span>Profile</span>
                      </Link>
                      <Link to="/history-order" className="flex gap-5 items-center">
                        <FaFileInvoice />
                        <span>Your Order</span>
                      </Link>
                      { role
                         ? 
                        <Link to="/dashboard-admin" className="flex gap-5 items-center">
                          <FaUserTie />
                          <span>Dashboard</span>
                        </Link> : ""
                      }
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
