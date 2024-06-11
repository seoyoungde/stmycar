import React from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";

interface SuggestPopupProps {
  onClose: () => void;
}
const formFields = [
  { label: "회원명(ID)", type: "text" },
  { label: "이메일", type: "text" },
  { label: "항목분류", type: "text" },
  { label: "제목", type: "text" },
  { label: "내용", type: "text" },
  { label: "대상공업사", type: "text" },
  { label: "등록일자", type: "text" },
  { label: "첨부파일", type: "text" },
];
const SuggestPopup: React.FC<SuggestPopupProps> = ({ onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>회원 등록 내용</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <Box>
          {formFields.map((field, index) => (
            <BoxRow key={index} isEven={index % 2 === 0}>
              <LabelCell>{field.label}</LabelCell>
              <InputCell width="17.5rem">
                {field.label === "회원명(ID)" && (
                  <TextBox>홍타박(ssafa)</TextBox>
                )}
                {field.label === "이메일" && (
                  <TextBox>
                    <ColorText>qkrtjdud09066@gail.com</ColorText>
                  </TextBox>
                )}
                {field.label === "항목분류" && <TextBox>개선</TextBox>}
                {field.label === "제목" && (
                  <TextBox>매칭서비스 개선 요망</TextBox>
                )}
                {field.label === "내용" && (
                  <TextBox>매칭서비스 개선 요망</TextBox>
                )}
                {field.label === "대상공업사" && (
                  <TextBox> 좀만 더 공업사</TextBox>
                )}
                {field.label === "등록일자" && (
                  <TextBox> 2024/03/25 18:25</TextBox>
                )}
                {field.label === "첨부파일" && (
                  <TextBox>
                    <ColorText>123.jpg</ColorText>
                  </TextBox>
                )}
              </InputCell>
            </BoxRow>
          ))}
        </Box>
      </PopupContainer>
    </Overlay>
  );
};
const ColorText = styled.div`
  color: #558ed5;
`;
const TextBox = styled.div`
  font-size: 0.8125rem;
  line-height: 1.4375rem;
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
  width: 28.125rem;
  height: 3.3125rem;
  background-color: black;
  color: white;
  margin: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin-bottom: 1.25rem;
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
export default SuggestPopup;
