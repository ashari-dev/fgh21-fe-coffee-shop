import React, { useState } from "react";
import Navbar from "../component/Navbar";
import ProductCover from "../components/ProductCover";
import PromoList from "../components/PromoList";
import SideBarProduct from "../components/SideBarProduct";
import GridProduct from "../components/GridProduct";
import Pagination from "../components/Pagination";
import Footer from "../component/Footer";
import { useListProductsQuery } from "../redux/services/products";
import { useEffect } from "react";

function Product() {
  // const [dataProduct, setDataProduct] = useState([]);
  const [product, setProduct] = useState([]);
  // const { data, err, isLoading } = useListProductsQuery([1,9]);
  // React.useEffect(()=>{
  //   setProduct(isLoading || err ? [] : data);
  // },[])
  // console.log(product)
  async function products() {
    const page = 1
    const limit = 100
    const dataProducts = await fetch(
      `http://localhost:8000/products/our-product/?page=${page}&limit=${limit}`
    );
    const listProduct = await dataProducts.json();
    setProduct(listProduct.result);
  }
  async function fetchProducts(lowPrice = 0, highPrice = 50000) {
    const dataProducts = await fetch(
      `http://localhost:8000/products/filter/price?lowPrice=${lowPrice}&highPrice=${highPrice}`
    );
    const listProduct = await dataProducts.json();
    setProduct(listProduct.result);
  }
  useEffect(() => {
    products()
  }, []);
  console.log(product)

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
                {/* {isLoading || err
                  ? ""
                  : data.result.map((item) => {
                      return <GridProduct key={item.id} data={item}/>;
                    })} */}
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
