import React, { useState } from "react";
import ImgRegister from "../assets/img/Register.svg";
import google from "../assets/img/google.svg";
import facebook from "../assets/img/facebook.svg";
import { FaRegEnvelope, FaRegUser, FaKey, FaRegEye } from "react-icons/fa6";
import Logo from "../assets/components/Logo";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import AuthPopUp from "../components/AuthPopUp";
import Loading from "../component/Loading";

function Register() {
  const [isLoading, setLoading] = React.useState(false);
  const [authResponse, setAuthResponse] = useState({});
  const [showPopUp, setShowPopUp] = useState(false);
  async function inputForm() {
    const name = formik.values.name;
    const email = formik.values.email;
    const password = formik.values.password;
    const confirmPassword = formik.values.confirmpassword;

    setLoading(true);
    const data = new URLSearchParams();
    data.append("fullName", name);
    data.append("email", email);
    data.append("password", password);
    data.append("cPassword", confirmPassword);
    const response = await fetch("http://103.93.58.89:23230/auth/register", {
      method: "POST",
      body: data,
    });
    const dataResponse = await response.json();
    setLoading(false);
    setAuthResponse(dataResponse);
    setShowPopUp(true);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: inputForm,
    validationSchema: yup.object().shape({
      name: yup.string().required("Please Enter your name").min(3),
      email: yup.string().required("Please Enter your email").email(),
      password: yup.string().required("Please Enter your password").min(8),
      confirmpassword: yup
        .string()
        .required("Please Enter your password")
        .min(8),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  let [pass, setPassword] = React.useState("password");
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  let [confPass, setConfPassword] = React.useState("password");

  function setChangePassword() {
    if (confPass === "password") {
      setConfPassword("text");
    } else {
      setConfPassword("password");
    }
  }

  return (
    <div className="flex w-full h-full items-center gap-16 md:pr-32 md:p-0 p-5">
      {isLoading === true && <Loading />}
      {showPopUp ? <AuthPopUp data={authResponse} /> : ""}
      <div className="md:flex md:w-1/4 hidden">
        <img src={ImgRegister} alt="" className="object-cover h-screen" />
      </div>
      <form
        className="flex flex-col justify-center gap-6 md:w-3/4 w-full"
        onSubmit={formik.handleSubmit}
      >
        <Logo />
        <div className="font-semibold text-[#8E6447] text-2xl">Register</div>
        <div className="text-[#4F5665] text-base">
          Fill out the form correctly
        </div>
        <label
          htmlFor="name"
          className="flex flex-col gap-1 w-full justify-center"
        >
          <div className="text-[#0B132A] font-semibold text-base">
            Full Name
          </div>
          {formik.errors.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
          <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
            <FaRegUser />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Full Name"
              onChange={handleForm}
              className="w-full outline-none"
            />
          </div>
        </label>
        <label
          htmlFor="email"
          className="flex flex-col gap-1 w-full justify-center"
        >
          <div
            className="text-[#0B13
                    Hazelnut Latte
                    You can explore the menu that we provide with fun and have their own taste and make your day better.
                    
                    IDR 20.0002A] font-semibold text-base"
          >
            Email
          </div>
          {formik.errors.email && (
            <p className="text-red-600">{formik.errors.email}</p>
          )}
          <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
            <FaRegEnvelope />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              onChange={handleForm}
              className="w-full outline-none"
            />
          </div>
        </label>
        <label
          htmlFor="password"
          className="flex flex-col gap-1 w-full justify-center"
        >
          <div className="text-[#0B132A] font-semibold text-base">Password</div>
          {formik.errors.password && (
            <p className="text-red-600">{formik.errors.password}</p>
          )}
          <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
            <FaKey />
            <input
              type={pass}
              name="password"
              id="password"
              placeholder="Enter Your Password"
              onChange={handleForm}
              className="w-full outline-none"
            />
            <button type="button" onClick={changePassword}>
              <FaRegEye />
            </button>
          </div>
        </label>
        <label
          htmlFor="confirmpassword"
          className="flex flex-col gap-1 w-full justify-center"
        >
          <div className="text-[#0B132A] font-semibold text-base">
            Confirm Password
          </div>
          {formik.errors.confirmpassword && (
            <p className="text-red-600">{formik.errors.confirmpassword}</p>
          )}
          <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
            <FaKey />
            <input
              type={confPass}
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Enter Your Password Again"
              onChange={handleForm}
              className="w-full outline-none"
            />
            <button type="button" onClick={setChangePassword}>
              <FaRegEye />
            </button>
          </div>
        </label>
        <button
          type="submit"
          className="bg-[#FF8906] text-[#0B132A] p-3 rounded-lg font-medium text-base"
        >
          Register
        </button>
        <div className="flex justify-center gap-1 text-base">
          <div className="text-[#4F5665]">Have An Account?</div>
          <Link to={"/login"} className="text-[#FF8906]">
            Login
          </Link>
        </div>
        <div className="flex text-[#4F5665] text-xs justify-center">Or</div>
        <div className="flex gap-4 items-center w-full mb-11">
          <div className="flex items-center justify-center h-16 rounded-xl w-1/2 gap-2 shadow-xl">
            <img src={facebook} alt="" className="w-6 h-6" />
            <div className="text-[#4F5665] font-medium text-lg">Facebook</div>
          </div>
          <div className="flex items-center justify-center h-16 rounded-xl w-1/2 gap-2 shadow-xl">
            <img src={google} alt="" className="w-6 h-6" />
            <div className="text-[#4F5665] font-medium text-lg">Google</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
