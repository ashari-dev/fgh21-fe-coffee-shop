import React, { useState } from "react";
import Navbar from "../component/Navbar";
import ProductCover from "../components/ProductCover";
import PromoList from "../components/PromoList";
import SideBarProduct from "../components/SideBarProduct";
import GridProduct from "../components/GridProduct";
import Pagination from "../components/Pagination";
import Footer from "../component/Footer";
import { useEffect } from "react";
import { useListProductsQuery } from "../redux/services/products";

function Product() {
  const [product, setProduct] = useState([]);
  const { data, err, isLoading } = useListProductsQuery([1, 10]);
  async function fetchProducts(
    lowPrice = 0,
    highPrice = 50000,
    name = "",
    title = ""
  ) {
    const dataProducts = await fetch(
      `http://103.93.58.89:23230/products/filter/price?title=${title}&lowPrice=${lowPrice}&highPrice=${highPrice}&name=${name}`
    );
    const listProduct = await dataProducts.json();
    setProduct(listProduct.result);
  }
  useEffect(() => {
    setProduct(data?.result || []);
  }, [isLoading]);

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
            <SideBarProduct fetchProducts={fetchProducts} />
            <div className="flex flex-col gap-10">
              <div className="grid md:grid-cols-3 grid-cols-2">
                {product.length > 0 ? (
                  product.map((item) => (
                    <GridProduct key={item.id} data={item} />
                  ))
                ) : (
                  <p>No products found</p>
                )}
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
