import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import { usePopup } from "../../../Popup/UsePopup";
import CenterMemberPopup from "../../../Popup/Nav2/CenterMemberPopup";
import CenterMemberInputPopup from "../../../Popup/Nav2/CenterMemberInputPopup";
import Pagination from "../../../Button/Pagination";
import Popup from "../../../Popup/Popup";

const CenterMemberTable: React.FC = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const { isPopup2Visible, openPopup2, closePopup2 } = usePopup();
  const [isSmallPopupVisible ,setIsSmallPopupVisible]=useState(false);
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
    "공업사명",
    "아이디",
    "구분",
    "대표자",
    "나이",
    "추천인",
    "단골회원수",
    "가입일",
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
      "55",
      "홍인도",
      "500",
      "2015.05.15",
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
      <Cotainer>
        <Title>제휴 공업사회원 목록</Title>

        <Header>
          <Button>
            <PageText>∙ 총 129명,1/12 페이지</PageText>
            <ButtonBox>
              <RegistrationButton onClick={openPopup}>
                신규등록
              </RegistrationButton>
              <StyledButton>엑셀 다운로드</StyledButton>
            </ButtonBox>
          </Button>
        </Header>
        <Table
          headers={headers}
          data={data}
          width="100%"
          headerStyles={headerStyles}
          cellStyles={cellStyles}
          renderCell={renderCell}
        />
        {isPopupVisible && <CenterMemberInputPopup onClose={closePopup} />}
        {isPopup2Visible && <CenterMemberPopup onClose={closePopup2} />}
        {isSmallPopupVisible && (
          <Popup
          message="정말로 삭제하시겠습니까?"
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
const ButtonBox = styled.div``;
const PageText = styled.div`
  font-size: 0.8125rem;
  line-height: 2rem;
`;
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

const ModifyButton = styled.button`
  width: 3.125rem;
  height: 1.625rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
  margin-right: 0.3125rem;
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

const Button = styled.div`
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
const Cotainer = styled.div`
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

export default CenterMemberTable;
