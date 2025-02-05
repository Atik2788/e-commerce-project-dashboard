import React from "react";
import OrderDetailsImgSec from "./orders suported files/OrderDetailsImgSec";

const OrderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#39a290] rounded-md ">
        <div className="flex justify-between items-center p-4">
            <h2 className="text-xl text-[#d0d2d6]">Order Details</h2>
            <select name="" id="" className="px-4 py-2 focus:border-[#8ae1db] outline-none bg-[#277367] border border-[#8ae1db] rounded-md text-[#d0d2d6]">
                <option value="pending">pending</option>
                <option value="processing">processing</option>
                <option value="warehouse">warehouse</option>
                <option value="placed">placed</option>
                <option value="cancelled">cancelled</option>
            </select>
        </div>
        
        <div className="p-4 ">
            <div className="flex gap-2 text-lg text-[#d0d2d6]">
                <h2>#34698</h2>
                <span>3 March 2025</span>                
            </div>

            <div className="md:flex flex-wrap ">
                <div className="md:w-[30%]">
                    <div className="md:pr-3 text-[#d0d2d6] text-lg">
                        <div className="flex flex-col gap-1">
                            <h2 className="pb-2 font-semibold">Deliver To: Ware House</h2>
                        </div>
                        
                        <div className="flex justify-start items-center gap-3">
                            <h2>Payment Status:</h2>
                            <span className="text-base">Paid</span>
                        </div>

                        <span>Price: $215</span>
                        
                        {/* product img section start */}
                        <OrderDetailsImgSec productName="Product Name Here" brand="Easy" qunatity={3}/>
                        <OrderDetailsImgSec productName="Product Name Here" brand="Easy" qunatity={5}/>
                        <OrderDetailsImgSec productName="Product Name Here" brand="Easy" qunatity={1}/>
                        {/* product img section end */}

                    </div>
                </div>

            </div>



        </div>


      </div>
    </div>
  );
};

export default OrderDetails;
