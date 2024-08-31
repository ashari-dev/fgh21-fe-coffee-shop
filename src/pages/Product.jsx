import React, { useState } from "react";
import Navbar from "../component/Navbar";
import ProductCover from "../components/ProductCover";
import PromoList from "../components/PromoList";
import SideBarProduct from "../components/SideBarProduct";
import GridProduct from "../components/GridProduct";
import Pagination from "../components/Pagination";
import Footer from "../component/Footer";
import { useListUsersQuery } from "../redux/services/products";

function Product() {
  const [dataProduct, setDataProduct] = useState([]);
  const { data, err, isLoading } = useListUsersQuery();
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <ProductCover />
        <PromoList />
        <div className="flex flex-col gap-10 md:px-32 mt-20">
          <h2 className="text-5xl mx-5">
            Our <span className="text-[#8e6447]">Product</span>
          </h2>
          <div className="flex gap-10">
            <SideBarProduct />
            <div className="flex flex-col gap-10">
              <div className="grid md:grid-cols-3 grid-cols-2">
                {isLoading || err
                  ? ""
                  : data.result.map((item) => {
                      return <GridProduct key={item.id} data={item}/>;
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
