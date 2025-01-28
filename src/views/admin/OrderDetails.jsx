import React from "react";

const OrderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#39a290] rounded-md ">
        <div className="flex justify-between items-center p-4">
            <h2 className="text-xl text-[#d0d2d6]">Order Details</h2>
            <button className="bg-[#277367] w-[150px] hover:shadow-[#8ae1db] hover:shadow-md text-white rounded-md py-2">
               Send
            </button>
            <select name="" id="" className="px-4 py-2 focus:border-[#8ae1db] outline-none bg-[#277367] border border-[#8ae1db] rounded-md text-[#d0d2d6]">
                <option value="pending">pending</option>
                <option value="processing">processing</option>
                <option value="warehouse">warehouse</option>
                <option value="placed">placed</option>
                <option value="cancelled">cancelled</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
