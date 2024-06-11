import React from "react";
import styled from "@emotion/styled";
import Option from "./Categorybox/Option";

const CarListSelectBox2 = () => {
  return (
    <PageContainer>
      <CarListSelectBoxTitle>
        ∙ 차량제원 Select-Box 선택 항목 관리
      </CarListSelectBoxTitle>
      <SelectContainer>
        <SelectBox1>
          <Option />
        </SelectBox1>
        <SelectBox2></SelectBox2>
        <SelectBox3></SelectBox3>
      </SelectContainer>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 73.125rem;
  margin: auto;
`;
const CarListSelectBoxTitle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-bottom: 1.625rem;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 73.125rem;
  justify-content: space-between;
`;

const SelectBox2 = styled.div`
  width: 23.125rem;
  height: 47.1875rem;
`;
const SelectBox1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const SelectBox3 = styled.div`
  width: 23.125rem;
  height: 47.1875rem;
`;
export default CarListSelectBox2;
