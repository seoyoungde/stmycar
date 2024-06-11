import React, { useState } from "react";
import styled from "@emotion/styled";
import RegisterTable from "./table/RegisterTable";
import Popup from "../../Popup/Popup";

const AdminRegister: React.FC = () => {
  const [isSmallPopupVisible, setIsSmallPopupVisible] = useState(false);
  const showSmallPopup = () => {
    setIsSmallPopupVisible(true);
  };

  const closeSmallPopup = () => {
    setIsSmallPopupVisible(false);
  };
  return (
    <PageContainer>
      <Title>∙ 관리자 등록</Title>
      <RegisterTable />
      <Box>
        <RegisterButton onClick={showSmallPopup}>등록</RegisterButton>
        {isSmallPopupVisible && (
          <Popup
            message="홍길동님 부 운영자로 등록이 완료 되었습니다"
            onClose={closeSmallPopup}
          />
        )}
        <CancelButton>취소</CancelButton>
      </Box>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-left: 1.9375rem;
  margin-bottom: 0.9375rem;
`;

const RegisterButton = styled.div`
  width: 4.5rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
  background-color: black;
  color: white;
  border-radius: 0.375rem;
  text-align: center;
  cursor:pointer;
`;

const CancelButton = styled.div`
  width: 4.5rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
  background-color: #838383;
  color: white;
  margin-left: 0.75rem;
  border-radius: 0.375rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  margin-top: 2.9375rem;
`;

export default AdminRegister;
