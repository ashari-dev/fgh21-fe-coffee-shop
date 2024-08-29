import React from "react";
import Navbar from "../component/Navbar";
import ProductCover from "../components/ProductCover";
import PromoList from "../components/PromoList";
import SideBarProduct from "../components/SideBarProduct";
import GridProduct from "../components/GridProduct";
import Pagination from "../components/Pagination";
import Footer from "../component/Footer";

function Product() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <ProductCover />
        <PromoList />
        <div className="flex flex-col gap-10 px-32 mt-20">
          <h2 className="text-5xl">
            Our <span className="text-[#8e6447]">Product</span>
          </h2>
          <div className="flex gap-10">
            <SideBarProduct />
            <div className="flex flex-col gap-48">
              <div className="flex flex-wrap">
                <GridProduct />
                <GridProduct />
                <GridProduct />
                <GridProduct />
                <GridProduct />
                <GridProduct />
              </div>
              <div className="flex justify-center">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Product;
