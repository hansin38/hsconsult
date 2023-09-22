import React from 'react';
import {} from './Pagination.constants';
import { IPagination } from './Pagination.types';
import { PaginationBody, PaginationContainer } from './Pagination.styles';


export const Pagination = ({ currentPage: page, limit, totalCount, onPageChange }: IPagination): React.ReactElement => {
  const currentPage = Number(page);
  const totalPages = Math.ceil(totalCount / limit);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (totalPages > 5) {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 4;
        endPage = totalPages;
      }
    } else {
      startPage = 1;
      endPage = totalPages;
    }

    if (startPage > 1) pageNumbers.push(<li key="start-ellipsis">...</li>);

    for (let i = startPage; i <= endPage; i += 1) {
      pageNumbers.push(<li key={i} className={i === currentPage ? 'active pageNumber' : 'pageNumber'} onClick={() => handlePageChange(i)}>{i}</li>);
    }

    if (endPage < totalPages) pageNumbers.push(<li key="end-ellipsis">...</li>);

    return pageNumbers;
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <PaginationBody>
        <li onClick={handlePrevPage} className={currentPage === 1 ? 'none' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M12.0252 15.8333C11.7731 15.8342 11.5341 15.7208 11.3752 15.525L7.35022 10.525C7.09745 10.2175 7.09745 9.77418 7.35022 9.46668L11.5169 4.46668C11.8114 4.1123 12.3375 4.0638 12.6919 4.35835C13.0463 4.6529 13.0948 5.17897 12.8002 5.53335L9.07522 10L12.6752 14.4667C12.8833 14.7164 12.9271 15.0644 12.7875 15.358C12.6479 15.6516 12.3503 15.8371 12.0252 15.8333Z" fill={currentPage === 1 ? '#7C7C7C' : 'black'}/>
          </svg>
        </li>
        {renderPageNumbers()}
        <li onClick={handleNextPage} className={currentPage === totalPages ? 'none' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M8.83334 15.8333C8.63863 15.8337 8.44993 15.7659 8.3 15.6417C8.12958 15.5004 8.02238 15.2971 8.00206 15.0766C7.98173 14.8562 8.04996 14.6367 8.19167 14.4667L11.925 10L8.325 5.525C8.1852 5.35284 8.11978 5.13205 8.14324 4.91152C8.1667 4.69098 8.2771 4.4889 8.45 4.35C8.62431 4.19664 8.85469 4.12294 9.08565 4.14667C9.31661 4.1704 9.52719 4.2894 9.66667 4.475L13.6917 9.47501C13.9444 9.78251 13.9444 10.2258 13.6917 10.5333L9.525 15.5333C9.35545 15.7379 9.09853 15.8493 8.83334 15.8333Z" fill={currentPage === totalPages ? '#7C7C7C' : 'black'}/>
          </svg>
        </li>
      </PaginationBody>
    </PaginationContainer>
  );
};
