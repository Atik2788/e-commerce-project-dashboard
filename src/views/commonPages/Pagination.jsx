import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const Pagination = ({currentPage, setCurrentPage, totalItem, parPage, showItem}) => {
    let totalPage = Math.ceil(totalItem / parPage);
    // current is pageNumber
    let startPage = currentPage;

    let dif = totalPage - currentPage;
    if(dif <= showItem){
        startPage = totalPage - showItem;
    }
    let endPage = startPage < 0 ? showItem : showItem + startPage;

    if(startPage <= 0){
        startPage = 1
    }

    const createBtn = () =>{
        const btns = [];
        for(let i = startPage; i <= endPage; i++ ){
            btns.push(
                <li key={i} onClick={() => setCurrentPage(i)} className={`${currentPage === i ? "bg-[#8ae1db] shadow-lg shadow-[#6db0ac] text-[#b7b9be]" : "bg-slate-600 hover:bg-[#8ae1db] shadow-lg hover:shadow-[#6db0ac] text-[#d0d2d6] hover:text-[#b7b9be]"} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}>
                    {i}
                </li>
            )
        }
        return btns;
    }

    return (
        <ul className='flex gap-3'>
            {
                currentPage > 1 && 
                <li onClick={() =>setCurrentPage(currentPage - 1) } className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-600 text-[#d0d2d6] cursor-pointer">
                    <RxDoubleArrowLeft />
                </li>
            }
            {
                createBtn()
            }
                        {
                currentPage < totalPage && 
                <li onClick={() =>setCurrentPage(currentPage + 1) } className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-600 text-[#d0d2d6] cursor-pointer">
                    <RxDoubleArrowRight />
                </li>
            }
        </ul>
    );

};

export default Pagination;