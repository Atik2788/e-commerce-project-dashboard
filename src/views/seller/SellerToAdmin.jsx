import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import ActiveSellerIcon from './chat seller suported files/ActiveSellerIcon';
import ChatRightPart from '../seller/chat seller suported files/ChatRightPart';

const SellerToAdmin = () => {

    const [show, setShow] = useState(false)
    const sellerId = 65

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className="w-full bg-[#39a290] px-4 py-4 rounded-md ">
                    {/* chat right part / chat container div */}
                    <div className="">
                    <ChatRightPart sellerId={sellerId} setShow={setShow} show={show} dontShow='true' name="Support"/>
                    </div>
            </div>
        </div>
    );
};

export default SellerToAdmin;