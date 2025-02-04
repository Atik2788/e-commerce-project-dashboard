import React from "react";
import { FaImages } from "react-icons/fa6";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const image = true;
  const loader = true;
  const status = "active";
  const userInfo = true;

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap">

        {/* left section start */}
        <div className="w-full md:w-6/12 ">
          <div className="w-full p-4 bg-[#39a290] rounded-md text-[#d0d2d6]">
            {/* img section start */}
            <div className="flex justify-center items-center py-3">
              {image ? (
                <label
                  htmlFor="img"
                  className="h-[150px] w-[200px] relative p-3 cursor-pointer overflow-hidden"
                >
                  <img
                    className="w-full h-full"
                    src="http://localhost:3000/images/demo.jpg"
                    alt=""
                  />
                  {!loader && (
                    <div className="bg-slate-600 absolute top-0 left-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <ClimbingBoxLoader color="#ffffff" />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  className="flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed border-[#8ae1db] hover:border-red-500 relative"
                  htmlFor="img"
                >
                  <span>
                    <FaImages />
                  </span>
                  <span>Select image</span>
                  {loader && (
                    <div className="bg-slate-600 absolute top-0 left-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <ClimbingBoxLoader color="#ffffff" />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input type="file" className="hidden" id="img" />
            </div>
            {/* img section start */}

            {/* profile details section start */}
            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative">
                <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                  <FaRegEdit />
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
                  <p>
                    {status === "active" ? (
                      <span className="bg-green-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-1 rounded">
                        Pending
                      </span>
                    ) : (
                      <span className="bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-1 rounded">
                        Click Active
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* profile details section end */}

            {/* profile details2 section start */}
            <div className="px-0 md:px-5 py-2">
              {!userInfo ? (
                <form>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="Shop">Shop Name</label>
                    <input
                      type="text"
                      name="shopName"
                      id="Shop"
                      placeholder="Shop Name"
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="division">Division Name</label>
                    <input
                      type="text"
                      name="division"
                      id="division"
                      placeholder="Division Name"
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="distric">District Name</label>
                    <input
                      type="text"
                      name="distric"
                      id="distric"
                      placeholder="Distric Name"
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="subdis">Sub District Name</label>
                    <input
                      type="text"
                      name="subdis"
                      id="subdis"
                      placeholder="Sub Distric Name"
                      className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]"
                    />
                  </div>

                  <div className="flex">
                    <button className="bg-[#277367] w-[150px] mt-4 hover:shadow-[#8ae1db] hover:shadow-md text-white rounded-md py-2">
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative">
                  <span className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                    <FaRegEdit />
                  </span>

                  <div className="flex gap-2">
                    <span className="font-semibold">Shop Name : </span>
                    <span>Easy Shop</span>
                  </div>

                  <div className="flex gap-2">
                    <span className="font-semibold">Division : </span>
                    <span>Dhaka</span>
                  </div>

                  <div className="flex gap-2">
                    <span className="font-semibold">District : </span>
                    <span>Kishoreganj</span>
                  </div>

                  <div className="flex gap-2">
                    <span className="font-semibold">Sub District : </span>
                    <span>Kihoreganj Sadar</span>
                  </div>
                </div>
              )}
            </div>
            {/* profile details2 section end */}
          </div>
        </div>
        {/* left section end */}

        {/* right section start */}
        <div className="w-full md:w-6/12 ">
          <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0 ">
            <div className="bg-[#39a290] rounded-md text-[#d0d2d6] p-4">
              <h1 className="text-[#d0d2d6] text-lg mb-3 font-semibold">Change Password</h1>
              <form>
                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]"
                  />
                </div>

                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="o_password">Old Password</label>
                  <input
                    type="password"
                    name="old_password"
                    id="o_password"
                    placeholder="Old Password"
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]"
                  />
                </div>

                <div className="flex flex-col w-full gap-1 mb-2">
                  <label htmlFor="n_password">New Password</label>
                  <input
                    type="password"
                    name="new_password"
                    id="n_password"
                    placeholder="New Password"
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]"
                  />
                </div>

                <div className="flex">
                  <button className="bg-[#277367] w-[150px] mt-4 hover:shadow-[#8ae1db] hover:shadow-md text-white rounded-md py-2">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* right section end */}

      </div>
    </div>
  );
};

export default Profile;
