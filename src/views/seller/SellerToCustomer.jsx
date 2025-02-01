import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import ActiveSellerIcon from './chat seller suported files/ActiveSellerIcon';
import ChatRightPart from '../seller/chat seller suported files/ChatRightPart';

const SellerToCustomer = () => {

    const [show, setShow] = useState(false)
    const sellerId = 65

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className="w-full bg-[#39a290] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
                <div className='flex w-full h-full relative'>

                    <div className={`w-[280px] h-full absolute z-10 ${show ? '' : '-left-[336px]'} md:left-0 md:relative transition-all`}>

                        <div className="w-full h-[calc(100vh-177px)] bg-[#287999] md:bg-transparent overflow-auto rounded-md">
                            <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                                <h2>Customers</h2>
                                <span onClick={() => setShow(false)} className='block cursor-pointer md:hidden'><AiOutlineClose /></span>
                            </div>

                            <ActiveSellerIcon name = "Bashir Ahmed" bg="bg-[#42bca8]"/>
                            <ActiveSellerIcon name = "Rokib Hasan"/>
                            <ActiveSellerIcon name = "Saif Khan"/>                            

                        </div>
                    </div>

                    <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
                    <ChatRightPart sellerId={sellerId} setShow={setShow} show={show}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SellerToCustomer;