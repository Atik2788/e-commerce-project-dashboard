import { useState } from "react";
import OrdersHeader from "./orders suported files/OrdersHeader";
import OrdersTable from "./orders suported files/OrdersTable";
import Pagination from "./orders suported files/Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
      <div className="px-2 lg:px-7 pt-5">
        <div className="w-full p-4 bg-[#39a290] rounded-md ">
          <OrdersHeader setParPage={setParPage} />

          {/* table */}
          <OrdersTable show={show} setShow={setShow} />

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
  );
};

export default Orders;
