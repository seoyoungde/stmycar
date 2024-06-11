import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import Pagination from "../../../Button/Pagination";

const CarListTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "선택",
    "번호",
    "등록일자",
    "차량제원분류\n(생산지/제조사/모델)",
    "차량제원분류\n(상세등급/연식/색상/기타옵션)",
    "노출여부",
  ];
  const data = [
    [
      "선택",
      "1",
      "2024/12/25 15:25",
      "*국산차 > 현대 > 그랜저",
      "프리미엄 > 2023년식 > 검정색 > 가솔린+전기오토 > 내비게이션,후방카메라,스마트키",
      "노출",
    ],
    [
      "선택",
      "1",
      "2024/12/25 15:25",
      "*국산차 > 현대 > 그랜저",
      "프리미엄 > 2023년식 > 검정색 > 가솔린+전기오토 > 내비게이션,후방카메라,스마트키",
      "노출",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 0) {
      return <input type="checkbox" defaultChecked={data === "선택"} />;
    }
    if (cellIndex === 12) {
      return (
        <select defaultValue={data}>
          <option value="1">노출</option>
          <option value="2">비노출</option>
        </select>
      );
    }
    return data;
  };
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
  return (
    <PageContainer>
      <Container>
        <Header>
          <ListText>
            <input type="checkbox" />
            전체선택 1/1 페이지
          </ListText>

          <TableButton>
            <SortContainer>
              <Sort>정렬</Sort>
              <SortButton>
                <select
                  style={{
                    width: "7rem",
                    height: "1.4375rem",
                    borderRadius: "0",
                  }}
                >
                  <option value="1">제조사</option>
                  <option value="2">모델</option>
                  <option value="3">날짜순</option>
                  <option value="4">가나다순</option>
                  <option value="5">연식</option>
                  <option value="6">색상</option>
                </select>
              </SortButton>
            </SortContainer>
            <StyledButton>엑셀 다운로드</StyledButton>
          </TableButton>
        </Header>
        <Table
          headers={headers}
          data={data}
          width="100%"
          headerStyles={headerStyles}
          cellStyles={cellStyles}
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

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.75rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 72.8125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.4375rem;
`;
const ListText = styled.div`
  line-height: 2rem;
  font-size: 0.9375rem;
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

const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;
const Sort = styled.a`
  font-size: 0.875rem;
  line-height: 1.4375rem;
  margin-right: 0.25rem;
`;
const SortButton = styled.div`
  width: 7rem;
  height: 1.4375rem;
`;
export default CarListTable;
