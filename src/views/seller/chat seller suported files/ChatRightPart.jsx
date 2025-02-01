import React from 'react';
import { FaList } from 'react-icons/fa';

const ChatRightPart = ({sellerId, setShow, show}) => {
    return (
        <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
                        <div className="flex justify-between items-center">
                            {
                                sellerId && <div className='flex justify-start items-center gap-3'>
                                    <div className="relative">
                                        <img className='w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] p-[2px] rounded-full' src="http://localhost:3000/images/demo.jpg" alt="" />
                                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'>
                                    </div> 
                                    </div> 
                                </div>
                            }

                            <div onClick={() => setShow(!show)} className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-[#287999] shadow-lg hover:shadow-blue-500/50 justify-center items-center cursor-pointer text-white">
                                <span><FaList/></span>
                            </div>
                        </div>

                        <div className='py-4'>
                            <div className="bg-[#205c74] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                                
                                <div className='w-full flex justify-start items-center'>
                                    <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                                        <div>
                                            <img
                                                className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                                                src="http://localhost:3000/images/admin.jpeg"
                                                alt=""
                                                />
                                        </div>
                                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm'>
                                            <span>How are you?</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='w-full flex justify-end items-center'>
                                    <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                                       
                                        <div className='flex justify-center items-start flex-col w-full bg-[#39a290] shadow-lg shadow-teal-500/50 text-white py-1 px-2 rounded-sm'>
                                            <span>What are you doing?</span>
                                        </div>
                                        <div>
                                            <img
                                                className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                                                src="http://localhost:3000/images/seller.jpg"
                                                alt=""
                                                />
                                        </div>
                                    </div>
                                </div>

                                  
                                <div className='w-full flex justify-start items-center'>
                                    <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                                        <div>
                                            <img
                                                className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                                                src="http://localhost:3000/images/admin.jpeg"
                                                alt=""
                                                />
                                        </div>
                                        <div className='flex justify-center items-start flex-col w- full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm'>
                                            <span>I need some help.</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        
                        <form className='flex gap-3'>
                            <input 
                            type="text" 
                            placeholder='Input Your Message' 
                            className='w-full flex justify-between px-2 border border-[#8ae1db] items-center py-[5px] focus:border-[#287999] rounded-md outline-none bg-transparent text-[#d0d2d6]' />

                            <button className="bg-[#277367] w-[150px] hover:shadow-[#8ae1db] hover:shadow-md text-white rounded-md py-2">
                            Send
                            </button>
                        </form>

                    </div>
    );
};

export default ChatRightPart;