import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { FaUser } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import ImgProfileUser from "../assets/img/profileUser.png";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPopUp from "../components/AuthPopUp";

function Profile() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const profile = useSelector((state) => state.profile.data);
  console.log(profile);
  let [pass, setPassword] = React.useState("password");
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  const formik = useFormik({
    onSubmit: Update,
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email address").required("Required!"),
      phoneNumber: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Required!"),
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

    console.log(fullName);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);
    console.log(address);

    const formData = new URLSearchParams();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);
    formData.append("address", address);

    const dataProfile = await fetch("http://localhost:8000/profile/", {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
    console.log(dataProfile);
    const response = await dataProfile.json();
    if (response.success) {
      setAuthResponse(response);
      setShowPopUp(true);
    } else {
      setAuthResponse(response);
      setShowPopUp(true);
    }
  }
  return (
    <div>
      <Navbar />
      <div className="md:p-32 px-5">
        {showPopUp ? <AuthPopUp data={authResponse} /> : ""}
        <div className="flex flex-col justify-center gap-[44px]">
          <h1 className="font-bold text-[48px]">Profile</h1>
          <div className="md:flex md:flex-row flex flex-col justify-center gap-[30px] md:gap-[10px]">
            <div className="md:w-[500px] w-full h-[443px] gap-[15px] border rounded-lg border-[#E8E8E8]">
              <div className="flex flex-col p-[20px]  gap-[30px] justify-center items-center ">
                <h2 className="font-bold">Galuh Wizard</h2>
                <p className="text-[#4F5665] text-[16px]">
                  ghaluhwizz@gmail.com
                </p>
                <img
                  src={ImgProfileUser}
                  className=" w-[113px] border-2 border-black  rounded-full"
                ></img>
                <button className="bg-[#FF8906] rounded-lg p-[12px]">
                  Upload New Photo
                </button>
                <p className="text-[#4F5665] font-semibold">
                  Since 20 January 2022
                </p>
              </div>
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
                      placeholder="Ghaluh Wizard"
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
                      placeholder="ghaluhwizz@gmail.com"
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
                      placeholder="082116304338"
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
                    <div className="flex justify-end text-[#FF8906]">
                      Set New Password
                    </div>
                  </div>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaKey />
                    <input
                      type={pass}
                      name="password"
                      placeholder="*************"
                      onChange={formik.handleChange}
                      className="outline-none w-full"
                    />
                    <button type="button" onClick={changePassword}>
                      <FaEye />
                    </button>
                  </div>
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-red-500">{formik.errors.password}</p>
                  )}
                </div>
                <div className="flex flex-col gap-[14px]">
                  <label className="text-[16px] font-bold">Addres</label>
                  <div className="border border-[#DEDEDE] flex gap-[10px] items-center  p-[14px] rounded-lg">
                    <FaLocationDot />
                    <input
                      type="text"
                      name="address"
                      placeholder="Griya Bandung Indah"
                      className="outline-none w-full"
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
