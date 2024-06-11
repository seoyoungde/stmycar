import React from "react";
import styled from "@emotion/styled";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PageNumber
          key={i}
          isActive={i === currentPage}
          onClick={() => handleClick(i)}
        >
          {i}
        </PageNumber>
      );
    }
    return pages;
  };

  return (
    <PaginationContainer>
      <Button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleDoubleLeft size="12" style={{ marginTop: "0.125rem" }} />
      </Button>
      <Button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft size="12" style={{ marginTop: "0.125rem" }} />
      </Button>
      {renderPageNumbers()}
      <Button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight size="12" style={{ marginTop: "0.125rem" }} />
      </Button>
      <Button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaAngleDoubleRight size="12" style={{ marginTop: "0.125rem" }} />
      </Button>
    </PaginationContainer>
  );
};
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.875rem;
`;

const Button = styled.button<{ disabled: boolean }>`
  padding: 0.125rem 0.25rem;
  font-size: 0.75rem;
  margin: 0 0.25rem;
  background-color: black;
  color: white;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#007bff" : "#0056b3")};
  }
`;

const PageNumber = styled.span<{ isActive: boolean }>`
  padding: 0.1875rem 0.375rem;
  margin: 0 0.25rem;
  cursor: pointer;
  font-size: 0.75rem;
  background-color: ${({ isActive }) => (isActive ? "black" : "#fff")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};

  &:hover {
    background-color: #646464;
    color: #fff;
  }
`;
export default Pagination;
