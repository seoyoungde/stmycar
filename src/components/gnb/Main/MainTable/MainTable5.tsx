import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import MainTable from "../../../Table/MainTable";
import { useNavigate } from "react-router-dom";

const MainTable5 = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/nav5");
  };
  const navigateTo2 = () => {
    navigate("/nav2");
  };
  const headers = [
    "전체 누적 최근 본 사례",
    "일간 최근 본 사례",
    "주간 최근 본 사례",
    "월간 최근 본 사례",
  ];
  const data = [["0건", "0건", "0건", "0건"]];
  const headers2 = [
    "전체 누적 단골 등록",
    "일간 단골등록",
    "주간 단골등록",
    "월간 단골등록",
  ];
  const data2 = [["0건", "0건", "0건", "0건"]];

  const customHeaderStyles = css`
    background-color: #efefef;
    color: #333;
    font-size: 0.875rem;
    border-top: 0;
    height: 1.25rem;
  `;

  const customCellStyles = css`
    padding: 0.5rem;
    font-size: 0.8125rem;
  `;
  return (
    <Table2Container>
      <div style={{ marginTop: "1.625rem" }}>
        <Header>
          <Title> ∙ 전체 최근 본 사례 현황</Title>
          <NavLink onClick={navigateTo}>+ 더보기</NavLink>
        </Header>

        <MainTable
          headers={headers}
          data={data}
          width="31.25rem"
          headerStyles={customHeaderStyles}
          cellStyles={customCellStyles}
        />
      </div>
      <div style={{ marginTop: "1.625rem" }}>
        <Header>
          <Title>∙ 전체 단골 등록 현황</Title>
          <NavLink onClick={navigateTo2}>+ 더보기</NavLink>
        </Header>

        <MainTable
          headers={headers2}
          data={data2}
          width="31.25rem"
          headerStyles={customHeaderStyles}
          cellStyles={customCellStyles}
        />
      </div>
    </Table2Container>
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
const Table2Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 72.9375rem;
  margin-left: 1.75rem;
`;
export default MainTable5;
