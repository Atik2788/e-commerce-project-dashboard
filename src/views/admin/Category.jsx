import React, { useState } from "react";
import SetParPage from "./commonPages/SetParPage";
import Pagination from "./commonPages/Pagination";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">

          <div className="w-full p-4 bg-[#39a290] rounded-md ">
            <SetParPage setParPage={setParPage} />

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

          <div className="w-full lg:w-5/12"></div>
        </div>
      </div>
    </div>
  );
};

export default Category;
