import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation";
import { BiLogOutCircle } from "react-icons/bi";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [allNav, setAllNave] = useState([]);

  useEffect(() => {
    const navs = getNav("admin");
    setAllNave(navs);
  }, []);

  // console.log(allNav);

  return (
    <div>
      <div></div>

      <div
        className={`w-[260px] fixed bg-[#39a290] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all `}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[30px] ">
            <img
              className="w-full h-full"
              src="http://localhost:3000/images/logo2.png"
              alt=""
            />
          </Link>
        </div>

        <div className="px-[16px]">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                {/*  conditioning css */}
                <Link
                  to={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-[#277367] shadow-indigo-500/50 text-white duration-500 rounded-sm "
                      : "duration-500"
                  } flex items-center justify-start pl-4 gap-2 py-1 font-bold hover:pl-8 transition-all w-full mb-1 `}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}

            <li>
              <button className="flex items-center justify-start pl-4 gap-2 py-1 font-bold duration-500 hover:pl-8 transition-all w-full mb-1">
                <span className="font-extrabold"><BiLogOutCircle /></span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
