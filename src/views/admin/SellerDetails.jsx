import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_seller, seller_status_update } from "../../store/Reducers/sellerReducer";
import { messageClear,} from "../../store/Reducers/sellerReducer";
import toast from "react-hot-toast";

const SellerDetails = () => {

  const dispatch = useDispatch();
  const { seller, successMessage } = useSelector((state) => state.seller);
  const {sellerId} = useParams()

    useEffect(() =>{
      dispatch(get_seller(sellerId))
    }, [sellerId])
    
    const [status, setStatus] = useState('')
    const submit = (e) =>{
         e.preventDefault();
         dispatch(seller_status_update({
            sellerId,
            status
         }))
    }

    useEffect(() => {
        if (successMessage) {
          toast.success(successMessage);
          dispatch(messageClear());
        }
      }, [successMessage, dispatch]);
 
    useEffect(() => {
        if (seller) {
          setStatus(seller.status)
        }
      }, [seller]);
 

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Seller Details</h1>

      <div className="flex flex-col mb-5 p-4 bg-[#39a290] rounded-md">

        <div className="w-full flex flex-wrap text-[#d0d2d6]">

            <div className="w-3/12 flex justify-center items-center py-3">
                <div>
                    { seller.image ?
                    <img className="w-full h-[230px] rounded-md" src={seller?.image} alt="" />
                    : 
                    <p className="border border-gray-400 p-10 rounded-md">No Image</p>
                    }
                    
                </div>
            </div>


            <div className="w-4/12">
                <div className="px-0 md:px-5 py-2">
                    <div className="py-2 text-lg">
                        <h2>Basic Information</h2>
                    </div>

                    <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#8ae1db] rounded-md">
                        <div className="flex gap-2 font-bold text-black">
                            <span>Name: </span>
                            <span>{seller?.name}</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Email: </span>
                            <span>{seller?.email}</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Role: </span>
                            <span>{seller?.role}</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Status: </span>
                            <span>{seller?.status}</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Payment Status: </span>
                            <span>{seller?.payment}</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-4/12">
                <div className="px-0 md:px-5 py-2">
                    <div className="py-2 text-lg">
                        <h2>Address</h2>
                    </div>

                    <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#8ae1db] rounded-md">
                        <div className="flex gap-2 font-bold text-black">
                            <span>Shop Name: </span>
                            <span>{seller?.shopInfo?.shopName}</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Devision: </span>
                            <span>{seller?.shopInfo?.division}</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>Distric:</span>
                            <span>{seller?.shopInfo?.district}</span>
                        </div>
                        <div className="flex gap-2 font-bold text-black">
                            <span>State: </span>
                            <span>{seller?.shopInfo?.sub_district}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="">
            <form onSubmit={submit}>
                <div className="flex gap-4 py-3">
                <select value={status} onChange={(e) =>setStatus(e.target.value)} className='px-4 py-2 hover:border-[#134d49] outline-none bg-[#39a290] border border-[#8ae1db]  rounded-md text-[#d0d2d6] ' required>
                        <option value="">--Select Status--</option>
                        <option value="Active">Active</option>
                        <option value="Deactive">Deactive</option>
                    </select>

                    <button className="bg-[#134d49] w-[170px] hover:shadow-[#8ae1db] hover:shadow-md text-white rounded-md py-2">
                      Submit
                    </button>
                </div>
            </form>
        </div>
      </div>

    </div>
  );
};

export default SellerDetails;
