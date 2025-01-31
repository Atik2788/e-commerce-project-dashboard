import React, { useState } from "react";
import { headers2, rows2 } from "../../api/headersAndRows";
import Table from "../commonPages/Table";
import SetParPage from "../commonPages/SetParPage";
import Pagination from "../commonPages/Pagination";

const DeactiveSellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);



  return (
    <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[20px] font-bold mb-3">Deactive Seller</h1>

      <div className="flex fex-col justify-between items-center mb-5 p-4 bg-[#39a290] rounded-md">
        <div className="w-full p-4 bg-[#39a290] rounded-md">
          <SetParPage setParPage={setParPage} searchValue={searchValue} setSearchValue={setSearchValue}/>
          <Table headers={headers2} rows={rows2} iconbgColor = "bg-green-600 hover:bg-green-500 text-black"/>
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

export default DeactiveSellers;
