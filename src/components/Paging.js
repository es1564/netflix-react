import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paging = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page === currentPage) return; // 현재 페이지와 같은 페이지를 클릭한 경우 무시
    onPageChange(page);
  };

  const renderPaginationItems = () => {
    const items = [];

    for (let page = 1; page <= totalPages; page++) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <Pagination>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      />
      {renderPaginationItems()}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      />
    </Pagination>
  );
};

export default Paging;
