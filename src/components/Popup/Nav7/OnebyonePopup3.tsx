import React from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";

interface OnebyonePopup3Props {
  onClose: () => void;
}
const formFields = [
  { label: "회원명(ID)", type: "text" },
  { label: "이메일", type: "text" },
  { label: "항목 분류", type: "text" },
  { label: "제목", type: "text" },
  { label: "문의내용", type: "text" },
  { label: "등록일자", type: "text" },
  { label: "첨부파일", type: "text" },
];
const formFields2 = [
  { label: "제목", type: "text" },
  { label: "담당자", type: "text" },
  { label: "회신내용", type: "text" },
];
const OnebyonePopup3: React.FC<OnebyonePopup3Props> = ({ onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>1:1문의 답변 쓰기</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <PageTitle>* 회원 1:1문의 내용</PageTitle>
        <Section>
          <Box>
            {formFields.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell width="20.625rem">
                  {field.label === "회원명(ID)" && (
                    <TextBox>홍타박(ssafa)</TextBox>
                  )}
                  {field.label === "이메일" && (
                    <TextBox>
                      <ColorText>qkrtjdud09066@gail.com</ColorText>
                    </TextBox>
                  )}
                  {field.label === "항목 분류" && (
                    <TextBox>입고예약 문의..</TextBox>
                  )}
                  {field.label === "제목" && (
                    <TextBox>서비스가 너무 정말...</TextBox>
                  )}
                  {field.label === "문의내용" && (
                    <TextBox>ㄴㅇㄹ ㄴㅇㄹ</TextBox>
                  )}
                  {field.label === "등록일자" && (
                    <TextBox>2024/03/25 18:25</TextBox>
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
        </Section>
        <PageTitle>* 답변 쓰기</PageTitle>
        <Section>
          <Box>
            {formFields2.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell width="20.625rem">
                  {field.label === "제목" && <Input />}
                  {field.label === "담당자" && <Input />}
                  {field.label === "회신내용" && <Input />}
                </InputCell>
              </BoxRow>
            ))}
          </Box>
        </Section>
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

const Input = styled.input`
  margin-top: 0.19rem;
  width: 16.875rem;
  height:1.1875rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 29.375rem;
  margin-bottom: 0.625rem;
`;
const PageTitle = styled.div`
  font-size: 0.8125rem;
  margin-bottom: 0.6875rem;
  font-weight: bold;
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
export default OnebyonePopup3;
