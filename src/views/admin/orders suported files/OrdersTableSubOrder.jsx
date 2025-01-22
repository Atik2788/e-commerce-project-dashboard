import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const OrdersTableSubOrder = ({setShow, show}) => {
    return (
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
    );
};

export default OrdersTableSubOrder;