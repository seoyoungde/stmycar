import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import Pagination from "../../../Button/Pagination";

const PointManageTable = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "번호",
    "지급날짜",
    "회원명(ID)",
    "포인트적립내역",
    "적립예정 P",
    "사용가능 P",
    "사용한 P",
    "별도 지급/차감",
    "사유 및 기타사항",
  ];
  const data = [
    [
      1,
      "2024/05/02",
      "홍길동(abc)",
      "이용후기 등록",
      "+1000 P",
      "20,000 P",
      "-1000 P",
      "+1000 P",
      "오픈 이벤트 당첨",
    ],
    [
      1,
      "2024/05/02",
      "홍길동(abc)",
      "이용후기 등록",
      "+1000 P",
      "20,000 P",
      "-1000 P",
      "+1000 P",
      "오픈 이벤트 당첨",
    ],
    [
      1,
      "2024/05/02",
      "홍길동(abc)",
      "이용후기 등록",
      "+1000 P",
      "20,000 P",
      "-1000 P",
      "+1000 P",
      "오픈 이벤트 당첨",
    ],
  ];
  const headerStyles = css`
    border: 1px solid #cecece;
    padding: 0.5rem;
    text-align: center;
    color: white;
    font-size: 1rem;
    font-weight: normal;
    background-color: #646464;
    font-size: 0.875rem;
    white-space: pre-wrap;
  `;

  const cellStyles = css`
    border: 1px solid #cecece;
    padding: 0.5rem;
    text-align: center;
    font-size: 0.8125rem;
  `;
  const handleRowClick = (index: number) => {
    if (expandedRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
    }
  };
  const newData: any[][] = [];
  data.forEach((row, rowIndex) => {
    newData.push(row);

    if (expandedRow === rowIndex) {
      newData.push(["", "", "", "안녕"]);
    }
  });
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 3) {
      return (
        <div style={{ textDecoration: "underline", color: "#558ED5",cursor:"pointer" }}>
          이용후기 등록
        </div>
      );
    }
    return data;
  };
  return (
    <PageContainer>
      <Container>
        <Title>포인트 관리 List</Title>

        <Header>
          <HeaderText>∙ 총 5명, 1 / 1 페이지</HeaderText>
          <TableButton>
            <StyledButton>엑셀 다운로드</StyledButton>
          </TableButton>
        </Header>
        <Table
          headers={headers}
          data={newData}
          width="100%"
          headerStyles={headerStyles}
          cellStyles={cellStyles}
          onRowClick={handleRowClick}
          renderCell={renderCell}
        />
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
};

const HeaderText = styled.div`
  line-height: 2rem;
  font-size: 0.9375rem;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.4375rem;
`;

const TableButton = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.div`
  width: 6.8125rem;
  height: 2rem;
  background-color: #838383;
  border-radius: 0.375rem;
  color: white;
  text-align: center;
  line-height: 2rem;
  font-size: 0.9375rem;
  margin-left: 0.875rem;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.75rem;
  margin-bottom: 1.25rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.875rem;
`;
const Title = styled.div`
  font-size: 1.1875rem;
  margin: auto;
  font-weight: bold;
`;
export default PointManageTable;
