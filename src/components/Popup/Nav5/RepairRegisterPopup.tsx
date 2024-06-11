import React from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import { fireEvent } from "@testing-library/react";

interface RepairRegisterPopupProps {
  onClose: () => void;
}
const formFields = [
  { label: "1번 이미지", type: "text" },
  { label: "2번 이미지", type: "text" },
  { label: "3번 이미지", type: "text" },
  { label: "4번 이미지", type: "text" },
  { label: "5번 이미지", type: "text" },
];
const formFields2 = [
  { label: "1번 이미지", type: "text" },
  { label: "2번 이미지", type: "text" },
  { label: "3번 이미지", type: "text" },
  { label: "4번 이미지", type: "text" },
  { label: "5번 이미지", type: "text" },
];
const RepairRegisterPopup: React.FC<RepairRegisterPopupProps> = ({
  onClose,
}) => {
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>사고부위 사진 등록</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <BoxText>* 사고수리 전 이미지</BoxText>
        <Box>
          {formFields.map((field, index) => (
            <BoxRow key={index} isEven={index % 2 === 0}>
              <LabelCell>{field.label}</LabelCell>
              <InputCell>
                {field.label === "1번 이미지" && (
                  <CellBox>
                    <ImageBox>image1.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
                {field.label === "2번 이미지" && (
                  <CellBox>
                    <ImageBox>image2.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
                {field.label === "3번 이미지" && (
                  <CellBox>
                    <ImageBox>image3.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
                {field.label === "4번 이미지" && (
                  <CellBox>
                    <ImageBox>image4.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
                {field.label === "5번 이미지" && (
                  <CellBox>
                    <ImageBox>image5.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
              </InputCell>
            </BoxRow>
          ))}
        </Box>
        <BoxText>* 사고수리 후 이미지</BoxText>
        <Box>
          {formFields2.map((field, index) => (
            <BoxRow key={index} isEven={index % 2 === 0}>
              <LabelCell>{field.label}</LabelCell>
              <InputCell>
                {field.label === "1번 이미지" && (
                  <CellBox>
                    <ImageBox>image1.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
                {field.label === "2번 이미지" && (
                  <CellBox>
                    <ImageBox>image2.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
                {field.label === "3번 이미지" && (
                  <CellBox>
                    <ImageBox>image3.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
                {field.label === "4번 이미지" && (
                  <CellBox>
                    <ImageBox>image4.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
                {field.label === "5번 이미지" && (
                  <CellBox>
                    <ImageBox>image5.jpg</ImageBox>
                    <AddButton>추가</AddButton>
                  </CellBox>
                )}
              </InputCell>
            </BoxRow>
          ))}
        </Box>
        <SaveButton>등록</SaveButton>
      </PopupContainer>
    </Overlay>
  );
};
const BoxText = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
const SaveButton = styled.button`
  width: 4.0625rem;
  height: 2.1875rem;
  border: 0;
  background-color: black;
  color: white;
  border-radius: 0.375rem;
  font-weight: bold;
  margin-left: 13.75rem;
  margin-top: 0.8125rem;
`;
const CellBox = styled.div`
  display: flex;
`;
const ImageBox = styled.div`
  border: 1px solid black;
  width: 16.25rem;
  height: 1.875rem;
  color: #cbcbcb;
  line-height: 1.875rem;
  padding-left: 0.625rem;
`;
const AddButton = styled.button`
  margin-left: 0.3125rem;
  width: 2.8125rem;
  height: 2rem;
  font-size: 0.8125rem;
  border: 0;
  border-radius: 0.25rem;
  background-color: #838383;
  color: white;
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
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 29.6875rem;
  height: 3.3125rem;
  background-color: black;
  color: white;
  margin: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin-bottom: 1.25rem;
`;
const Title = styled.div`
  font-size: 1.0625rem;
  font-weight: bold;
  line-height: 3.3125rem;
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
export default RepairRegisterPopup;
