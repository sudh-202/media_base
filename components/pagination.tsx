import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex justify-center items-center space-x-4 mt-4">
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-gray-600 disabled:text-gray-300 "
            >
                &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handleClick(index + 1)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === index + 1 ? 'bg-[#C9D851] text-black' : 'text-blue-500'}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="text-gray-600 disabled:text-gray-300 "
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
