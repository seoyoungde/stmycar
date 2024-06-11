import React from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";

interface EventManagePopup2Props {
  onClose: () => void;
}

const formFields = [
  { label: "제목", type: "text" },
  { label: "공지내용", type: "text" },
];

const EventManagePopup2: React.FC<EventManagePopup2Props> = ({ onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>이벤트 임시중지 사유등록(수정)</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <Section>
          <Box>
            {formFields.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell>
                  {field.label === "제목" && (
                    <div style={{ display: "flex", lineHeight: "23px" }}>
                      <Input />
                    </div>
                  )}
                  {field.label === "공지내용" && <Input2 />}
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
const SaveButton = styled.button`
  width: 61px;
  height: 26px;
  background-color: black;
  color: white;
  border-radius: 6px;
  margin: auto;
  margin-top: 10px;
  margin-left: 220px;
  cursor:pointer;
`;

const Input = styled.input`
  width: 330px;
  height: 19px;
  border: 1px solid #black;
  margin-top: 5px;
`;
const Input2 = styled.input`
  width: 330px;
  height: 80px;
  border: 1px solid #black;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 470px;
`;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 450px;
  height: 53px;
  background-color: black;
  color: white;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
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
  padding: 10px;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
const CloseButton = styled.button`
  background: #838383;
  color: white;
  line-height: 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 54px;
  height: 24px;
  margin-top: 14px;
`;
const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  line-height: 53px;
`;
export default EventManagePopup2;
