import React, { useEffect, useState } from "react";
import SidebarAdmin from "../components/SiderbarAdmin";
import { FaPlus, FaRegListAlt, FaUserCircle } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import InsertProduct from "../components/InsertProduct";
import EditProduct from "../components/EditProduct";
import Navbar from "../component/Navbar";
import { Form } from "formik";

function ProductList() {
  const [showUpdate, setShowUpdate] = useState(0);
  const [showAdd, SetShowAdd] = useState(false);
  const [product, setProduct] = React.useState([]);
  const [page, setPage] = React.useState(1)
  const [totalProduct, setTotalProduct] = useState([]);
  const [search, setSearch] = React.useState("")




  async function products() {
    const dataProducts = await fetch("http://localhost:8000/products/", {});
    const listProduct = await dataProducts.json();
    setProduct(listProduct.result);
  }
  
  async function filterProducts(e) {
    e.preventDefault()
    const dataProducts = await fetch(`http://localhost:8000/products/filter/?title=${search}&page=${page}`, {});
    const listProduct = await dataProducts.json();
    setProduct(listProduct.result);
  }

  async function allProduct() {
    const dataProducts = await fetch(`http://localhost:8000/products/filter/?title=${search}&limit=1000&page=${page}`, {});
    const listProduct = await dataProducts.json();
    setTotalProduct(listProduct.result.length)
  } 


  const itemPerPage = 3; 
  const startIndex = (page - 1) * itemPerPage + 1; 
  const endIndex = Math.min(page * itemPerPage, totalProduct); 



  useEffect(() => {
    allProduct()
    products()
  }, [search]);

  useEffect(() => {
    filterProducts()
  }, [page, search]);


  function removeData(id) {
    fetch("http://localhost:8000/products/" + id, {
      method: "DELETE",
    })
      .then(() => {
        console.log("removed");
        filterProducts()
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <>
        <Navbar/>
        <div className="py-8 flex items-center justify-between border-b"></div>
        <div className="flex">
        <SidebarAdmin active={2} />
        <div className="relative w-full">
          {showAdd ? <InsertProduct closeMenu={SetShowAdd} /> : ""}
          {showUpdate ? <EditProduct closeMenu={setShowUpdate} id={showUpdate}/> : ""}

          <div className="border-l w-full min-h-screen pt-6 pl-7 pr-20 flex flex-col gap-5">
            <div className="text-2xl">Product List</div>
            <div className="flex justify-between items-center">
              <div>
                <button
                  onClick={() => {
                    SetShowAdd(true);
                  }}
                  className="flex items-center gap-3 bg-[#FF8906] p-2 rounded-md"
                >
                  <FaPlus /> Add Product
                </button>
              </div>
              <div>
                <form onSubmit={filterProducts} className="flex flex-col gap-2">
                  <label htmlFor="search" className="text-xs text-[#4F5665]">
                    Search Product
                  </label>
                  <div className="flex gap-5">
                    <div className="border flex px-2 rounded-md items-center">
                      <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Enter Product Name"
                        className="outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <IoMdSearch className="text-[#4F5665]" />
                    </div>
                    <button className="flex items-center gap-3 bg-[#FF8906] p-2 rounded-md">
                      <CiFilter /> Filter
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-col gap-5 border rounded-md p-5">
              <div className="">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="w-16">#</th>
                      <th className="w-24">Image</th>
                      <th>Product Name</th>
                      <th className="w-32">Price</th>
                      <th className="w-52">Desc</th>
                      <th className="w-36">Produc Size</th>
                      <th className="w-36">Method</th>
                      <th className="w-24">Stock</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>   
                    {product.map((item) => 
               
                      (
                        <tr key={item.id}className="border-t text-[#4F5665]">
                          <td className="text-center ">
                            <input type="checkbox" />
                          </td>
                          <td className="items-center px-6">
                            <div className="flex items-center justify-center rounded bg-blue-400 h-12 w-12">
                              <FaUserCircle />
                            </div>
                          </td>
                          <td className="text-center px-3 py-3">
                            {item.title}
                          </td>
                          <td className="text-center px-3 py-3">{item.price}</td>
                          <td className="text-center px-3 py-3">
                            {item.description}
                          </td>
                          <td className="text-center px-3 py-3">R,L,XL,250gr</td>
                          <td className="text-center px-3 py-3">
                            Deliver, Dine In
                          </td>
                          <td className="text-center px-3 py-3">{item.stock}</td>
                          <td className="justify-center text-center">
                            <div className="flex gap-3 w-full justify-center">
                              <button
                                onClick={() => setShowUpdate(item.id)}
                                className="bg-[#FF89061A] h-6 w-6 rounded-full flex items-center justify-center"
                              >
                                <FiEdit3 className="text-[#FF8906]" />
                              </button>
                              <button
                                onClick={() => removeData(item.id)}
                                className="bg-[#D000001A] h-6 w-6 rounded-full flex items-center justify-center">
                                <AiOutlineDelete className="text-[#d00000]" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between text-[#4F5665]">
                <div>
                  <p>Show {totalProduct > 0 ? startIndex : 0} - {endIndex} of {totalProduct} products</p>
                </div>
                
                <div className="flex gap-3">
                <form action="" onSubmit={filterProducts}>
                    <div className="flex gap-3">
                      {/* <button type="submit" onClick={page > 1 ?()=>setPage(page -1):()=>setPage(1)} className="hover:text-[#FF8906]">
                        <input type="button" value="Prev"/>
                      </button> */}
                      <button
                          onClick={() => setPage(Math.max(1, page - 1))}
                          className="hover:text-[#FF8906]">
                          Prev
                      </button>
                      <div>{page}</div>
                      {/* <button type="submit" onClick={page < Math.ceil(totalProduct / itemPerPage) ? () => setPage(page + 1) : () => setPage(page)} className="hover:text-[#FF8906]">
                        <input type="button" value="Next"/>
                      </button> */}
                      <button
                          onClick={() => setPage(Math.min(page + 1, Math.ceil(totalProduct / itemPerPage)))}
                          className="hover:text-[#FF8906]">
                          Next
                  </button>
                    </div>
                  </form>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
