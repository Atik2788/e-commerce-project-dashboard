import React, { useState } from "react";
import SetParPage from "./commonPages/SetParPage";

const Sellers = () => {
  const [parPage, setParPage] = useState(5);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex fex-col justify-between items-center mb-5 p-4 bg-[#39a290] rounded-md">
        <div className="w-full p-4 bg-[#39a290] rounded-md">
          <SetParPage setParPage={setParPage} />
        </div>
      </div>
    </div>
  );
};

export default Sellers;
