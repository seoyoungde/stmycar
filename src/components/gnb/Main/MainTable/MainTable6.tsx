import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import MainTable from "../../../Table/MainTable";
import { useNavigate } from "react-router-dom";

const MainTable6 = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/nav7");
  };
  const navigateTo2 = () => {
    navigate("/nav7");
  };
  const headers = [
    "전체 누적\n1:1문의",
    "일간 1:1 문의",
    "주간 1:1 문의",
    "월간 1:1 문의",
  ];
  const data = [["0건", "0건", "0건", "0건"]];
  const headers3 = ["전체 누적\n1:1답변", "답변 대기", "답변 완료", ""];
  const data3 = [["0건", "0건", "0건", ""]];
  const headers2 = [
    "전체 누적 신고댓글",
    "일간 신고",
    "주간 신고",
    "월간 신고",
  ];
  const data2 = [["0건", "0건", "0건", "0건"]];
  const headers4 = [
    "전체 누적\n신고등록",
    "신고 내용\n확인 중",
    "신고 내용\n답변 대기",
    "신고\n답변완료",
  ];
  const data4 = [["0건", "0건", "0건", "0건"]];
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
          <Title> ∙ 전체 1:1 문의 등록 및 답변 현황</Title>
          <NavLink onClick={navigateTo}>+ 더보기</NavLink>
        </Header>
        <MainTable
          headers={headers}
          data={data}
          width="31.25rem"
          headerStyles={customHeaderStyles}
          cellStyles={customCellStyles}
        />
        <MainTable
          headers={headers3}
          data={data3}
          width="31.25rem"
          headerStyles={customHeaderStyles}
          cellStyles={customCellStyles}
        />
      </div>
      <div style={{ marginTop: "1.625rem" }}>
        <Header>
          <Title>∙ 전체 신고 등록 및 답변 현황</Title>
          <NavLink onClick={navigateTo2}>+ 더보기</NavLink>
        </Header>

        <MainTable
          headers={headers2}
          data={data2}
          width="31.25rem"
          headerStyles={customHeaderStyles}
          cellStyles={customCellStyles}
        />
        <MainTable
          headers={headers4}
          data={data4}
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
export default MainTable6;
