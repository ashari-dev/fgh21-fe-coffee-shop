import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";

function InsertUser(props) {
  const [role, setRole] = useState(0);
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const formik = useFormik({
    onSubmit: inputForm,
    initialValues: {
      file: "",
      fullName: "",
      email: "",
      phone: "",
      password: "",
      address: "",
      role: "",
    },
    validationSchema: yup.object().shape({
      file: yup.string().required("Please Upload Image First"),
      fullName: yup.string().required("Please Enter your name").min(3).max(50),
      email: yup.string().required("Please Enter your email").email(),
      password: yup.string().required("Please Enter your password").min(8),
      phone: yup.string().required("Please Enter your phone number"),
      address: yup.string().required("Please Enter your address"),
    }),
  });
  async function inputForm() {
    const file = formik.values.file;
    const fullName = formik.values.fullName;
    const email = formik.values.email;
    const phone = formik.values.phone;
    const password = formik.values.password;
    const address = formik.values.address;

    const data = new FormData();
    data.append("profileImage", file);
    data.append("fullName", fullName);
    data.append("email", email);
    data.append("phoneNumber", phone);
    data.append("password", password);
    data.append("address", address);
    data.append("roleId", role);

    try {
      const response = await fetch(
        "http://103.93.58.89:23230/users/insertuser",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        setMessage("Failed to insert user");
        return;
      }

      const userData = await response.json();
      console.log("User Data:", userData);
      setMessage("User successfully inserted!");
    } catch (error) {
      console.error("Error inserting user:", error);
      setMessage("An error occurred. Please try again.");
    }
    props.closeMenu(false);
  }

  const handleForm = (event) => {
    const { target } = event;

    if (target.name === "file") {
      const file = target.files[0];
      formik.setFieldValue(target.name, target.files[0]);
      setImagePreview(URL.createObjectURL(file));
    } else {
      formik.setFieldValue(target.name, target.value);
    }
  };
  return (
    <div>
      <div className="absolute bg-[#00000099] w-full flex h-screen justify-end">
        <div className=" bg-white p-5 flex flex-col w-1/3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl">Insert User</h1>
            <button
              onClick={() => {
                props.closeMenu(false);
              }}
              className="text-red-600"
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>
          {message && <div className="mt-2 text-red-600">{message}</div>}
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm">Image User</span>
              <div className="p-[15px] bg-[#E8E8E8] w-[50px] h-[50px] rounded-lg">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <CiImageOn />
                )}
              </div>
              <button>
                <input type="file" name="file" onChange={handleForm} />
              </button>
              {formik.errors.file && formik.touched.file && (
                <p className="text-red-500">{formik.errors.file}</p>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="fullName" className="font-bold">
                FullName
              </label>
              <div className="w-full flex items-center relative">
                <FaRegUser className="absolute left-4" />
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter Full Name"
                  onChange={handleForm}
                  name="fullName"
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
              {formik.errors.fullName && formik.touched.fullName && (
                <p className="text-red-500">{formik.errors.fullName}</p>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <div className="w-full flex items-center relative">
                <MdOutlineEmail className="absolute left-4" />
                <input
                  type="text"
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={handleForm}
                  name="email"
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="phone" className="font-bold">
                Phone
              </label>
              <div className="w-full flex items-center relative">
                <FiPhoneOutgoing className="absolute left-4" />
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter Your Number"
                  onChange={handleForm}
                  name="phone"
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
              {formik.errors.phone && formik.touched.phone && (
                <p className="text-red-500">{formik.errors.phone}</p>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <div className="flex justify-between">
                <label htmlFor="password" className="font-bold">
                  Password
                </label>
                <label
                  htmlFor="password"
                  className="text-[#FF8906] font-semibold"
                >
                  Set New Password
                </label>
              </div>
              <div className="w-full flex items-center relative">
                <RiLockPasswordLine className="absolute left-4" />
                <input
                  type="text"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={handleForm}
                  name="password"
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-500">{formik.errors.password}</p>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="address" className="font-bold">
                Address
              </label>
              <div className="w-full flex items-center relative">
                <MdLocationPin className="absolute left-4" />
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Your Address"
                  onChange={handleForm}
                  name="address"
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
              {formik.errors.address && formik.touched.address && (
                <p className="text-red-500">{formik.errors.address}</p>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="" className="font-bold">
                Type of User
              </label>
              <div className="flex justify-between">
                <input
                  type="button"
                  onChange={handleForm}
                  value="Normal User"
                  name="role"
                  onClick={() => setRole(1)}
                  className="border hover:border-[#FF8906] active:bg-orange-400 flex justify-center rounded-md px-[60px] focus:outline-none focus:ring focus:ring-orange-400"
                />
                <input
                  type="button"
                  onChange={handleForm}
                  value="Admin"
                  name="role"
                  onClick={() => setRole(2)}
                  className="border hover:border-[#FF8906] active:bg-orange-400 flex justify-center rounded-md px-[60px] focus:outline-none focus:ring focus:ring-orange-400"
                />
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-[#FF8906] w-full rounded-md py-[10px]"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InsertUser;
