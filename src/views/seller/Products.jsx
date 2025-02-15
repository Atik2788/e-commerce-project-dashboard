import React, { useState } from "react";
import SetParPage from "../commonPages/SetParPage";
import Table from "../commonPages/Table";
import { headersSellerProducts, rowsSellerProducts } from "../../api/headersAndRows";
import Pagination from "../commonPages/Pagination";

const Products = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);
    

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-black mb-3 font-semibold text-lg">All Products</h1>

      <div className="w-full p-4 bg-[#39a290] rounded-md ">
        <SetParPage setParPage={setParPage} searchValue={searchValue} setSearchValue={setSearchValue}/>

        <Table headers={headersSellerProducts} rows={rowsSellerProducts} iconbgColor="bg-yellow-500 hover:bg-yellow-300" 
        icon2bgColor="bg-green-700 hover:bg-green-600"
        icon3bgColor="bg-red-500 hover:bg-red-300"            
        editPage={(productId) => `/seller/dashboard/edit-product/${productId}`}       
        />

        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
              <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalItem={50}
                parPage={parPage}
                showItem={3}
              />
            </div>
        
      </div>
    </div>
  );
};

export default Products;
