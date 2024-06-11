import React from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";

interface SuggestPopu2Props {
  onClose: () => void;
}
const formFields = [
  { label: "제휴공업사", type: "text" },
  { label: "이메일", type: "text" },
  { label: "제목", type: "text" },
  { label: "답변 내용", type: "text" },
  { label: "첨부자료", type: "text" },
  { label: "등록일자", type: "text" },
];
const formFields2 = [
  { label: "제목", type: "text" },
  { label: "담당자", type: "text" },
  { label: "내용확인 및 결과 내용", type: "text" },
  { label: "첨부자료", type: "text" },
];
const SuggestPopup2: React.FC<SuggestPopu2Props> = ({ onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>답변 내용(등록/보기)</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <PageTitle>* 대상 공업사측 답변 내용</PageTitle>
        <Section>
          <Box>
            {formFields.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell>
                  {field.label === "제휴공업사" && (
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        lineHeight: "1.4375rem",
                        width: "20.625rem",
                      }}
                    >
                      좀만더공업사
                    </div>
                  )}
                  {field.label === "이메일" && (
                    <TextBox>
                      <ColorText>qkrtjdud09066@gail.com</ColorText>
                    </TextBox>
                  )}
                  {field.label === "제목" && (
                    <TextBox> 매장서비스 개선 요망</TextBox>
                  )}
                  {field.label === "답변 내용" && (
                    <TextBox>매장서비스 개선 요망</TextBox>
                  )}
                  {field.label === "첨부자료" && (
                    <TextBox>
                      <ColorText>123.jpg</ColorText>
                    </TextBox>
                  )}
                  {field.label === "등록일자" && (
                    <TextBox>2024/03/25 18:25</TextBox>
                  )}
                </InputCell>
              </BoxRow>
            ))}
          </Box>
        </Section>
        <PageTitle>* 일급마이카 운영자 확인 사항 등록</PageTitle>
        <Section>
          <Box>
            {formFields2.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell>
                  {field.label === "제목" && (
                    <TextBox>
                      {" "}
                      <Input />
                    </TextBox>
                  )}

                  {field.label === "담당자" && (
                    <TextBox>일급마이카 고객지원팀 홍길순 주임</TextBox>
                  )}
                  {field.label === "내용확인 및 결과 내용" && (
                    <TextBox>
                      <Input2 />
                    </TextBox>
                  )}
                  {field.label === "첨부자료" && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "20.625rem",
                      }}
                    >
                      <TextBox>
                        <ColorText>123.jpg</ColorText>
                      </TextBox>
                      <ButtonBox>
                        <AddButton>+ 첨부</AddButton>
                        <PlusButton>+</PlusButton>
                        <MinusButton>-</MinusButton>
                      </ButtonBox>
                    </div>
                  )}
                </InputCell>
              </BoxRow>
            ))}
          </Box>
        </Section>
        <SaveButton>저장</SaveButton>
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
const SaveButton = styled.button`
  border: 0;
  color: white;
  background-color: black;
  margin: auto;
  width: 3.75rem;
  height: 1.5625rem;
  border-radius: 0.375rem;
  margin-left: 13.125rem;
  cursor:pointer;
`;
const ButtonBox = styled.div`
  width: 6.875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MinusButton = styled.button`
  width: 1.4375rem;
  height: 1.5rem;
  border: 0;
  font-size: 0.8125rem;
  border-radius: 0.125rem;
  background-color: #efefef;
`;
const PlusButton = styled.button`
  width: 1.4375rem;
  height: 1.5rem;
  border: 0;
  font-size: 0.8125rem;
  border-radius: 0.125rem;
  background-color: #efefef;
`;
const AddButton = styled.button`
  width: 3.375rem;
  height: 1.5rem;
  background-color: #838383;
  border: 0;
  color: white;
  font-size: 0.8125rem;
  border-radius: 0.125rem;
`;
const Input2 = styled.input`
  width: 20.625rem;
  border: 1px solid #d2d2d2;
  height: 5rem;
`;
const Input = styled.input`
  width: 20.625rem;
  height: 1.5625rem;
  border: 1px solid #d2d2d2;
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
  height: auto;
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
export default SuggestPopup2;
