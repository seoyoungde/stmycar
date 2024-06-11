import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import { usePopup } from "../../../Popup/UsePopup";
import MemberSearchPopup from "../../../Popup/Nav2/MemberSearchPopup";
import Pagination from "../../../Button/Pagination";
import Popup from "../../../Popup/Popup";

const MemberSearchTable: React.FC = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const [isSmallPopupVisible ,setIsSmallPopup2Visible] =useState(false);
  const showSmallPopup = ()=>{
    setIsSmallPopup2Visible(true);
  };
  const closeSmallPopup = ()=>{
    setIsSmallPopup2Visible(false);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "번호",
    "이름",
    "성별",
    "아이디(이메일)",
    "사이트방문수",
    "회원가입일",
    "최종접속",
    "견적접수(누적)",
    "예약건수(누적)",
    "수리금액(누적)",
    "쿠폰",
    "적립금",
    "관리",
  ];
  const data = [
    [
      "1",
      "홍길동",
      "남",
      "Aassaed(asb@naver.com)",
      "275",
      "2015.05.15",
      "2024.03.25 11:28:30",
      "10회",
      "3회",
      "1,000,000원",
      "0장",
      "150P",
      "버튼",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 12) {
      return (
        <ButtonBox>
          <ModifyButton onClick={openPopup}>수정</ModifyButton>
          <DeleteButton onClick={showSmallPopup}>삭제</DeleteButton>
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
    font-weight: normal;
    background-color: #646464;
    font-size: 0.8rem;
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
        <Title>일반 회원 목록</Title>

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
        {isPopupVisible && <MemberSearchPopup onClose={closePopup} />}
        {isSmallPopupVisible && (
          <Popup
          message="정말로 삭제하시겠습니까?"
          onClose={closeSmallPopup}/>
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
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 6.875rem;
  margin: auto;
`;
const PageText = styled.div`
  font-size: 0.8125rem;
  line-height: 2rem;
`;
const ModifyButton = styled.button`
  width: 3.125rem;
  height: 1.625rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
  cursor:pointer;
`;
const DeleteButton = styled.button`
  width: 3.125rem;
  height: 1.625rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
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
export default MemberSearchTable;
