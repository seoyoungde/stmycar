import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import { usePopup } from "../../../Popup/UsePopup";
import RegularCenterPopup from "../../../Popup/Nav2/RegularCenterPopup";
import Pagination from "../../../Button/Pagination";

const RegularCenterTable: React.FC = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "번호",
    "회원명",
    "아이디",
    "단골등록일",
    "단골공업사(지역)",
    "수리횟수(누적)",
    "수리금액(누적)",
    "단골회원수",
    "평균평점",
    "공업사 관리 주의사항",
  ];
  const data = [
    [
      "1",
      "다수리",
      "Aassassed",
      "2022/25/15",
      "다고쳐공업사(인천)",
      "100회",
      "500,000,000원",
      "80명",
      "4.5/5",
      "영업부장이 총괄...",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 9) {
      return <MemoButton onClick={openPopup}>영업부장이 총괄...</MemoButton>;
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
        <Title>단골 공업사 목록 List</Title>

        <Header>
          <TableButton>
            <PageText>∙ 총 129명,1/12 페이지</PageText>
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
        {isPopupVisible && <RegularCenterPopup onClose={closePopup} />}
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
};

const PageText = styled.div`
  font-size: 0.8125rem;
  line-height: 2rem;
`;
const MemoButton = styled.a`
  text-decoration: underline;
  color: blue;
  cursor:pointer;
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
  width: 72.9375rem;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  width: 6.8125rem;
  height: 2rem;
  background-color: #838383;
  border-radius: 0.375rem;
  color: white;
  text-align: center;
  line-height: 2rem;
  font-size: 0.9375rem;
  margin-left: 0.875rem;
  border: 0;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.875rem;
  margin-left: 1.75rem;
`;
const Title = styled.div`
  font-size: 1.1875rem;
  margin: auto;
  font-weight: bold;
`;
export default RegularCenterTable;
