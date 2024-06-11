import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import MainTable from "../../../Table/MainTable";
import { useNavigate } from "react-router-dom";

const MainTable3 = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/nav5");
  };
  const headers = [
    "전체 누적\n사전 견적 건",
    "전체 누적\n입고예약 건",
    "전체 누적\n수리 중 진행",
    "전체 누적\n수리완료 건",
  ];
  const headers2 = [
    "일간",
    "주간",
    "월간",
    "일간",
    "주간",
    "월간",
    "일간",
    "주간",
    "월간",
    "일간",
    "주간",
    "월간",
  ];
  const data = [["100,0000건", "0건", "0건", "0건"]];
  const data2 = [
    [
      "100건",
      "1,000건",
      "5,000건",
      "100건",
      "1,000건",
      "5,000건",
      "100건",
      "1,000건",
      "5,000건",
      "100건",
      "1,000건",
      "5,000건",
    ],
  ];
  const customHeaderStyles = css`
    background-color: #efefef;
    color: #333;
    font-size: 0.875rem;
    border-top: 0;
    width: 9.375rem;
    height: 1.25rem;
  `;

  const customCellStyles = css`
    padding: 0.5rem;
    font-size: 0.8125rem;
  `;
  const customHeaderStyles2 = css`
    background-color: #efefef;
    color: #333;
    font-size: 0.875rem;
    border-top: 0;
    width: 5rem;
    height: 1.25rem;
  `;

  const customCellStyles2 = css`
    padding: 0.5rem;
    font-size: 0.8125rem;
  `;
  return (
    <div style={{ marginLeft: "1.75rem", marginTop: "1.9375rem" }}>
      <Header>
        <Title>∙ 전체 사고수리 견적 / 입고 / 수리중 / 수리완료 현황</Title>
        <NavLink onClick={navigateTo}>+ 더보기</NavLink>
      </Header>

      <MainTable
        headers={headers}
        data={data}
        width="72.9375rem"
        headerStyles={customHeaderStyles}
        cellStyles={customCellStyles}
      />

      <MainTable
        headers={headers2}
        data={data2}
        width="72.9375rem"
        headerStyles={customHeaderStyles2}
        cellStyles={customCellStyles2}
      />
      <Line></Line>
    </div>
  );
};
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 1.0625rem;
  margin-bottom: 1.3125rem;
`;
const NavLink = styled.button`
  font-size: 14px;
  cursor: pointer;
  border: 0;
  background: transparent;
`;
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-top: 0.625rem;
  width: 72.9375rem;
`;
export default MainTable3;
