import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import RadioButton from "../../Button/RadioButton";

interface FAQPopup2Props {
  onClose: () => void;
}

const formFields = [
  { label: "제목", type: "text" },
  { label: "노출구분", type: "text" },
  { label: "분류항목", type: "text" },
  { label: "공지내용", type: "text" },
  { label: "첨부파일", type: "text" },
];
const FAQPopup2: React.FC<FAQPopup2Props> = ({ onClose }) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>자주하는 질문 수정</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <Section>
          <Box>
            {formFields.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell>
                  {field.label === "제목" && (
                    <div style={{ fontSize: "0.8125rem", lineHeight: "1.4375rem" }}>
                      <Input />
                    </div>
                  )}

                  {field.label === "노출구분" && (
                    <RadioBox>
                      <RadioButton
                        name="options"
                        value="option1"
                        checked={selectedValue === "option1"}
                        onChange={handleRadioChange}
                      >
                        전체
                      </RadioButton>
                      <RadioButton
                        name="options"
                        value="option2"
                        checked={selectedValue === "option2"}
                        onChange={handleRadioChange}
                      >
                        일반회원
                      </RadioButton>
                      <RadioButton
                        name="options"
                        value="option3"
                        checked={selectedValue === "option3"}
                        onChange={handleRadioChange}
                      >
                        공업사
                      </RadioButton>
                    </RadioBox>
                  )}
                  {field.label === "분류항목" && (
                    <RadioBox>
                      <select
                        style={{
                          width: "8.125rem",
                          height: "2rem",
                          borderRadius: "0",
                        }}
                      >
                        <option value="1">긴급공지</option>
                        <option value="2">확인중</option>
                        <option value="3">미확인</option>
                      </select>
                      <select
                        style={{
                          width: "11.875rem",
                          height: "2rem",
                          borderRadius: "0",
                          marginLeft: "0.625rem",
                        }}
                      >
                        <option value="1">시스템 점검</option>
                        <option value="2">확인중</option>
                        <option value="3">미확인</option>
                      </select>
                    </RadioBox>
                  )}
                  {field.label === "공지내용" && <Input2 />}
                  {field.label === "첨부파일" && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "20.625rem",
                      }}
                    >
                      <Input3 />
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
        <SaveButton>수정</SaveButton>
      </PopupContainer>
    </Overlay>
  );
};
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
const RadioBox = styled.div`
  display: flex;
  width: 22.5rem;
  flex-direction: row;
`;
const Input = styled.input`
  width: 20.625rem;
  height: 1.25rem;
  border: 1px solid #d2d2d2;
`;
const Input2 = styled.input`
  width: 20.625rem;
  border: 1px solid #d2d2d2;
  height: 5rem;
`;
const Input3 = styled.input`
  border: 1px solid #d2d2d2;
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
export default FAQPopup2;
