import React, { useState } from "react";
import SetParPage from "./commonPages/SetParPage";
import Table from "./commonPages/Table";
import Pagination from "./commonPages/Pagination";
import { FaRegEye } from "react-icons/fa";

const SellerRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);

  const headers = ["No", "Name", "Email", "Payment Status", "Status", "Action"];
  const rows = [
    {
      no: 1,
      name: "Shoo",
      email: "demo@gmail.com",
      paymentStatus: "Inactive",
      status: "Pending",
      icon1: <FaRegEye />
    },
    {
      no: 2,
      name: "Watch",
      email: "demo@gmail.com",
      paymentStatus: "Inactive",
      status: "Pending",
      icon1: <FaRegEye />
    },
    {
      no: 3,
      name: "Cloth",
      email: "demo@gmail.com",
      paymentStatus: "Inactive",
      status: "Pending",
      icon1: <FaRegEye />
    },
    {
     no: 4,
     name: "Bag",
     email: "demo@gmail.com",
     paymentStatus: "Inactive",
     status: "Pending",
     icon1: <FaRegEye />
    },
  ];

  return (
    <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[20px] font-bold mb-3">Seller Request</h1>

      <div className="flex fex-col justify-between items-center mb-5 p-4 bg-[#39a290] rounded-md">
        <div className="w-full p-4 bg-[#39a290] rounded-md">
          <SetParPage setParPage={setParPage} />
          <Table headers={headers} rows={rows} iconbgColor = "bg-green-600 hover:bg-green-500 text-black"/>
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
