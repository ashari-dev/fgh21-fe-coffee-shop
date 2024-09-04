import React, { useState } from "react";
import Navbar from "../component/Navbar";
import ProductCover from "../components/ProductCover";
import PromoList from "../components/PromoList";
import SideBarProduct from "../components/SideBarProduct";
import GridProduct from "../components/GridProduct";
import Pagination from "../components/Pagination";
import Footer from "../component/Footer";
import { useListProductsQuery } from "../redux/services/products";

function Product() {
  const { data, err, isLoading } = useListProductsQuery([1, 9]);
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <ProductCover />
        <PromoList />
        <div className="flex flex-col gap-10 md:pl-24 mt-20">
          <h2 className="text-5xl mx-5">
            Our <span className="text-[#8e6447]">Product</span>
          </h2>
          <div className="flex gap-5">
            <SideBarProduct />
            <div className="flex flex-col">
              <div className="flex justify-center md:justify-start flex-wrap ">
                {/* <div className="grid grid-cols-3 "> */}
                {isLoading || err
                  ? ""
                  : data.result.map((item) => {
                      return (
                        <GridProduct
                          className="w-1/4"
                          key={item.id}
                          data={item}
                        />
                      );
                    })}
              </div>
              <div className="flex justify-center py-24">
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
