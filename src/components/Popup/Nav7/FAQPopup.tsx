import React from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
interface FAQPopupProps {
  onClose: () => void;
}
const formFields = [
  { label: "제목", type: "text" },
  { label: "등록일자", type: "text" },
  { label: "노출구분", type: "text" },
  { label: "분류항목", type: "text" },
  { label: "공지내용", type: "text" },
  { label: "첨부파일", type: "text" },
];
const FAQPopup: React.FC<FAQPopupProps> = ({ onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>자주하는 질문 상세 내용</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <Section>
          <Box>
            {formFields.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell>
                  {field.label === "제목" && <TextBox>자주하는질문</TextBox>}
                  {field.label === "등록일자" && (
                    <TextBox>2024/03/25 18:25</TextBox>
                  )}
                  {field.label === "노출구분" && <TextBox>전체회원</TextBox>}
                  {field.label === "분류항목" && (
                    <TextBox>[긴급공지]서비스개선 공지합니다</TextBox>
                  )}
                  {field.label === "공지내용" && (
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        lineHeight: "6.875rem",
                        width: "20.625rem",
                        height: "6.875rem",
                      }}
                    >
                      ㄴㅇㄹㄴㅇㄹ
                    </div>
                  )}
                  {field.label === "첨부파일" && (
                    <TextBox>첨부파일 없음</TextBox>
                  )}
                </InputCell>
              </BoxRow>
            ))}
          </Box>
        </Section>
      </PopupContainer>
    </Overlay>
  );
};
const TextBox = styled.div`
  font-size: 0.8125rem;
  line-height: 1.4375rem;
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
const Title = styled.div`
  font-size: 1.0625rem;
  font-weight: bold;
  line-height: 3.3125rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 29.375rem;
  margin-bottom: 0.625rem;
`;
export default FAQPopup;
