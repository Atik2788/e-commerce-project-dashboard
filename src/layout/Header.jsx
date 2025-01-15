import React from "react";
import { FaList } from "react-icons/fa6";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-5 z-40">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#39a290] px-5 transition-all">
        
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer"
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

      </div>
    </div>
  );
};

export default Header;
