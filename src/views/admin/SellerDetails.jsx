import React from "react";

const SellerDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Seller Details</h1>

      <div className="flex flex-col mb-5 p-4 bg-[#39a290] rounded-md">

        <div className="w-full flex flex-wrap text-[#d0d2d6]">

            <div className="w-3/12 flex justify-center items-center py-3">
                <div>
                    <img className="w-full h-[230px] rounded-md" src="http://localhost:3000/images/seller.jpg " alt="" />
                </div>
            </div>


            <div className="w-4/12">
                <div className="px-0 md:px-5 py-2">
                    <div className="py-2 text-lg">
                        <h2>Basic Information</h2>
                    </div>

                    <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#8ae1db] rounded-md">
                        <div className="flex gap-2 font-bold text-black">
                            <span>Name: </span>
                            <span>Bashir Ahmed</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Email: </span>
                            <span>bashirahmed@gmail.com</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Role: </span>
                            <span>Seller </span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Status: </span>
                            <span>Active </span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Payment Status: </span>
                            <span>Active </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-4/12">
                <div className="px-0 md:px-5 py-2">
                    <div className="py-2 text-lg">
                        <h2>Address</h2>
                    </div>

                    <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#8ae1db] rounded-md">
                        <div className="flex gap-2 font-bold text-black">
                            <span>Shop Name: </span>
                            <span>Easy Shop</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Devision: </span>
                            <span>Dhaka</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Distric:</span>
                            <span>Seller </span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>State: </span>
                            <span>Paltan </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="">
            <form action="">
                <div className="flex gap-4 py-3">
                <select className='px-4 py-2 hover:border-[#134d49] outline-none bg-[#39a290] border border-[#8ae1db]  rounded-md text-[#d0d2d6] '>
                        <option value="">--Select Status--</option>
                        <option value="Active">Active</option>
                        <option value="Deactive">Deactive</option>
                    </select>

                    <button className="bg-[#134d49] w-[170px] hover:shadow-[#8ae1db] hover:shadow-md text-white rounded-md py-2">
                      Submit
                    </button>
                </div>
            </form>
        </div>
      </div>

    </div>
  );
};

export default SellerDetails;
