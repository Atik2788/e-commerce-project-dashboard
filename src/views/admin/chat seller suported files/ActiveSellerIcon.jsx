import React from "react";

const ActiveSellerIcon = ({name, bg}) => {
  return (
    <div
      className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 cursor-pointer ${bg} rounded-md`}
    >
      <div className="relative">
        <img
          className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
          src="http://localhost:3000/images/admin.jpeg"
          alt=""
        />
        <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
      </div>

      <div className="flex- justify-center items-center flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-base font-semibold ">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ActiveSellerIcon;
