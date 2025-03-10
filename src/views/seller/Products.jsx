import React, { useEffect, useState } from "react";
import SetParPage from "../commonPages/SetParPage";
import Table from "../commonPages/Table";
import { headersSellerProducts, rowsSellerProducts } from "../../api/headersAndRows";
import Pagination from "../commonPages/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../../store/Reducers/productReducer";
import TableNew from "../commonPages/TableNew";
import { FaEdit, FaRegTrashAlt, FaRegEye } from "react-icons/fa";

const Products = () => {

    const dispatch = useDispatch();
    const { products, totalProduct } = useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);
  const [allProducts, setAllProducts] = useState([])


    useEffect(() => {
      const obj = {
        parPage: parseInt(parPage),
        page: parseInt(currentPage),
        searchValue,
      };
      dispatch(get_products(obj));
    }, [searchValue, currentPage, parPage]);


    useEffect(() =>{
      // console.log('redus products', products);
      if(products){
        setAllProducts(products)
      }
    },[products])
    

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-black mb-3 font-semibold text-lg">All Products</h1>

      <div className="w-full p-4 bg-[#39a290] rounded-md ">
        <SetParPage setParPage={setParPage} searchValue={searchValue} setSearchValue={setSearchValue}/>

        {/* <Table headers={headersSellerProducts} rows={products} iconbgColor="bg-yellow-500 hover:bg-yellow-300" 
        icon2bgColor="bg-green-700 hover:bg-green-600"
        icon3bgColor="bg-red-500 hover:bg-red-300"            
        editPage={(productId) => `/seller/dashboard/edit-product/${productId}`}       
        /> */}

        <TableNew
          headers={headersSellerProducts} 
          rows={allProducts.map(product => ({
            ...product,
            editIcon: <FaEdit className="text-black" />,
            viewIcon: <FaRegEye />,
            deleteIcon: <FaRegTrashAlt className="text-black" />
          }))} 
          iconbgColor="bg-yellow-500 hover:bg-yellow-300" 
          icon2bgColor="bg-green-700 hover:bg-green-600" 
          icon3bgColor="bg-red-500 hover:bg-red-300"
          editPage={(productId) => `/seller/dashboard/edit-product/${productId}`} 
        />

        {
        totalProduct <= parPage ? "" :
            <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalItem={50}
              parPage={parPage}
              showItem={3}
            />
            </div>        
        }


        
      </div>
    </div>
  );
};

export default Products;
