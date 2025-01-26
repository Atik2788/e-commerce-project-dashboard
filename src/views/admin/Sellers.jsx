import React, { useState } from "react";
import SetParPage from "./commonPages/SetParPage";
import Table from "./commonPages/Table";
import Pagination from "./commonPages/Pagination";
import { FaRegEye } from "react-icons/fa";

const Sellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);

  const headers = ["No", "Image", "Name", "Shop Name", "Email", "Payment Status", "Division", "District", "Action"];
  const rows = [
    {
      no: 1,
      image: "http://localhost:3000/images/category/1.jpg", // Placeholder image
      name: "Shoo",
      shopName: "Easy",
      email: "demo@gmail.com",
      paymentStatus: "Pending",
      division: "Dhaka",
      district: "Uttara",
      icon1: <FaRegEye />
    },
    {
      no: 2,
      image: "http://localhost:3000/images/category/2.jpg", // Placeholder image
      name: "Watch",
      shopName: "Easy",
      email: "demo@gmail.com",
      paymentStatus: "Pending",
      division: "Dhaka",
      district: "Uttara",
      icon1: <FaRegEye />
    },
    {
      no: 3,
      image: "http://localhost:3000/images/category/3.jpg", // Placeholder image
      name: "Cloth",
      shopName: "Easy",
      email: "demo@gmail.com",
      paymentStatus: "Pending",
      division: "Dhaka",
      district: "Uttara",
      icon1: <FaRegEye />
    },
    {
      no: 4,
      image: "http://localhost:3000/images/category/4.jpg", // Placeholder image
      name: "Bag",
      shopName: "Easy",
      email: "demo@gmail.com",
      paymentStatus: "Pending",
      division: "Dhaka",
      district: "Uttara",
      icon1: <FaRegEye />
    },
  ];

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Seller</h1>

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

export default Sellers;
