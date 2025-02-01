import React, { forwardRef } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { FixedSizeList as List } from "react-window";

function handleOnWhel({ deltaY }) {
  console.log("handleOnWhel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWhel} {...props} />
));

const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm text-[#d0d2d6] font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$2569</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-1 px-1 bg-slate-600 rounded-sm text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">25 dec 2024</div>
      </div>
    );
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      {/* headers start */}
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-4">
        {/* Total sels */}
        <div className="flex justify-between items-center p-5 bg-[#dbf6c4] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-lg font-bold ">$3569</h2>
            <span className="text-sm font-bold">Total Sales</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-red-600 flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        {/* Total Products */}
        <div className="flex justify-between items-center p-5 bg-[#ccdcfe] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-lg font-bold ">$250</h2>
            <span className="text-sm font-bold">Available Amount</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-purple-600 flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>

        {/* Total Sellers */}
        <div className="flex justify-between items-center p-5 bg-[#caf6c4] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-lg font-bold ">$0</h2>
            <span className="text-sm font-bold">Withdrawal Amount</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-green-600 flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>

        {/* Total Orders */}
        <div className="flex justify-between items-center p-5 bg-[#fbd4ec] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-lg font-bold ">$0</h2>
            <span className="text-sm font-bold">Pending Amount</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-blue-700 flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
      </div>
      {/* headers end */}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">

    {/* send request div start */}
        <div className="bg-[#39a290] p-5 rounded-md text-[#d0d2d6]">
          <h2 className="text-lg">Send Request</h2>
          {/* search div start */}
          <div className="pt-5 mb-5">
            <form>
              <div className="flex gap-3">
                <input
                  min="0"
                  className="w-[75%] px-4 py-2 focus:border-indigo-500 outline-none bg-[#8ae1db] rounded-md text-[#39a290]"
                  type="number"
                  placeholder=""
                  name="amount"
                />
                <button className="bg-[#277367] w-[25%] hover:shadow-[#8ae1db] hover:shadow-md text-white rounded-md py-2 px-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* search div end */}

          <div>
            <h2 className="text-lg pb-4">Pending Request</h2>

            <div className="w-full overflow-x-auto">
              {/* react window table start */}
              <div className="flex bg-[#8ae1db] rounded-sm uppercase text-xs font-bold min-w-[340px] text-black">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={10}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
            {/* react window table end */}

          </div>
        </div>
    {/* send request div end */}

    {/* withdraw success div start */}
        <div className="bg-[#39a290] p-5 rounded-md text-[#d0d2d6]">
          <div>
            <h2 className="text-lg pb-4">Success withdraw</h2>

            <div className="w-full overflow-x-auto">
              {/* react withdraw table start */}
              <div className="flex bg-[#8ae1db] rounded-sm uppercase text-xs font-bold min-w-[340px] text-black">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={10}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
            {/* react withdraw table end */}

          </div>
        </div>
    {/* withdraw success div end */}

      </div>
    </div>
  );
};

export default Payments;
