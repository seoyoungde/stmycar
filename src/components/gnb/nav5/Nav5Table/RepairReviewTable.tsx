import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import Pagination from "../../../Button/Pagination";
import { usePopup } from "../../../Popup/UsePopup";
import RepairCommentPopup from "../../../Popup/Nav5/RepairCommentPopup";

const RepairReviewTable = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "선택",
    "번호",
    "수리정보\n등록일자",
    "국산/수입\n구분",
    "차종",
    "지역",
    "공업사",
    "제조사/모델/등급/기타항목",
    "사고구분",
    "사고부위",
    "회원ID\n(회원명)",
    "보유포인트",
    "정보노출",
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
      "Asb[홍길동]",
      "10,000P",
      "노출",
    ],
  ];

  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 0) {
      return <input type="checkbox" defaultChecked={data === "선택"} />;
    }
    if (cellIndex === 10) {
      return (
        <div
          onClick={openPopup}
          style={{ textDecoration: "underline", color: "#558ED5",cursor:"pointer" }}
        >
          Asb[홍길동]
        </div>
      );
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
        <Title>이용 후기 등록 정보 List</Title>

        <Header>
          <ListText>
            <input type="checkbox" />
            전체선택 1/1 페이지
          </ListText>

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
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {isPopupVisible && <RepairCommentPopup onClose={closePopup} />}
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
const SortButton = styled.select`
  width: 7rem;
  height: 1.4375rem;
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
export default RepairReviewTable;
