import React from "react";
import styled from "@emotion/styled";

const Button = () => {
  return (
    <ButtonBox>
      <SearchButton>검색</SearchButton>
    </ButtonBox>
  );
};
const ButtonBox = styled.div`
  width: 4.8125rem;
  border: 1px solid #cecece;
  border-left: 0;
`;
const SearchButton = styled.button`
  width: 3.75rem;
  height: 2.3125rem;
  font-size: 0.8125rem;
  font-weight: normal;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 1.9375rem;
  border-radius: 0.25rem;
  margin-left: 0.375rem;
  margin-top: 1.4375rem;
  cursor:pointer;
`;
export default Button;
