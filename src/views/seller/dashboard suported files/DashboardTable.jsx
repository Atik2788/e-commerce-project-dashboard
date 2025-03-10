import React from "react";
import { Link } from "react-router-dom";

const DashboardTable = () => {
  return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-[#d0d2d6] text-center">
          <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
            <tr>
              <th className="py-3 px-4">Order Id</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Payment Status</th>
              <th className="py-3 px-4">Order Status</th>
              <th className="py-3 px-4">Active </th>
            </tr>
          </thead>

          <tbody>
          {
                [1, 2, 3, 4, 5].map((d, i) =>
                <tr>
                    <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap ">#34665</td>
                    <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap ">$499</td>
                    <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap ">Pending</td>
                    <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap ">Pending</td>
                    <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap "><Link>View</Link></td>
                </tr> 
                )}
            
          </tbody>
        </table>
      </div>
  );
};

export default DashboardTable;
