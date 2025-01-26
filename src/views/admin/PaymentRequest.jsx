import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWhel({deltaY}){
    console.log('handleOnWhel', deltaY);
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWhel} {...props}/>
))

const PaymentRequest = () => {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const Row = ({index, style}) =>{
        return(
            <div style={style} className="flex text-sm text-[#d0d2d6] font-medium">
                <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
                <div className="w-[25%] p-2 whitespace-nowrap">$2569</div>
                <div className="w-[25%] p-2 whitespace-nowrap">
                    <span className="py-1 px-1 bg-slate-600 rounded-sm text-sm">Pending</span>
                </div>
                <div className="w-[25%] p-2 whitespace-nowrap">25 dec 2024</div>
                <div className="w-[25%] p-2 whitespace-nowrap">
                    <button className="bg-green-700 shadow-lg hover:shadow-[#669c66] px-1 py-1 cursor-pointer text-sm text-[#d0d2d6] rounded-sm">Confirm</button>
                </div>
            </div>
        )
    }



  return (
    <div className="px-2 lg:px-7 pt-5">

      <div className="w-full p-4 bg-[#39a290] rounded-md">
        <h2 className="text-xl font-medium pb-5 text-[#d0d2d6]">
          Withdrawl Request
        </h2>

        <div className="w-full">
          <div className="w-full overflow-x-auto">

            <div className="flex bg-[#8ae1db] rounded-sm uppercase text-xs font-bold min-w-[340px]">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
              <div className="w-[25%] p-2">Action</div>
            </div>
            {
                <List 
                style={{minWidth: '340px'}}
                className="List"
                height={400}
                itemCount={100}
                itemSize={35}
                outerElementType={outerElementType}
                >
                    {Row}
                </List>
            }

          </div>
        </div>

      </div>


    </div>
  );
};

export default PaymentRequest;
