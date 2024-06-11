import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import { usePopup } from "../../../Popup/UsePopup";
import ComplainPopup from "../../../Popup/Nav7/ComplainPopup";
import ComplainPopup2 from "../../../Popup/Nav7/ComplainPopup2";
import ComplainPopup3 from "../../../Popup/Nav7/ComplainPopup3";
import Pagination from "../../../Button/Pagination";

const ComplainTable = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const { isPopup2Visible, openPopup2, closePopup2 } = usePopup();
  const { isPopup3Visible, openPopup3, closePopup3 } = usePopup();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "선택",
    "회원명(ID)",
    "신고등록일",
    "신고내용",
    "신고대상",
    "지역",
    "답변내용",
    "사실확인",
    "처리일자",
    "최종처리상태",
  ];
  const data = [
    [
      "선택",
      "홍길수(adaf)",
      "2022/12/25 18:25",
      "서비스 너무...",
      "못고쳐공업사",
      "인천",
      "답변미등록",
      "확인 중",
      "2024/06/08 18:25",
      "확인 중",
    ],
    [
      "선택",
      "홍길수(adaf)",
      "2022/12/25 18:25",
      "서비스 너무...",
      "못고쳐공업사",
      "인천",
      "답변미등록",
      "확인 중",
      "2024/06/08 18:25",
      "확인 중",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 0) {
      return <input type="checkbox" defaultChecked={data === "선택"} />;
    }
    if (cellIndex === 3) {
      return (
        <div
          onClick={openPopup}
          style={{ textDecoration: "underline", color: "#558ED5",cursor:"pointer" }}
        >
          서비스 너무...
        </div>
      );
    }
    if (cellIndex === 6) {
      return (
        <div
          onClick={openPopup2}
          style={{ textDecoration: "underline", color: "#558ED5",cursor:"pointer" }}
        >
          답변미등록
        </div>
      );
    }
    if (cellIndex === 9) {
      return (
        <div
          onClick={openPopup3}
          style={{ textDecoration: "underline", color: "#558ED5",cursor:"pointer" }}
        >
          확인 중
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
        <Title>신고목록</Title>

        <Header>
          <ListText>
            <input type="checkbox" />
            전체선택 총129건, 1/1 페이지
          </ListText>

          <TableButton>
            <SortContainer>
              <Sort>정렬</Sort>
              <SortButton>
                <select
                  style={{
                    width: "8.125rem",
                    height: "1.4375rem",
                    borderRadius: "0",
                  }}
                >
                  <option value="1"></option>
                  <option value="2">최근 신고등록일순</option>
                  <option value="3">최근 처리일자순</option>
                  <option value="4">확인대기</option>
                  <option value="5">확인중</option>
                  <option value="6">처리완료</option>
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
        {isPopupVisible && <ComplainPopup onClose={closePopup} />}
        {isPopup2Visible && <ComplainPopup3 onClose={closePopup2} />}
        {isPopup3Visible && <ComplainPopup2 onClose={closePopup3} />}
      </Container>
      <ChangeSection>
        <ChangeBox>
          <ChangeTitle>상태변경</ChangeTitle>
          <select style={{ width: "7rem", height: "1.4375rem", margin: "auto" }}>
            <option value="1">확인대기</option>
            <option value="2">확인 중</option>
            <option value="2">확인완료</option>
          </select>
          <ChangeButton>변경</ChangeButton>
        </ChangeBox>
      </ChangeSection>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
};
const ChangeButton = styled.button`
  width: 3.125rem;
  height: 1.625rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
  margin: auto;
`;
const ChangeSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 72.9375rem;
  margin-top: 0.625rem;
`;
const ChangeBox = styled.div`
  width: 17rem;
  height: 2.375rem;
  background-color: #efefef;
  display: flex;
  flex-direction: row;
  line-height: 2.375rem;
`;
const ChangeTitle = styled.div`
  font-size: 0.8125rem;
  margin-right: 2rem;
  margin-left: 1.0625rem;
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
  width: 8.125rem;
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
export default ComplainTable;
