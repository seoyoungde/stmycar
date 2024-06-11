import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import MainTable from "../../../Table/MainTable";
import { useNavigate } from "react-router-dom";

const MainTable2 = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/nav1");
  };
  const navigateTo2 = () => {
    navigate("/nav2");
  };
  const headers = ["이용후기", "댓글", "개선/제안/칭찬", "최근 본 사례"];
  const data = [["0건", "0건", "0건", "0건"]];
  const headers2 = [
    "전체 누적\n제휴공업사",
    "일간 제휴 건",
    "주간 제휴 건",
    "월간 제휴 건",
  ];
  const data2 = [["1000곳", "5곳", "30곳", "100곳"]];

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
          <Title>∙ 전체 회원 가입 / 탈퇴 현황</Title>
          <NavLink onClick={navigateTo}>+ 더보기</NavLink>
        </Header>
        <MainTable
          headers={headers}
          data={data}
          width="28.5rem"
          headerStyles={customHeaderStyles}
          cellStyles={customCellStyles}
        />
      </div>
      <div style={{ marginTop: "1.625rem" }}>
        <Header>
          <Title>∙ 전체 제휴 공업사 현황</Title>
          <NavLink onClick={navigateTo2}>+ 더보기</NavLink>
        </Header>
        <MainTable
          headers={headers2}
          data={data2}
          width="35rem"
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
export default MainTable2;
