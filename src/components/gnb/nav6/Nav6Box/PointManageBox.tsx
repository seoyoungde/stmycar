import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";
import CustomDatePicker from "../../../Box/DatePicker";
import NumBox, { NumBoxField } from "../../../Box/NumBox";

const formFields = [
  { label: "기간검색", type: "text" },
  { label: "키워드검색", type: "text" },
];
const formFields2: NumBoxField[] = [
  { label: "누적 포인트", value: "1,000,000 P" },
  { label: "사용가능 포인트", value: "1,000,000 P" },
  { label: "사용한 포인트", value: "1,000,000 P" },
];
const formFields3 = [
  { label: "지급/차감액", type: "text" },
  { label: "고객검색", type: "text" },
  { label: "적립사유", type: "text" },
];
const PointManageBox = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div style={{ marginLeft: "1.75rem" }}>
      <PointManageTiitle>[포인트관리]</PointManageTiitle>
      <Line></Line>
      <Section>
        <Box>
          {formFields.map((field, index) => (
            <BoxRow key={index} isEven={index % 2 === 0}>
              <LabelCell>{field.label}</LabelCell>
              <InputCell>
                {field.label === "기간검색" && (
                  <CustomDatePicker
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={setStartDate}
                    onEndDateChange={setEndDate}
                    placeholderText="날짜"
                  />
                )}

                {field.label === "키워드검색" && <Input />}
              </InputCell>
            </BoxRow>
          ))}
        </Box>
        <Button />
      </Section>
      <Title>∙ 전체 포인트 보유 현황</Title>
      <InfoBox>
        <NumBox fields={formFields2} labelWidth={140} valueWidth={210} />
      </InfoBox>
      <Title>∙ 포인트 지급/차감</Title>
      <Section>
        <Box>
          {formFields3.map((field, index) => (
            <BoxRow key={index}>
              <LabelCell>{field.label}</LabelCell>
              <InputCell>
                {field.label === "지급/차감액" && (
                  <InputBox>
                    <Input />
                    원(차감 시 마이너스금액으로 입력)
                  </InputBox>
                )}
                {field.label === "고객검색" && (
                  <InputBox>
                    <Input />
                    <SearchButton>검색</SearchButton>
                  </InputBox>
                )}
                {field.label === "적립사유" && (
                  <InputBox>
                    <Input2 />
                  </InputBox>
                )}
              </InputCell>
            </BoxRow>
          ))}
        </Box>
      </Section>
      <SaveButton>저장</SaveButton>
    </div>
  );
};
const SearchButton = styled.button`
  width: 2.4rem;
  height: 1.4375rem;
  border: 0;
  background-color: black;
  color: white;
  border-radius: 0.25rem;
  font-size: 0.8125rem;
  cursor:pointer;
`;
const InputBox = styled.div`
  margin-left: 0.875rem;
  font-size: 0.875rem;
`;
const SaveButton = styled.div`
  width: 3.6875rem;
  height: 1.5625rem;
  background-color: black;
  color: white;
  margin: auto;
  text-align: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.5625rem;
  margin-top: 0.625rem;
  cursor:pointer;
`;
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 1.0625rem;
  margin-top: 1.8125rem;
  margin-bottom: 0.9375rem;
`;
const Input = styled.input`
  width: 19.375rem;
  height: 1.4375rem;
  border: 1px solid #ccc;
  margin-left: 0.875rem;
  margin-right: 0.625rem;
`;
const Input2 = styled.input`
  width: 38.8125rem;
  height: 1.4375rem;
  border: 1px solid #ccc;
  margin-left: 0.875rem;
  margin-right: 0.625rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #cecece;
  width: 72.9375rem;
`;

const PointManageTiitle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-bottom: 0.9375rem;
`;
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-bottom: 1.25rem;
  width: 72.9375rem;
`;
export default PointManageBox;
