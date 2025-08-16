import React from "react";

function Pagination({ totalComments, commentsPerPage, onPageChange, currentPage }) {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalComments / commentsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`page-button ${currentPage === number ? 'active' : ''}`}
                >
                    {number}
                </button>
            ))}
        </div>
    );
}

export default Pagination;