import React from "react";
import { Link } from "react-router-dom";
import AdminDashboardSellerMessageSingle from "./AdminDashboardSellerMessageSingle";

const AdminDashboardSellerMessage = () => {
  return (
    <div className="w-full bg-[#39a290] p-4 rounded-md text-[#d0d2d6]">
      <div className="flex justify-between items-center pb-3">
        <h2 className="font-semibold text-lg text-[#d0d2d6] ">
          Recent Seller Message
        </h2>
        <Link className="font-semibold text-sm text-[#d0d2d6]">View All</Link>
      </div>

      <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
        <AdminDashboardSellerMessageSingle user={'Admin'} time={'2 days ago'} message={"How are you?"}/>
        <AdminDashboardSellerMessageSingle user={'Seller'} time={'3 hours ago'} message={"Can we talk?"}/>
        <AdminDashboardSellerMessageSingle user={'Admin'} time={'15 hours ago'} message={"How are you?"}/>
      </div> 


    </div>
  );
};

export default AdminDashboardSellerMessage;
