import React from "react";
import AdminDashboardHeader from "./admin suported files/AdminDashboardHeader";
import AdminDashboardChart from "./admin suported files/AdminDashboardChart";
import AdminDashboardSellerMessage from "./admin suported files/AdminDashboardSellerMessage";
import AdminDashboardTable from "./admin suported files/AdminDashboardTable";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="px-2 md:px-7 py-5">
      {/* header section */}
      <AdminDashboardHeader />

      {/* chart and message section start*/}
      <div className="w-full flex flex-wrap mt-7">
        {/* chart chat section */}
        <div className="w-full lg:w-7/12 lg:pr-3">
          <AdminDashboardChart />
        </div>

        {/* seller chat section */}
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <AdminDashboardSellerMessage />
        </div>
      </div>
      {/* chart and message section end*/}

      {/* dashboard table */}
      <div className="w-full p-4 bg-[#39a290] rounded-md mt-6">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-semibold text-lg text-[#d0d2d6] ">
            Recent Orders
          </h2>
          <Link className="font-semibold text-sm text-[#d0d2d6]">View All</Link>
        </div>
        <AdminDashboardTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
