import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import Pagination from "../../../Button/Pagination";
import { usePopup } from "../../../Popup/UsePopup";
import RepairCommentPopup from "../../../Popup/Nav5/RepairCommentPopup";

const RecentviewTable = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "번호",
    "수리정보\n등록일자",
    "국산/수입\n구분",
    "차종",
    "지역",
    "공업사",
    "제조사/모델/등급/기타항목",
    "사고구분",
    "사고부위",
    "최근댓글\n등록일자",
    "댓글수",
    "조회수",
  ];
  const data = [
    [
      3,
      "20240502",
      "국산차",
      "중형차",
      "경기",
      "모든수리",
      "기아/k5/가솔린1600CC/2.0력셔리",
      "사고수리",
      "앞범퍼",
      "20240905",
      "50건",
      "1000회",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 7) {
      return <RenderBox onClick={openPopup}>사고수리</RenderBox>;
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
        <Title>최근 본 사고 수리 정보 List</Title>

        <Header>
          <TableButton>
            <SortContainer>
              <Sort>정렬</Sort>
              <SortButton></SortButton>
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
        {isPopupVisible && <RepairCommentPopup onClose={closePopup} />}
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
};
const RenderBox = styled.div`
  text-decoration: underline;
  color: #558ed5;
  cursor:pointer;
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
const SortButton = styled.select`
  width: 7rem;
  height: 1.4375rem;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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

export default RecentviewTable;
