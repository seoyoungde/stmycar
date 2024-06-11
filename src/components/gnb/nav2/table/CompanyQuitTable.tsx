import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import Pagination from "../../../Button/Pagination";
import Popup from "../../../Popup/Popup";

const CompanyQuitTable: React.FC = () => {
  const [isSmallPopupVisible,setIsSmallPopupVisible]=useState(false);
  const showSmallPopup = ()=>{
    setIsSmallPopupVisible(true);
  };
  const closeSmallPopup = ()=>{
    setIsSmallPopupVisible(false);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "번호",
    "공업사명",
    "아이디",
    "구분",
    "대표자",
    "추천인",
    "단골회원수",
    "가입일",
    "탈퇴사유",
    "가견적",
    "실견적",
    "예약신청건",
    "수리완료건",
    "수리누적금액",
    "관리",
  ];
  const data = [
    [
      "1",
      "다수리",
      "Aassased",
      "1급공업사",
      "홍길동",
      "홍인도",
      "500",
      "2015.05.15",
      "매출이낮아요",
      "100",
      "90",
      "50",
      "50",
      "1,000,000,000원",
      "버튼",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 14) {
      return (
        <ButtonBox>
          <ModifyButton onClick={showSmallPopup}>보류</ModifyButton>
        </ButtonBox>
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
          <TableButton>
            <Text>∙ 총 5명, 1 / 1 페이지</Text>
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
        {isSmallPopupVisible && (
          <Popup
          message="보류 사유 -예약신청건수가 존재합니다"
          onClose={closeSmallPopup}
          ></Popup>
        )}
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
};
const Text = styled.div`
  line-height: 2rem;
  font-size: 0.9375rem;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const ModifyButton = styled.button`
  width: 3.125rem;
  height: 1.625rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
  margin: auto;
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
  justify-content: space-between;
  width: 72.9375rem;
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
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default CompanyQuitTable;
