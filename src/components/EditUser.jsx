import React, { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"

function EditUser(props) {
  const [dataUser, setDataUser] = useState([])

  const formik = useFormik({
    initialValues: {
        fullName: "",
        email: "",
        phone: "",
        password: "",
        address: ""
    },
    onSubmit: updateProfile,
    validationSchema: yup.object().shape({
        fullName: yup.string().required('Please Enter your name').min(3).max(50),
        email: yup.string().required('Please Enter your email').email()
        // password: yup.string().required('Please Enter your password').min(8)
    })
  })
  
  // const file = formik.values.file
  // data.append('roleId', role)
  async function updateProfile(){
      const fullName = formik.values.fullName
      const email = formik.values.email
      const phone = formik.values.phone
      const password = formik.values.password
      const address = formik.values.address
        
        const data = new URLSearchParams()
        // data.append('image', file)
        data.append('fullName', fullName)
        data.append('email', email)
        data.append('phoneNumber', phone)
        data.append('password', password)
        data.append('address', address)
      const response = await fetch(`http://localhost:8000/profile/`+ props.id,{
        method: 'PATCH',
        body: data,
      })
      // const userData = await response.json()
      // const listData = userData.result
      // console.log(listData)
      props.closeMenu(false)
    }
    async function getData() {
        const endPoint = 'http://localhost:8000/profile/' + props.id
        const response = await fetch(endPoint);
        const data = await response.json()
        const listData = data.result
        console.log(listData)
        setDataUser(listData)
    }
    
    useEffect(() => {
        getData()
    }, [])


  const handleForm = (event) => {
      const {target} = event
      formik.setFieldValue(target.name, target.value)
  }
  return (
    <div>
      <div className="absolute bg-[#00000099] w-full flex h-screen justify-end">
        <div className=" bg-white p-5 flex flex-col w-1/3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl">Edit User</h1>
            <button onClick={()=>{props.closeMenu(false)}} className="text-red-600">
              <IoMdCloseCircleOutline />
            </button>
          </div>
          <form action="" onSubmit={formik.handleSubmit} className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2">
              <span className="text-sm">Image User</span>
              <div className="p-[15px] bg-[#E8E8E8] w-[50px] h-[50px] rounded-lg">
                <CiImageOn />
              </div>
              <button
                type="button"
                className="bg-[#FF8906] w-[80px] rounded-md px-[16px]"
              >
                <span className="text-xs">Upload</span>
              </button>
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
                  defaultValue={dataUser.fullName}
                  placeholder="Enter Full Name"
                  name="fullName"
                  onChange={handleForm}
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
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
                  name="email"
                  defaultValue={dataUser.email}
                  onChange={handleForm}
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
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
                  name="phone"
                  defaultValue={dataUser.phoneNumber}
                  onChange={handleForm}
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
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
                  name="password"
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
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
                  name="address"
                  defaultValue={dataUser.address}
                  onChange={handleForm}
                  className="h-[40px] pl-10 w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
            </div>
            <div className="flex">
              <button type="submit" className="bg-[#FF8906] w-full rounded-md py-[10px]">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
