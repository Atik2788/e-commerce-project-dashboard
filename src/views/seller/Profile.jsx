import React from "react";
import { FaImages } from "react-icons/fa6";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {

    const image = true;
    const loader = true;

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-6/12 ">
            <div className="w-full p-4 bg-[#39a290] rounded-md text-[#d0d2d6]">
                {/* img section start */}
                <div className="flex justify-center items-center py-3">
                    {image ? 
                     <label htmlFor="img" className="h-[150px] w-[200px] relative p-3 cursor-pointer overflow-hidden">
                        <img className="w-full h-full" src="http://localhost:3000/images/demo.jpg" alt="" />
                        {
                            !loader && <div className="bg-slate-600 absolute top-0 left-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                                <span>
                                    <ClimbingBoxLoader color="#ffffff"  />
                                </span>
                            </div>
                        }
                     </label>
                    : 
                    <label className="flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed border-[#8ae1db] hover:border-red-500 relative" htmlFor="img">
                        <span><FaImages/></span>
                        <span>Select image</span>
                        {
                            loader && <div className="bg-slate-600 absolute top-0 left-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                                <span>
                                    <ClimbingBoxLoader color="#ffffff"  />
                                </span>
                            </div>
                        }
                    </label>
                    }
                    <input type="file" className="hidden" id="img" />
                </div>
                {/* img section start */}

                {/* profile details section start */}
                <div className="px-0 md:px-5 py-2">
                    <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative">
                        <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer"><FaRegEdit />
                        </span>

                        <div className="flex gap-2">
                            <span className="font-semibold">Name : </span>
                            <span>Mahin Khan</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="font-semibold">Email : </span>
                            <span>mahin@gmail.com</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="font-semibold">Role : </span>
                            <span>Seller</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="font-semibold">Status : </span>
                            <span>Active</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="font-semibold">Payment Account : </span>
                            <span>Pending</span>
                        </div>

                    </div>
                </div>
                 {/* profile details section end */}

            </div>
        </div>


        <div className="w-full md:w-6/12 bg-[#39a290] px-4 py-4 rounded-md ">
        </div>
      </div>
    </div>
  );
};

export default Profile;
