import React, { useState } from "react";
import styled from "@emotion/styled";
import PopupNumBox, { PopupNumBoxField } from "../PopupNumbox";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import { css } from "@emotion/react";
import PopupTable from "../PopupTable";
import Pagination from "../../Button/Pagination";

const formFields = [
  { label: "책임/차감", type: "text" },
  { label: "적립사유", type: "text" },
];
const formFields2: PopupNumBoxField[] = [
  { label: "누적 포인트", value: "1,000P" },
  { label: "사용가능 포인트", value: "6,000P" },
  { label: "사용한 포인트", value: "9,000P" },
];

const PointlistPopup = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "번호",
    "적립날짜",
    "적립포인트",
    "적립/차감",
    "적립/차감 내용",
    "관리",
  ];
  const data = [[3, "2024.08.08", "-6000P", "차감", "차 실내 클리닉", "삭제"]];
  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 5) {
      return (
        <ButtonBox>
          <DeleteButton>삭제</DeleteButton>
        </ButtonBox>
      );
    }
    return data;
  };
  const headerStyles = css`
    border: 1px solid #cecece;
    padding: 0.5rem;
    text-align: center;
    color: white;
    font-size: 1rem;
    font-weight: normal;
    background-color: black;
    font-size: 0.875rem;
    white-space: pre-wrap;
  `;

  const cellStyles = css`
    border: 1px solid #cecece;
    padding: 0.5rem;
    text-align: center;
    font-size: 0.8125rem;
  `;
  return (
    <div style={{ width: "66.875rem", display: "flex", flexDirection: "column" }}>
      <Title>∙ 전체 1:1문의 접수/처리 현황</Title>
      <InfoBox>
        <PopupNumBox
          fields={formFields2}
          tableWidth={1020}
          labelWidth={150}
          valueWidth={150}
        />
      </InfoBox>
      <Title>∙ 포인트 적립/차감</Title>

      <Section>
        <Box>
          {formFields.map((field, index) => (
            <BoxRow key={index} isEven={index % 2 === 0}>
              <LabelCell>{field.label}</LabelCell>
              <InputCell>
                {field.label === "책임/차감" && (
                  <div style={{ display: "flex", lineHeight: "1.4375rem" }}>
                    <Input />
                    <InputText>P (차감 시 마이너스금액으로 입력)</InputText>
                  </div>
                )}
                {field.label === "적립사유" && (
                  <select
                    style={{
                      width: "10.6875rem",
                      height: "1.625rem",
                      borderRadius: "0",
                    }}
                  >
                    <option value="1">사유선택</option>
                    <option value="2">확인중</option>
                    <option value="3">미확인</option>
                  </select>
                )}
              </InputCell>
            </BoxRow>
          ))}
        </Box>
      </Section>
      <SaveButton>저장</SaveButton>
      <Title>∙ 적립금 사용 내역</Title>
      <PopupTable
        headers={headers}
        data={data}
        width="63.75rem"
        headerStyles={headerStyles}
        cellStyles={cellStyles}
        renderCell={renderCell}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      ></Pagination>
    </div>
  );
};
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 6.875rem;
  margin: auto;
`;
const DeleteButton = styled.button`
  width: 3.125rem;
  height: 1.625rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
  margin: auto;
`;
const SaveButton = styled.button`
  width: 3.8125rem;
  height: 1.625rem;
  background-color: black;
  color: white;
  border-radius: 0.375rem;
  margin: auto;
  margin-top: 0.625rem;
`;
const InputText = styled.div`
  font-size: 0.75rem;
`;
const Input = styled.input`
  width: 12.5rem;
  height: 1.1875rem;
  border: 1px solid #black;
  margin-right: 0.625rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 63.75rem;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
`;
const Title = styled.div`
  font-size: 1.0625rem;
  margin-top: 1.8125rem;
  margin-bottom: 0.9375rem;
  font-weight: bold;
`;
export default PointlistPopup;
