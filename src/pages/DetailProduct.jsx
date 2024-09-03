import React from "react";
import Navbar from "../component/Navbar.jsx";
import { FaStar, FaRegThumbsUp, FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import coffe_1 from "../assets/img/coffe_1.svg";
import coffe_2 from "../assets/img/coffe_2.svg";
import coffe_3 from "../assets/img/coffe_3.svg";
import coffe_4 from "../assets/img/coffe_4.svg";
import Pagination from "../components/Pagination.jsx";
import GridProduct from "../components/GridProduct.jsx";
import Footer from "../component/Footer.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, addVariant, addSize, addProductId } from "../redux/reducers/payment.js";
import { useGetProductsQuery } from "../redux/services/products.js";
import AuthPopUp from "../components/AuthPopUp.jsx";
import Loading from "../component/Loading";

function DetailProduct() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const response = {message: "purchases cannot be empty"}
  const token = useSelector((state) => state.auth.token);
  const id = useParams().id;
  console.log(typeof id);
  const [itemLoading, setLoading] = React.useState(true);
  const [showPopUp, setShowPopUp] = React.useState(false);
  const [num, setNum] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(1);
  const [selectedTemperature, setSelectedTemperature] = React.useState(1);
  const { data, err, isLoading } = useGetProductsQuery(id);
  console.log(data);
  function mins() {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  function plus() {
    if (num < 100) {
      setNum(num + 1);
    }
  }

async function pay (e) {
    e.preventDefault()

    if (num == 0) {
      setShowPopUp(true);
      return;
    } else {
      setLoading(false);

      navigate("/payment-detail");
      return;
    }

    dispatch(addQuantity(num))
    dispatch(addVariant(selectedSize))
    dispatch(addSize(selectedTemperature))
    dispatch(addProductId(id))

    const formData = new URLSearchParams();
    formData.append("quantity", num);
    formData.append("variant", selectedTemperature);
    formData.append("productSize", selectedSize);

    const response = await fetch(`http://localhost:8000/transaction/${id}`, {
      method: "POST",
      body: formData,
    })
    const json = await response.json()
    if (json.success) {
      const ids = json.result.id
      console.log(id)
      cart(ids)
      navigate("/payment-detail")
    }
  }
  async function cart(ids) {
    const formData = new URLSearchParams();
    formData.append("transactionDetail", ids);
    formData.append("quantity", num);
    formData.append("variant", selectedTemperature);
    formData.append("productSize", selectedSize);

    const response = await fetch(`http://localhost:8000/carts/${id}`, {
      method: "POST",
      headers:{
        Authorization: "Bearer " + token,
      },
      body: formData,
    })
    const json = await response.json()
    console.log(json)
    
  }
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col md:flex-row md:px-32 px-5 py-32 gap-5 mb-16">
        {itemLoading ? "" : <Loading />}
        {showPopUp ? <AuthPopUp data={response} /> : ""}
        <div className="md:w-1/2 flex flex-col gap-4">
          <img src={coffe_1} className="bg-black w-full object-cover" />
          <div className="grid grid-cols-3 gap-4 w-full">
            <img src={coffe_2} className="flex w-full bg-black" />
            <img src={coffe_3} className="flex w-full bg-black" />
            <img src={coffe_4} className="flex w-full bg-black" />
          </div>
        </div>
        {isLoading || err ? (
          ""
        ) : (
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex font-bold text-lg text-white max-w-36 justify-center bg-[#D00000] rounded-full p-2">
              FLASH SALE!
            </div>
            <div className="text-[#0B0909] font-medium text-5xl">
              {data.result.title}
            </div>
            <div className="flex gap-4 items-center">
              <div className="font-medium text-[#D00000] line-through text-xs">
                IDR 20.000
              </div>
              <div className="text-[#FF8906] font-medium text-2xl">
                IDR {data.result.price.toLocaleString("id")}
              </div>
            </div>
            <div className="flex gap-3 items-center  text-sm">
              <FaStar className="text-[#FF8906]" />
              <FaStar className="text-[#FF8906]" />
              <FaStar className="text-[#FF8906]" />
              <FaStar className="text-[#FF8906]" />
              <FaStar className="text-[#FF8906]" />
              <div className="text-[#4F5665]">5.0</div>
            </div>
            <div className="flex gap-4 items-center text-lg">
              <div className="text-[#4F5665]">200+ Review</div>
              <div className="text-[#4F5665]">|</div>
              <div className="text-[#4F5665]">Recommendation</div>
              <FaRegThumbsUp className="text-[#FF8906]" />
            </div>
            <div className="text-[#4F5665]">{data.result.description}</div>
            <div className="flex gap-4 items-center">
              <button
                type="button"
                onClick={mins}
                className="flex items-center justify-center rounded-md border-[#FF8906] border-2 w-9 h-9"
                disabled={num === 0 ? true : false}
              >
                <FaMinus className="" />
              </button>
              <div className="font-bold text-lg">{num}</div>
              <button
                type="button"
                onClick={plus}
                className="flex items-center justify-center rounded-md bg-[#FF8906] w-9 h-9"
              >
                <FaPlus className="" />
              </button>
            </div>
            <div className="text-[#0B0909] font-bold text-lg">Choose Size</div>
            <div className="flex gap-5">
              <button
                type="button"
                onClick={() => setSelectedSize(1)}
                className={`flex items-center justify-center h-11 w-1/3 border-2 text-base text-[#0B0909] rounded-md ${
                  selectedSize === 1
                    ? "border-[#FF8906]"
                    : "border-[#E8E8E8]"
                }`}
              >
                Reguler
              </button>
              <button
                type="button"
                onClick={() => setSelectedSize(2)}
                className={`flex items-center justify-center h-11 w-1/3 border-2 text-base text-[#0B0909] rounded-md ${
                  selectedSize === 2
                    ? "border-[#FF8906]"
                    : "border-[#E8E8E8]"
                }`}
              >
                Medium
              </button>
              <button
                type="button"
                onClick={() => setSelectedSize(3)}
                className={`flex items-center justify-center h-11 w-1/3 border-2 text-base text-[#0B0909] rounded-md ${
                  selectedSize === 3
                    ? "border-[#FF8906]"
                    : "border-[#E8E8E8]"
                }`}
              >
                Large
              </button>
            </div>
            <div className="text-[#0B0909] font-bold text-lg">Hot/Ice</div>
            <div className="flex gap-5 w-full mb-4">
              <button
                type="button"
                onClick={() => setSelectedTemperature(1)}
                className={`flex items-center justify-center h-11 w-1/2 border-2 text-base text-[#0B0909] rounded-md ${
                  selectedTemperature === 1
                    ? "border-[#FF8906]"
                    : "border-[#E8E8E8]"
                }`}
              >
                Ice
              </button>
              <button
                type="button"
                onClick={() => setSelectedTemperature(2)}
                className={`flex items-center justify-center h-11 w-1/2 border-2 text-base text-[#0B0909] rounded-md ${
                  selectedTemperature === 2
                    ? "border-[#FF8906]"
                    : "border-[#E8E8E8]"
                }`}
              >
                Hot
              </button>
            </div>
            <div className="flex gap-5 w-full mb-4">
              <button
                onClick={pay}
                type="button"
                className="flex items-center justify-center h-11 w-1/2 text-base text-[#0B0909] rounded-md bg-[#FF8906] hover:bg-orange-600"
              >
                Buy
              </button>
              <button
                // onClick={cart}
                type="button"
                className="flex gap-1 items-center justify-center h-11 w-1/2 border-2 text-base border-[#FF8906] rounded-md text-[#FF8906]"
              >
                <div className="">
                  <MdOutlineShoppingCart />
                </div>
                <div className="">add to cart</div>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center px-32 py-16 gap-1 font-medium text-5xl mb-6">
        <div className="text-[#0B0909]">Recommendation</div>
        <div className="text-[#8E6447]">For You</div>
      </div>
      <div className="grid grid-cols-2 justify-center md:grid-cols-4 px-32 mb-20">
        {/* <GridProduct />
        <GridProduct />
        <GridProduct />
        <GridProduct /> */}
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
