import React from "react";
import AdminDashboardHeader from "./AdminDashboardHeader";
import AdminDashboardChart from "./AdminDashboardChart";
import AdminDashboardSellerMessage from "./AdminDashboardSellerMessage";

const AdminDashboard = () => {
  return (
    <div className="px-2 md:px-7 py-5">
      <AdminDashboardHeader />

      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <AdminDashboardChart />
        </div>

        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <AdminDashboardSellerMessage/>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
