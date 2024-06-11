import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import { usePopup } from "../../../Popup/UsePopup";
import OnebyonePopup from "../../../Popup/Nav7/OnebyonePopup";
import OnebyonePopup2 from "../../../Popup/Nav7/OnebyonePopup2";
import OnebyonePopup3 from "../../../Popup/Nav7/OnebyonePopup3";
import OnebyonePopup4 from "../../../Popup/Nav7/OnebyonePopup4";
import Pagination from "../../../Button/Pagination";

const OnebyoneTable = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const { isPopup2Visible, openPopup2, closePopup2 } = usePopup();
  const { isPopup3Visible, openPopup3, closePopup3 } = usePopup();
  const { isPopup4Visible, openPopup4, closePopup4 } = usePopup();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const headers = [
    "선택",
    "번호",
    "이용공업사",
    "회원명",
    "회원아이디",
    "등록일자",
    "문의내용",
    "답변일자",
    "답변내용",
    "고객만족도",
    "답변여부",
  ];
  const data = [
    [
      "선택",
      2,
      "송도점",
      "홍길순",
      "asdafad",
      "2024/05/02 18:25",
      "매장서비스 너무...",
      "2024/05/02 18:25",
      "[내용보기]",
      "[만족]",
      "[답변완료]",
    ],
    [
      "선택",
      1,
      "송도점",
      "홍길순",
      "asdafad",
      "2024/05/02 18:25",
      "매장서비스 너무...",
      "2024/05/02 18:25",
      "[내용보기]",
      "[만족]",
      "[답변완료]",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 0) {
      return <input type="checkbox" defaultChecked={data === "선택"} />;
    }
    if (cellIndex === 9) {
      return (
        <div
          onClick={openPopup}
          style={{ textDecoration: "underline", color: "#558ED5",cursor:"pointer" }}
        >

          [만족]
        </div>
      );
    }
    if (cellIndex === 10) {
      return (
        <div
          onClick={openPopup3}
          style={{ textDecoration: "underline", color: "#558ED5",cursor:"pointer" }}
        >

          [답변완료]
        </div>
      );
    }
    if (cellIndex === 6) {
      return (
        <div
          onClick={openPopup2}
          style={{ textDecoration: "underline", color: "#558ED5",cursor:"pointer" }}
        >
          매장서비스 너무...
        </div>
      );
    }
    if (cellIndex === 8) {
      return (
        <div
          onClick={openPopup4}
          style={{ textDecoration: "underline", color: "#558ED5" ,cursor:"pointer"}}
        >
          [내용보기]
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
        <Title>1:1 문의 목록 리스트</Title>

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
                    width: "7rem",
                    height: "1.4375rem",
                    borderRadius: "0",
                  }}
                >
                  <option value="1"></option>
                  <option value="2">최근 등록일자순</option>
                  <option value="3">최근 답변일자순</option>
                  <option value="4">답변완료순</option>
                  <option value="5">답변대기순</option>
                  <option value="6">고객만족도순</option>
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
        {isPopupVisible && <OnebyonePopup onClose={closePopup} />}
        {isPopup2Visible && <OnebyonePopup2 onClose={closePopup2} />}
        {isPopup3Visible && <OnebyonePopup3 onClose={closePopup3} />}
        {isPopup4Visible && <OnebyonePopup4 onClose={closePopup4} />}
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
export default OnebyoneTable;
