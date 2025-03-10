import React from "react";
import { FaList } from "react-icons/fa6";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-5 z-40">

        
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#39a290] px-5 transition-all">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-[#287999] shadow-lg hover:shadow-blue-500/50 text-white justify-center items-center cursor-pointer"
        >
          <span>
            <FaList />
          </span>
        </div>

        <div className="hidden md:block ">
          <input
            className="px-3 py-2 outline-none border border-[#277367] rounded-full text-[#8ae1db] bg-transparent focus:border-[#8ae1db] overflow-hidden"
            type="text"
            name="search"
            placeholder="search"
          />
        </div>

        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center gap-3">

              <div className="flex justify-center items-center flex-col text-end ">
                <h2 className="text-md font-bold ">John Devid</h2>
                <span className="text-[14px] w-full font-normal">Admin</span>
              </div>

              <img src="http://localhost:3000/images/admin.jpeg" className="w-12 h-12 rounded-full overflow-hidden" alt="" />

            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Header;
