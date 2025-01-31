import React, { useState } from "react";
import SetParPage from "../commonPages/SetParPage";
import Table from "../commonPages/Table";
import { headersSellerProducts, rowsSellerProducts } from "../../api/headersAndRows";
import Pagination from "../commonPages/Pagination";

const DiscountProducts = () => {

      const [currentPage, setCurrentPage] = useState(1);
      const [searchValue, setSearchValue] = useState("");
      const [parPage, setParPage] = useState(5);
      const [show, setShow] = useState(false);        


    return (
        <div className="px-2 lg:px-7 pt-5">

      </div>
    );
};

export default DiscountProducts;