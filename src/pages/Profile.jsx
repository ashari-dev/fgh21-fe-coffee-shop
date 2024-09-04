import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FaUser } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import ImgProfileUser from "../assets/img/profileUser.png";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthPopUp from "../components/AuthPopUp";
import Loading from "../component/Loading";
import PopUp from "../components/PopUp";
import axios, { Axios } from "axios";
import { addData } from "../redux/reducers/profile";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.data);

  const [isLoading, setLoading] = React.useState(false);
  let [pass, setPassword] = React.useState("password");
  let [disabledPassword, setDisabledPassword] = React.useState(true);
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  const formik = useFormik({
    onSubmit: Update,
    enableReinitialize: true,
    initialValues: {
      fullName: profile.fullName,
      email: profile.email,
      phoneNumber: profile.phoneNumber,
      password: "",
      address: profile.address,
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email address").required("Required!"),
      phoneNumber: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      password: disabledPassword
        ? Yup.string()
        : Yup.string().min(6, "Minimum 6 characters").required("Required!"),
      address: Yup.string().required("Required!"),
    }),
  });
  const [authResponse, setAuthResponse] = useState({});
  const [showPopUp, setShowPopUp] = useState(false);
  async function Update() {
    const fullName = formik.values.fullName;
    const email = formik.values.email;
    const phoneNumber = formik.values.phoneNumber;
    const password = formik.values.password;
    const address = formik.values.address;

    const formData = new URLSearchParams();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    if (password) {
      formData.append("password", password);
    }
    formData.append("address", address);

    const dataProfile = await fetch("http://localhost:8000/profile", {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
    const response = await dataProfile.json();
    if (response.success) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAuthResponse(response);
        setShowPopUp(true);
      }, 5000);
    }
  }

  const passwordInput = React.useRef(null);

  const [file, setFile] = useState();
  function handlerChange(e) {
    setFile(e.target.files[0]);
  }
  async function uploadImage(e) {
    e.preventDefault();
    const url = "http://localhost:8000/profile/img";
    const formData = new FormData();
    formData.append("profileImg", file);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    };
    const respont = await axios.patch(url, formData, config);

    if (respont.data.success) {
      const response = await fetch("http://localhost:8000/profile/login", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      dispatch(addData(json.result));
    }
    e.target.reset();
  }

  return (
    <div>
      <Navbar />
      <div className="md:p-32 px-5">
        {isLoading ? <Loading /> : ""}

        {showPopUp ? <AuthPopUp data={authResponse} /> : ""}

        {showPopUp ? (
          <PopUp
            nextAction={() => {
              setShowPopUp(!showPopUp);
            }}
            message={authResponse.message}
          />
        ) : (
          ""
        )}

        <div className="flex flex-col justify-center gap-[44px]">
          <h1 className="font-bold text-[48px]">Profile</h1>
          <div className="md:flex md:flex-row flex flex-col justify-center gap-[30px] md:gap-[10px]">
            <div className="md:w-[500px] w-full h-[443px] gap-[15px] border rounded-lg border-[#E8E8E8]">
              <form
                onSubmit={uploadImage}
                className="flex flex-col p-[20px]  gap-[30px] justify-center items-center "
              >
                <h2 className="font-bold">{profile.fullName}</h2>
                <p className="text-[#4F5665] text-[16px]">{profile.email}</p>
                <label
                  htmlFor="img"
                  className=" w-[113px] h-[113px] border border-black  rounded-full overflow-hidden"
                >
                  <img
                    src={
                      profile.image === null
                        ? "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                        : profile.image
                    }
                  ></img>
                </label>

                <div className="flex text-center w-full">
                  <input
                    type="file"
                    name="img"
                    id="img"
                    className="hidden"
                    onChange={handlerChange}
                  />
                </div>
                <button className="bg-[#FF8906] rounded-lg p-[12px]">
                  Upload New Photo
                </button>
                <p className="text-[#4F5665] font-semibold">
                  Since 20 January 2022
                </p>
              </form>
            </div>
            <div className="w-full gap-[15px] border rounded-lg border-[#E8E8E8]">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-[25px] md:px-[50px] px-5 py-[25px]"
              >
                <div className="flex flex-col gap-[14px]">
                  <label className="text-[16px] font-bold">Full Name</label>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaUser />
                    <input
                      type="name"
                      name="fullName"
                      placeholder="Enter Full Name"
                      className="outline-none w-full"
                      onChange={formik.handleChange}
                      defaultValue={profile.fullName}
                    />
                  </div>
                </div>
                {formik.errors.fullName && formik.touched.fullName && (
                  <p className="text-red-500">{formik.errors.fullName}</p>
                )}
                <div className="flex flex-col gap-[14px]">
                  <label className="text-[16px] font-bold">Email</label>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaEnvelope />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className="outline-none w-full"
                      onChange={formik.handleChange}
                      defaultValue={profile.email}
                    />
                  </div>
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500">{formik.errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col gap-[14px]">
                  <label className="text-[16px] font-bold">Phone</label>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaPhone />
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter Phone Number"
                      className="outline-none w-full"
                      onChange={formik.handleChange}
                      defaultValue={profile.phoneNumber}
                    />
                  </div>
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                    <p className="text-red-500">{formik.errors.phoneNumber}</p>
                  )}
                </div>
                <div className="flex flex-col gap-[14px]">
                  <div className="flex justify-between">
                    <label className="text-[16px] font-bold">Password</label>
                    <button
                      type="button"
                      onClick={() => {
                        setDisabledPassword(!disabledPassword);
                        setTimeout(() => {
                          passwordInput.current.focus();
                        }, 200);
                      }}
                      className="flex justify-end text-[#FF8906] hover:underline"
                    >
                      Set New Password
                    </button>
                  </div>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center rounded-lg relative overflow-hidden">
                    <div className="left-[14px] absolute">
                      <FaKey />
                    </div>
                    <input
                      ref={passwordInput}
                      type={pass}
                      name="password"
                      disabled={disabledPassword}
                      placeholder="Enter Password"
                      onChange={formik.handleChange}
                      className="outline-none w-full flex-1 py-4 px-10"
                    />
                    <div className="right-[14px] absolute">
                      <button type="button" onClick={changePassword}>
                        <FaEye />
                      </button>
                    </div>
                  </div>
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-red-500">{formik.errors.password}</p>
                  )}
                </div>
                <div className="flex flex-col gap-[14px]">
                  <label className="text-[16px] font-bold">Address</label>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaLocationDot />
                    <textarea
                      name="address"
                      placeholder="Enter full address"
                      className="outline-none w-full h-6"
                      onChange={formik.handleChange}
                      defaultValue={profile.address}
                    />
                  </div>
                  {formik.errors.address && formik.touched.address && (
                    <p className="text-red-500">{formik.errors.address}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-[#FF8906] rounded-lg p-[18px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
