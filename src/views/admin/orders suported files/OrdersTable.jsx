import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const OrdersTable = () => {
  return (
    <div className="relative mt-5 overflow-x-auto">
      <div className="w-full text-sm text-left bg-[#39a290]">
        <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700 ">
            

          <div className="flex justify-between items-center">
            <div className="py-3 w-[25%] font-bold">Order id</div>
            <div className="py-3 w-[25%] font-bold">Price</div>
            <div className="py-3 w-[25%] font-bold">Payment Status</div>
            <div className="py-3 w-[25%] font-bold">Order Status</div>
            <div className="py-3 w-[25%] font-bold">Action</div>
            <div className="py-3 w-[25%] font-bold"><FaArrowAltCircleDown /></div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
