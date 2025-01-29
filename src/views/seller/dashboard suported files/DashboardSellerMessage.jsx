import React from "react";
import { Link } from "react-router-dom";
import DashboardSellerMessageSingle from "./DashboardSellerMessageSingle";

const DashboardSellerMessage = () => {
  return (
    <div className="w-full bg-[#39a290] p-4 rounded-md text-[#d0d2d6]">
      <div className="flex justify-between items-center pb-3">
        <h2 className="font-semibold text-lg text-[#d0d2d6] ">
          Recent Customer Message
        </h2>
        <Link className="font-semibold text-sm text-[#d0d2d6]">View All</Link>
      </div>

      {/* seller message section */}
      <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
        <DashboardSellerMessageSingle user={'Customer'} time={'2 days ago'} message={"How are you?"}/>
        <DashboardSellerMessageSingle user={'Seller'} time={'3 hours ago'} message={"Can we talk?"}/>
        <DashboardSellerMessageSingle user={'Customer'} time={'15 hours ago'} message={"How are you?"}/>
      </div> 


    </div>
  );
};

export default DashboardSellerMessage;
