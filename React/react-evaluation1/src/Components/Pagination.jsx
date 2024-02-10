// function createArrayOfSize(n) {
//   return new Array(n).fill(0);
// }

// function Pagination() {
//   let pages = createArrayOfSize(0).map((a) => {
//     <button data-testid="page-btn">number</button>;
//   });
//   return <div></div>;
// }

// export default Pagination;

import React from 'react';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      {pages.map(page => (
        <button
          key={page}
          disabled={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

