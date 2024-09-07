import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function InsertProduct(props) {
  const dataToken = useSelector((state) => state.auth.token);
  const [message, setMessage] = React.useState(true);
  const navigate = useNavigate();
  const [image, setImage] = useState(0);
  const [file, setFile] = useState();

  function handlerChange(e) {
    console.log(e);
    setImage(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  }

  async function submitProductImage(productId) {
    const url = "http://localhost:8000/products/upload/img/" + productId;
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    formData.append("upload", file);
    const uploadImage = await axios.post(url, formData, config);
    if (uploadImage.data.success) {
      props.closeMenu(false);
    }
  }

  async function updateProduct(e) {
    e.preventDefault();
    const title = e.target.productName.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const stock = e.target.stock.value;
    const form = new URLSearchParams();
    form.append("title", title);
    form.append("description", description);
    form.append("price", price);
    form.append("stock", stock);
    const dataProduct = await fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + dataToken,
      },
      body: form,
    });
    const listData = await dataProduct.json();
    setMessage(listData.message);

    if (listData.success) {
      submitProductImage(listData.result.id);
    }
  }
  return (
    <div>
      <div className="absolute bg-[#00000099] w-full flex h-screen justify-end">
        <div className=" bg-white p-5 flex flex-col w-1/3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl">Add Product</h1>
            <button
              onClick={() => {
                props.closeMenu(false);
              }}
              className="text-red-600"
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>
          <div className="text-red-600 mb-5">{message}</div>
          <form onSubmit={updateProduct} className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm">Photos Product</span>
              <label
                htmlFor="image"
                className="bg-[#E8E8E8] flex items-center justify-center w-[50px] h-[50px] rounded-lg overflow-hidden"
              >
                {image === 0 ? <CiImageOn /> : <img src={image} alt="" />}
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handlerChange}
                hidden
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="productName" className="font-bold">
                Product Name
              </label>
              <div className="w-full flex items-center relative">
                <input
                  type="text"
                  id="productName"
                  placeholder="Enter Product Name"
                  name="productName"
                  className="h-[40px] px-5 outline-none w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="price" className="font-bold">
                Price
              </label>
              <div className="w-full flex items-center relative">
                <input
                  type="text"
                  id="price"
                  placeholder="Enter Product Price"
                  name="price"
                  className="h-[40px] px-5 outline-none w-full bg-[#DEDEDE] rounded-lg"
                />
              </div>
            </div>

            <div className="flex gap-2 flex-col">
              <label htmlFor="description" className="font-bold">
                Description
              </label>
              <div className="w-full flex items-center relative">
                <textarea
                  className=" px-5 py-3 outline-none w-full bg-[#DEDEDE] rounded-lg"
                  name="description"
                  id="description"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="" className="font-bold">
                Product Size
              </label>
              <div className="flex justify-between">
                <input
                  type="button"
                  value="R"
                  className="border hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
                <input
                  type="button"
                  value="L"
                  className="border hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
                <input
                  type="button"
                  value="XL"
                  className="border hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
                <input
                  type="button"
                  value="250 gr"
                  className="border hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
                <input
                  type="button"
                  value="500 gr"
                  className="border  hover:bg-[#FF8906] flex justify-center rounded-md px-3 py-2"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="" className="font-bold">
                Stock
              </label>
              <div className="flex justify-between">
                <select
                  className="h-[40px] px-5 outline-none w-full bg-[#DEDEDE] rounded-lg"
                  name="stock"
                  id="stock"
                >
                  <option value="">Enter Product Stock</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="150">150</option>
                  <option value="200">200</option>
                  <option value="250">250</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <button className="bg-[#FF8906] w-full rounded-md py-[10px]">
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InsertProduct;
