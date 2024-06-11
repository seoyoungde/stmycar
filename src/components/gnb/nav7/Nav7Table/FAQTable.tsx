import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import { usePopup } from "../../../Popup/UsePopup";
import FAQPopup from "../../../Popup/Nav7/FAQPopup";
import FAQPopup2 from "../../../Popup/Nav7/FAQPopup2";
import FAQPopup3 from "../../../Popup/Nav7/FAQPopup3";
import Pagination from "../../../Button/Pagination";
import Popup from "../../../Popup/Popup";

const FAQTable = () => {
  const [isSmallPopupVisible,setIsSmallPopupVisible]=useState(false);
  const showSmallPopup = ()=>{
    setIsSmallPopupVisible(true);
  };
  const closeSmallPopup = ()=>{
    setIsSmallPopupVisible(false);
  }
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const { isPopup2Visible, openPopup2, closePopup2 } = usePopup();
  const { isPopup3Visible, openPopup3, closePopup3 } = usePopup();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "번호",
    "분류",
    "작성일자",
    "자주하는 질문 제목",
    "노출구분",
    "조회수",
    "노출/수정/삭제/관리",
  ];
  const data = [
    [
      3,
      "회원가입",
      "2024/03/25 18:25",
      "매칭서비스 너무...",
      "일반회원",
      "1000회",
      "노출수정삭제",
    ],
    [
      2,
      "회원가입",
      "2024/03/25 18:25",
      "매칭서비스 너무...",
      "일반회원",
      "1000회",
      "노출수정삭제",
    ],
    [
      1,
      "회원가입",
      "2024/03/25 18:25",
      "매칭서비스 너무...",
      "일반회원",
      "1000회",
      "노출수정삭제",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 6) {
      return (
        <ButtonBox>
          <select defaultValue={data}>
            <option value="1">노출</option>
            <option value="2">비노출</option>
            <option value="2">노출대기</option>
          </select>
          <ModifyButton onClick={openPopup3}>수정</ModifyButton>
          <DeleteButton onClick={showSmallPopup}>삭제</DeleteButton>
        </ButtonBox>
      );
    }
    if (cellIndex === 3) {
      return (
        <div
          onClick={openPopup}
          style={{ textDecoration: "underline", color: "#558ED5",cursor:"pointer" }}
        >
          매칭서비스 너무...
        </div>
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
        <Title>자주하는 질문 목록</Title>

        <Header>
          <TableButton>
            <Text>∙ 총 5명, 1 / 1 페이지</Text>
            <StyledButton onClick={openPopup2}>신규 등록</StyledButton>
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
        {isPopupVisible && <FAQPopup onClose={closePopup} />}
        {isPopup3Visible && <FAQPopup2 onClose={closePopup3} />}
        {isPopup2Visible && <FAQPopup3 onClose={closePopup2} />}
        {isSmallPopupVisible && (
          <Popup
          message="정말 삭제하시겠습니까?"
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.875rem;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.75rem;
`;
const TableButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 72.9375rem;
`;
const Title = styled.div`
  font-size: 1.1875rem;
  margin: auto;
  font-weight: bold;
`;
const Text = styled.div`
  line-height: 2rem;
  font-size: 0.9375rem;
`;

const StyledButton = styled.button`
  width: 6.8125rem;
  height: 2rem;
  background-color: #558ed5;
  border: 0;
  border-radius: 0.375rem;
  color: white;
  text-align: center;
  font-size: 0.9375rem;
  margin-left: 0.875rem;
  cursor:pointer;
`;
const Header = styled.div`
  display: flex;
  margin-bottom: 0.4375rem;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 12rem;
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
export default FAQTable;
