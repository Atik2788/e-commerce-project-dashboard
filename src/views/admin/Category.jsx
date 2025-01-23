import React, { useState } from "react";
import SetParPage from "./commonPages/SetParPage";
import Pagination from "./commonPages/Pagination";
import AdminDashboardTable from "./admin suported files/AdminDashboardTable";
import Table from "./commonPages/Table";
import { FaImages } from "react-icons/fa6";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  const headers = ["No", "Image", "Name", "Action"];
  const rows = [
    {
      no: 1,
      image: "http://localhost:3000/images/category/1.jpg", // Placeholder image
      name: "Shoo",
    },
    {
      no: 2,
      image: "http://localhost:3000/images/category/2.jpg", // Placeholder image
      name: "Watch",
    },
    {
      no: 3,
      image: "http://localhost:3000/images/category/3.jpg", // Placeholder image
      name: "Cloth",
    },
    {
      no: 4,
      image: "http://localhost:3000/images/category/4.jpg", // Placeholder image
      name: "Bag",
    },
  ];



  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex flex-wrap w-full">

        {/* left side div */}
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-[#39a290] rounded-md">
            <SetParPage setParPage={setParPage} />

            <Table headers={headers} rows={rows}/>

            <div className="w-full flex justify-end mt-4 bottom-4 right-4">
              <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalItem={50}
                parPage={parPage}
                showItem={3}
              />
            </div>
          </div>
        </div>


        {/* right side div */}
        <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? "right-0" : '-right-[340px]'} z-20 top-0 transition-all duration-500`}>
          <div className="w-full pl-5">
            <div className="bg-[#39a290] rounded-md h-screen lg:h-auto px-3 py-2 text-[#d0d2d6]">
              <h1 className="text-[#d0d2d6] font-semibold text-xl mb-4 w-full text-center">Add Category</h1>
              <form>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="">Category Name</label>
                  <input className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#f9fbfb] rounded-md text-[#39a290]" type="text" id="name" name="category_name" placeholder="Category Name" />
                </div>

                <div>
                  <label className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-[#8ae1db] w-full border-white" htmlFor="image">
                    <span><FaImages /></span>
                    <span>Select Image</span>
                  </label>
                </div>

              </form>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Category;
