import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import Pagination from "../../../Button/Pagination";
import Popup from "../../../Popup/Popup";

const MemberQuitTable: React.FC = () => {
  const [isSmallPopupVisible,setIsSmallPopupVisible]=useState(false);
  const showSmallPopup = ()=>{
    setIsSmallPopupVisible(true);
  };
  const closeSmallPopup = ()=>{
    setIsSmallPopupVisible(false);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "번호",
    "이름",
    "아이디",
    "가입일",
    "탈퇴일",
    "탈퇴사유",
    "방문횟수",
    "견적접수",
    "예약건수",
    "수리금액",
    "할인쿠폰",
    "포인트",
    "탈퇴승인",
  ];
  const data = [
    [
      "1",
      "홍길동",
      "Aassased",
      "2015.05.15",
      "2015.05.15",
      "수리비용이 비싸다",
      "275",
      "10회",
      "10회",
      "1,000,000원",
      "0장",
      "100P",
      "버튼",
    ],
  ];

  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 12) {
      return (
        <ButtonBox>
          <ModifyButton onClick={showSmallPopup}>탈퇴</ModifyButton>
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
      <Cotainer>
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
          message="최종 탈퇴처리 하시겠습니까?"
          onClose={closeSmallPopup}
          ></Popup>
        )}
      </Cotainer>
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
const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MemberQuitTable;
