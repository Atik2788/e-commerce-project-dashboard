import React from 'react';

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
        
    }

    return (
        <div>
            
        </div>
    );
};

export default Pagination;