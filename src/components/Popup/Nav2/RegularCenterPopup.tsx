import React from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";

interface RegularCenterPopupProps {
  onClose: () => void;
}

const RegularCenterPopup: React.FC<RegularCenterPopupProps> = ({ onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>∙ 메모하실 내용을 기재해 주세요 (50자 이내)</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <Box width="32rem">
          <Input />
        </Box>
        <ButtonBox>
          <Button>저장</Button>
        </ButtonBox>
      </PopupContainer>
    </Overlay>
  );
};

const ButtonBox = styled.div`
  width: 3.75rem;
  height: 1.875rem;
  margin: auto;
`;
const Button = styled.button`
  width: 3.75rem;
  height: 1.875rem;
  font-size: 0.875rem;
  border: 0;
  background-color: black;
  color: white;
  border-radius: 0.25rem;
  font-weight: bold;
  margin-top: 0.3125rem;
`;
const Input = styled.input`
  width: 32rem;
  height: 16.125rem;
  margin-left: 1.25rem;
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
  width: 33.5625rem;
  height: 3.3125rem;
  margin: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
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
  transform: translate(-41%, -50%);
  padding: 0.625rem;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
export default RegularCenterPopup;
