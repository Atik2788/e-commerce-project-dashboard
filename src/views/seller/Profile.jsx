import React from "react";

const Profile = () => {

    const image = true;

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-6/12 ">
            <div className="w-full p-4 bg-[#39a290] rounded-md text-[#d0d2d6]">
                <div className="flex justify-center items-center py-3"></div>
            </div>
        </div>


        <div className="w-full md:w-6/12 bg-[#39a290] px-4 py-4 rounded-md ">
        </div>
      </div>
    </div>
  );
};

export default Profile;
