import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="bg-[#8ae1db] w-full">
      <Header />
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
