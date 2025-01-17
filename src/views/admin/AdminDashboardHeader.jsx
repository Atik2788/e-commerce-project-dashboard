import {
  MdCurrencyExchange,
  MdOutlineProductionQuantityLimits,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const AdminDashboardHeader = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {/* Total sels */}
      <div className="flex justify-between items-center p-5 bg-[#dbf6c4] rounded-md gap-3">
        <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
          <h2 className="text-3xl font-bold ">$3569</h2>
          <span className="text-md font-medium">Total Sales</span>
        </div>

        <div className="w-[40px] h-[47px] rounded-full bg-red-600 flex justify-center items-center text-xl">
          <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
        </div>
      </div>
      {/* Total Products */}
      <div className="flex justify-between items-center p-5 bg-[#ccdcfe] rounded-md gap-3">
        <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
          <h2 className="text-3xl font-bold ">50</h2>
          <span className="text-md font-medium">Products</span>
        </div>
        <div className="w-[40px] h-[47px] rounded-full bg-purple-600 flex justify-center items-center text-xl">
          <MdOutlineProductionQuantityLimits className="text-[#fae8e8] shadow-lg" />
        </div>
      </div>

      {/* Total Sellers */}
      <div className="flex justify-between items-center p-5 bg-[#caf6c4] rounded-md gap-3">
        <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
          <h2 className="text-3xl font-bold ">10</h2>
          <span className="text-md font-medium">Sellers</span>
        </div>

        <div className="w-[40px] h-[47px] rounded-full bg-green-600 flex justify-center items-center text-xl">
          <FaUsers className="text-[#fae8e8] shadow-lg" />
        </div>
      </div>
      
      {/* Total Orders */}
      <div className="flex justify-between items-center p-5 bg-[#fbd4ec] rounded-md gap-3">
        <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
          <h2 className="text-3xl font-bold ">75</h2>
          <span className="text-md font-medium">Orders</span>
        </div>

        <div className="w-[40px] h-[47px] rounded-full bg-blue-700 flex justify-center items-center text-xl">
          <MdOutlineShoppingCart className="text-[#fae8e8] shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
