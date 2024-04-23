import React from "react";
import styled from "styled-components";

import arrowRightIcon from "../assets/icon/arrow-right.svg";
import arrowLeftIcon from "../assets/icon/arrow-left.svg";

const Pagination = ({
  className,
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  goToPage,
}) => {
  const renderPageButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => goToPage(i + 1)}
        className={i + 1 === currentPage && "active"}
      >
        {i + 1}
      </button>
    ));
  };

  return (
    <StyledPagination className={className}>
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        <i className="arrow-left"></i>
      </button>
      {renderPageButtons()}
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        <i className="arrow-right"></i>
      </button>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 100%;
    font-weight: 600;
    font-size: 16px;
    line-height: 0;
    color: var(--color-cool-gray-500);
  }

  .active {
    background-color: var(--color-blue);
    color: #fff;
  }

  i.arrow-right,
  i.arrow-left {
    display: block;
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  i.arrow-right {
    background-image: url(${arrowRightIcon});
  }

  i.arrow-left {
    background-image: url(${arrowLeftIcon});
  }
`;

export default Pagination;
