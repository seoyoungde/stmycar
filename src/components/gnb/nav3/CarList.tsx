import styled from "@emotion/styled";
import React from "react";
import CarListBox from "./box/CarListBox";
import CarListTable from "./table/CarListTable";

const CarList = () => {
  return (
    <PageContainer>
      <CarListTitle>∙ 차량 검색</CarListTitle>
      <CarListBox />
      <CarListTableContainer>
        <TableTitle>차량 제원 선택 항목 리스트</TableTitle>
        <CarListTable />
      </CarListTableContainer>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CarListTitle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-left: 1.9375rem;
  margin-bottom: 0.9375rem;
`;
const CarListTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.875rem;
`;
const TableTitle = styled.div`
  font-size: 1.1875rem;
  margin: auto;
  font-weight: bold;
`;
export default CarList;
