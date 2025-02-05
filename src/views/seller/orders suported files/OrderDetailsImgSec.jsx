import React from "react";

const OrderDetailsImgSec = ({ qunatity, productName, brand }) => {
  return (
    <div className="mt-4 flex felx-col gap-4 bg-[#42bca8] rounded-sm">
      <div className="text-[#d0d2d6] ">
        <div className="flex gap-3 text-md justify-center items-center px-1 ">
          <img
            className="w=[50px] h-[50px]"
            src="http://localhost:3000/images/category/1.jpg"
            alt=""
          />
          <div className="">
            <h2>{productName}</h2>
            <p>
              <span>Brand: </span>
              <span>{brand} </span>
              <span className="text-lg">Quantity: {qunatity}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsImgSec;
