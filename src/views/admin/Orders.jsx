import OrdersHeader from "./orders suported files/OrdersHeader";
import OrdersTable from "./orders suported files/OrdersTable";


const Orders = () => {
  return (
    <div>
      <div className="px-2 lg:px-7 pt-5">
        <div className="w-full p-4 bg-[#39a290] rounded-md ">
          <OrdersHeader />

          {/* table */}
         <OrdersTable/>


        </div>
      </div>
    </div>
  );
};

export default Orders;
