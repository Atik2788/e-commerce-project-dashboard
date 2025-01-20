import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrdersTable = ({ show, setShow }) => {
  return (
    <div className="relative mt-5 overflow-x-auto">
      <div className="w-full text-sm text-left bg-[#39a290]">
        {/* table header */}
        <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700 ">
          <div className="flex justify-between items-center">
            <div className="py-3 w-[25%] font-bold">Order id</div>
            <div className="py-3 w-[13%] font-bold">Price</div>
            <div className="py-3 w-[18%] font-bold">Payment Status</div>
            <div className="py-3 w-[18%] font-bold">Order Status</div>
            <div className="py-3 w-[18%] font-bold">Action</div>
            <div className="py-3 w-[8%] font-bold">
              <FaArrowAltCircleDown />
            </div>
          </div>
        </div>

        {/* table main order with sub orders start */}
        <div className="text-[#d0d2d6]">
          <div className="flex justify-between items-start border-b border-slate-700">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              #35985
            </div>
            <div className="py-3 w-[13%] font-medium whitespace-nowrap">
              $685
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              <Link>View</Link>
            </div>
            <div
              onClick={(e) => setShow(!show)}
              className="py-3 w-[8%] font-medium whitespace-nowrap"
            >
              <FaArrowAltCircleDown />
            </div>
          </div>

          <div
            className={
              show ? "block border-b border-slate-700 bg-[#49b39f]" : "hidden"
            }
          >
            <div className="flex justify-start items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap px-2">
                #985
              </div>
              <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                $65
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
            </div>

            <div className="flex justify-start items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap px-2">
                #985
              </div>
              <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                $65
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
            </div>
          </div>
        </div>
        {/* table main order with sub orders end */}


        {/* table main order with sub orders start */}
        <div className="text-[#d0d2d6]">
          <div className="flex justify-between items-start border-b border-slate-700">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              #35985
            </div>
            <div className="py-3 w-[13%] font-medium whitespace-nowrap">
              $685
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              <Link>View</Link>
            </div>
            <div
              onClick={(e) => setShow(!show)}
              className="py-3 w-[8%] font-medium whitespace-nowrap"
            >
              <FaArrowAltCircleDown />
            </div>
          </div>

          <div
            className={
              show ? "block border-b border-slate-700 bg-[#49b39f]" : "hidden"
            }
          >
            <div className="flex justify-start items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap px-2">
                #985
              </div>
              <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                $65
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
            </div>

            <div className="flex justify-start items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap px-2">
                #985
              </div>
              <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                $65
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
            </div>
          </div>
        </div>
        {/* table main order with sub orders end */}
        

                {/* table main order with sub orders start */}
                <div className="text-[#d0d2d6]">
          <div className="flex justify-between items-start border-b border-slate-700">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              #35985
            </div>
            <div className="py-3 w-[13%] font-medium whitespace-nowrap">
              $685
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              <Link>View</Link>
            </div>
            <div
              onClick={(e) => setShow(!show)}
              className="py-3 w-[8%] font-medium whitespace-nowrap"
            >
              <FaArrowAltCircleDown />
            </div>
          </div>

          <div
            className={
              show ? "block border-b border-slate-700 bg-[#49b39f]" : "hidden"
            }
          >
            <div className="flex justify-start items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap px-2">
                #985
              </div>
              <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                $65
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
            </div>

            <div className="flex justify-start items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap px-2">
                #985
              </div>
              <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                $65
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
            </div>
          </div>
        </div>
        {/* table main order with sub orders end */}


                {/* table main order with sub orders start */}
                <div className="text-[#d0d2d6]">
          <div className="flex justify-between items-start border-b border-slate-700">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              #35985
            </div>
            <div className="py-3 w-[13%] font-medium whitespace-nowrap">
              $685
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium whitespace-nowrap">
              <Link>View</Link>
            </div>
            <div
              onClick={(e) => setShow(!show)}
              className="py-3 w-[8%] font-medium whitespace-nowrap"
            >
              <FaArrowAltCircleDown />
            </div>
          </div>

          <div
            className={
              show ? "block border-b border-slate-700 bg-[#49b39f]" : "hidden"
            }
          >
            <div className="flex justify-start items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap px-2">
                #985
              </div>
              <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                $65
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
            </div>

            <div className="flex justify-start items-start border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap px-2">
                #985
              </div>
              <div className="py-3 w-[13%] font-medium whitespace-nowrap">
                $65
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium whitespace-nowrap">
                Pending
              </div>
            </div>
          </div>
        </div>
        {/* table main order with sub orders end */}


      </div>
    </div>
  );
};

export default OrdersTable;
