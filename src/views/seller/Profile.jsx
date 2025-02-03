import React from "react";
import { FaImages } from "react-icons/fa6";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Profile = () => {

    const image = true;
    const loader = true;

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-6/12 ">
            <div className="w-full p-4 bg-[#39a290] rounded-md text-[#d0d2d6]">
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
            </div>
        </div>


        <div className="w-full md:w-6/12 bg-[#39a290] px-4 py-4 rounded-md ">
        </div>
      </div>
    </div>
  );
};

export default Profile;
