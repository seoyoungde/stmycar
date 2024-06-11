import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import { usePopup } from "../../../Popup/UsePopup";
import RepairListPopup from "../../../Popup/Nav5/RepairListPopup";
import Pagination from "../../../Button/Pagination";

const RepairListTable: React.FC = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "선택",
    "번호",
    "수리완료\n일자",
    "국산/수입\n구분",
    "차종",
    "지역",
    "공업사",
    "제조사/모델/등급/기타항목",
    "사고구분",
    "사고부위",
    "정보노출",
    "이용후기\n등록여부",
    "최종확인",
  ];
  const data = [
    [
      "선택",
      3,
      "20240502",
      "국산차",
      "중형차",
      "경기",
      "모든수리",
      "기아/k5/가솔린1600CC/2.0력셔리",
      "사고수리",
      "앞범퍼",
      "1",
      "등록",
      "확인",
    ],
    [
      "선택",
      3,
      "20240502",
      "국산차",
      "중형차",
      "경기",
      "모든수리",
      "기아/k5/가솔린1600CC/2.0력셔리",
      "사고수리",
      "앞범퍼",
      "1",
      "등록",
      "확인",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 0) {
      return <input type="checkbox" defaultChecked={data === "선택"} />;
    }
    if (cellIndex === 10) {
      return (
        <select defaultValue={data}>
          <option value="1">노출</option>
          <option value="2">비노출</option>
        </select>
      );
    }
    if (cellIndex === 11) {
      return <PopupText onClick={openPopup}>등록</PopupText>;
    }
    if (cellIndex === 12) {
      return (
        <select defaultValue={data}>
          <option value="1">확인</option>
          <option value="2">확인중</option>
          <option value="3">미확인</option>
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
        <Title>사고 수리 완료 List</Title>

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
                  <option value="1">선택</option>
                  <option value="2">이름</option>
                  <option value="3">아이디</option>
                  <option value="3">이메일</option>
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
        {isPopupVisible && <RepairListPopup onClose={closePopup} />}
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
};
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
const PopupText = styled.div`
  text-decoration: underline;
  color: blue;
  cursor:pointer;
`;
const Header = styled.div`
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
export default RepairListTable;
