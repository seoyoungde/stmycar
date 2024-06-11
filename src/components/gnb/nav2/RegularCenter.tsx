import React from "react";
import styled from "@emotion/styled";
import RegularCenterBox from "./box/RegularCenterBox";
import RegularCenterTable from "./table/RegularCenterTable";

const RegularCenter = () => {
  return (
    <PageContainer>
      <RegularCenterTitle>∙ 단골공업사 검색</RegularCenterTitle>
      <RegularCenterBox />

      <RegularCenterTable />
    </PageContainer>
  );
};
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const RegularCenterTitle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-left: 1.9375rem;
  margin-bottom: 0.9375rem;
`;

const RegularCenterNumTitle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-left: 1.9375rem;
  margin-bottom: 0.9375rem;
`;
const TableTitle = styled.div`
  font-size: 1.1875rem;
  margin: auto;
  font-weight: bold;
`;
export default RegularCenter;
