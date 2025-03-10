import React, { useEffect, useState } from "react";
import { headers2, rows2 } from "../../api/headersAndRows";
import Table from "../commonPages/Table";
import SetParPage from "../commonPages/SetParPage";
import Pagination from "../commonPages/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { get_seller_request} from "../../store/Reducers/sellerReducer";
import { FaRegEye } from "react-icons/fa";

const SellerRequest = () => {

  const dispatch = useDispatch();
  const { sellers, totalSeller } = useSelector((state) => state.seller);
  // console.log(sellers, totalSeller);

  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() =>{
    dispatch(get_seller_request({
      parPage,
      searchValue,
      page: currentPage,

    }))
  }, [dispatch, parPage, searchValue, currentPage])

    


  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Seller Request</h1>

      <div className="flex fex-col justify-between items-center mb-5 p-4 bg-[#39a290] rounded-md">
        <div className="w-full p-4 bg-[#39a290] rounded-md">
          <SetParPage setParPage={setParPage} searchValue={searchValue} setSearchValue={setSearchValue}/>
          <Table
            headers={headers2}
            rows={sellers }
            icon2bgColor="bg-green-600 hover:bg-green-500 text-black"
            routerPage={(no) => `/admin/dashboard/seller/details/${no}`}
            icon2 = {<FaRegEye />}
          />
          <div className=" w-full flex justify-end items-center mt-5">
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
    </div>
  );
};

export default SellerRequest;
