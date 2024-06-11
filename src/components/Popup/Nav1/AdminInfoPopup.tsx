import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import Popup from "../Popup";

interface AdminInfoPopupProps {
  onClose: () => void;
}

const AdminInfoPopup: React.FC<AdminInfoPopupProps> = ({ onClose }) => {
  const [isSmallPopupVisible, setIsSmallPopupVisible] = useState(false);
  const showSmallPopup = () => {
    setIsSmallPopupVisible(true);
  };

  const closeSmallPopup = () => {
    setIsSmallPopupVisible(false);
  };
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>비밀번호 변경</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <Box width="30.375rem">
          <BoxRow>
            <LabelCell>회원아이디</LabelCell>
            <InputCell height="1.875rem">Aassas(마스터)</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>새 비밀번호</LabelCell>
            <InputCell height="1.875rem">
              <Input />
            </InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>비밀번호 확인</LabelCell>
            <InputCell height="1.875rem">
              <Input />
            </InputCell>
          </BoxRow>
        </Box>
        <SaveButton onClick={showSmallPopup}>저장</SaveButton>
        {isSmallPopupVisible && (
          <Popup
            message="비밀번호 변경이 완료되었습니다"
            onClose={closeSmallPopup}
          />
        )}
      </PopupContainer>
    </Overlay>
  );
};
const SaveButton = styled.button`
  width: 4.5rem;
  height: 2rem;
  background-color: black;
  color: white;
  border-radius: 0.375rem;
  margin-left: 12.5rem;
  margin-top: 1.25rem;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-35%, -50%);
  padding: 0.625rem;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
const CloseButton = styled.button`
  background: #838383;
  color: white;
  line-height: 1.5rem;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  width: 3.375rem;
  height: 1.5rem;
  margin-top: 0.875rem;
`;
const Title = styled.div`
  font-size: 1.0625rem;
  font-weight: bold;
  line-height: 3.3125rem;
`;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 29.1875rem;
  height: 3.3125rem;
  background-color: black;
  color: white;
  margin: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin-bottom: 1.25rem;
`;
const Input = styled.input`
  height: 1.4375rem;
  width: 12.6875rem;
  border-radius: 0;
  border: 1px solid black;
`;
export default AdminInfoPopup;
