import React from "react";
import { Link } from "react-router-dom";

const AdminDashboardTable = () => {
  return (
    <div className="w-full p-4 bg-[#39a290] rounded-md mt-6">
      <div className="flex justify-between items-center pb-3">
        <h2 className="font-semibold text-lg text-[#d0d2d6] ">Recent Orders</h2>
        <Link className="font-semibold text-sm text-[#d0d2d6]">View All</Link>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-[#d0d2d6] uppercase border-b border-slate-700"> 
          <tr>
            <th className="py-3 px-4">Order Id</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboardTable;
