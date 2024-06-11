import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import { usePopup } from "../../../Popup/UsePopup";
import EventManagePopup from "../../../Popup/Nav6/EventManagePopup";
import EventManagePopup2 from "../../../Popup/Nav6/EventManagePopup2";
import Pagination from "../../../Button/Pagination";

const EventManageTable = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const { isPopup2Visible, openPopup2, closePopup2 } = usePopup();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "이벤트주체",
    "이벤트유형",
    "등록일시",
    "이벤트제목",
    "운용기간",
    "적용대상",
    "남은일수",
    "할인금액\n(권종)",
    "진행상태",
    "정보변경",
  ];
  const data = [
    [
      "일급마이카",
      "신규회원가입유치",
      "2024/05/02",
      "2월 한달동안 신규회원",
      "2024/01/01~06/30",
      "누구나",
      "15일",
      "5000 원권",
      "진행중",
      "수정삭제",
    ],
    [
      "일급마이카",
      "신규회원가입유치",
      "2024/05/02",
      "2월 한달동안 신규회원",
      "2024/01/01~06/30",
      "누구나",
      "15일",
      "5000 원권",
      "진행중",
      "수정삭제",
    ],
  ];

  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 8) {
      return (
        <select defaultValue={data}>
          <option value="1">진행중</option>
          <option value="2">진행완료</option>
          <option value="2">진행예정</option>
        </select>
      );
    }
    if (cellIndex === 9) {
      return (
        <ButtonBox>
          <ModifyButton onClick={openPopup}>수정</ModifyButton>
          <DeleteButton onClick={openPopup2}>삭제</DeleteButton>
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
        <Title>이벤트 목록 관리</Title>
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
        {isPopupVisible && <EventManagePopup onClose={closePopup} />}
        {isPopup2Visible && <EventManagePopup2 onClose={closePopup2} />}
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

const StyledButton = styled.button`
  width: 6.8125rem;
  height: 2rem;
  background-color: #838383;
  border-radius: 0.375rem;
  border: 0;
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
  margin-top: 4.875rem;
`;
const Title = styled.div`
  font-size: 1.1875rem;
  margin: auto;
  font-weight: bold;
`;
export default EventManageTable;
