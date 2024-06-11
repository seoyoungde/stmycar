import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import { usePopup } from "../../../Popup/UsePopup";
import SaleCouponManagePopup from "../../../Popup/Nav6/SaleCouponManagePopup";
import SaleCouponManagePopup2 from "../../../Popup/Nav6/SaleCouponManagePopup2";
import Pagination from "../../../Button/Pagination";
import Popup from "../../../Popup/Popup";

const SaleCouponManageTable = () => {
  const [isSmallPopupVisible,setIsSmallPopupVisible]=useState(false);
  const showSmallPopup =()=>{
    setIsSmallPopupVisible(true);
  };
  const closeSmallPopup = ()=>{
    setIsSmallPopupVisible(false);
  }
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const { isPopup2Visible, openPopup2, closePopup2 } = usePopup();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "구분",
    "발행일시",
    "쿠폰제목",
    "운영기간",
    "남은일수",
    "할인권종",
    "진행상태",
    "정보변경",
  ];
  const data = [
    [
      "단독발행쿠폰",
      "2024/02/10",
      "3월 방문 고객 이벤트",
      "2024/01/01~06/30",
      "15일",
      "5000 원권",
      "진행중",
      "수정삭제",
    ],
    [
      "단독발행쿠폰",
      "2024/02/10",
      "3월 방문 고객 이벤트",
      "2024/01/01~06/30",
      "15일",
      "5000 원권",
      "진행중",
      "수정삭제",
    ],
    [
      "단독발행쿠폰",
      "2024/02/10",
      "3월 방문 고객 이벤트",
      "2024/01/01~06/30",
      "15일",
      "5000 원권",
      "진행중",
      "수정삭제",
    ],
  ];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 6) {
      return (
        <select defaultValue={data}>
          <option value="1">진행중</option>
          <option value="2">진행완료</option>
          <option value="2">진행예정</option>
        </select>
      );
    }
    if (cellIndex === 7) {
      return (
        <ButtonBox>
          <ModifyButton onClick={openPopup2}>수정</ModifyButton>
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
        <Title>할인 쿠폰 사용 목록</Title>

        <Header>
          <TableButton>
            <RegistrationButton onClick={openPopup}>
              할인쿠폰등록
            </RegistrationButton>
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
        {isPopupVisible && <SaleCouponManagePopup onClose={closePopup} />}
        {isPopup2Visible && <SaleCouponManagePopup2 onClose={closePopup2} />}
        {isSmallPopupVisible && (
          <Popup
          message="정말로 삭제하시겠습니까?"
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
const RegistrationButton = styled.button`
  width: 6.8125rem;
  height: 2rem;
  background-color: #1598d0;
  border-radius: 0.375rem;
  color: white;
  text-align: center;
  border: 0;
  line-height: 2rem;
  font-size: 0.9375rem;
  margin-left: 0.875rem;
  cursor:pointer;
`;
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
  margin-top: 4.875rem;
`;
const Title = styled.div`
  font-size: 1.1875rem;
  margin: auto;
  font-weight: bold;
`;
export default SaleCouponManageTable;
