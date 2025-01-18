import React from "react";
import AdminDashboardHeader from "./admin suported files/AdminDashboardHeader";
import AdminDashboardChart from "./admin suported files/AdminDashboardChart";
import AdminDashboardSellerMessage from "./admin suported files/AdminDashboardSellerMessage";
import AdminDashboardTable from "./admin suported files/AdminDashboardTable";

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
          <AdminDashboardSellerMessage/>
        </div>
      </div>
      {/* chart and message section end*/}

      {/* dashboard table */}
      <AdminDashboardTable/>


    </div>
  );
};

export default AdminDashboard;
