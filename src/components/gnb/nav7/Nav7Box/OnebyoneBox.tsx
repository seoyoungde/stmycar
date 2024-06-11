import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";
import CustomDatePicker from "../../../Box/DatePicker";
import NumBox, { NumBoxField } from "../../../Box/NumBox";

const formFields = [
  { label: "일자검색", type: "text" },
  { label: "키워드검색", type: "text" },
];
const formFields2: NumBoxField[] = [
  { label: "누적 전체 접수 건", value: "1,000건" },
  { label: "답변 대기 중", value: "100건" },
  { label: "답변완료", value: "900건" },
];
const formFields3: NumBoxField[] = [
  { label: "매우 만족", value: "1,000건" },
  { label: "만족", value: "100건" },
  { label: "보통", value: "200건" },
  { label: "불만족", value: "200건" },
  { label: "매우불만족", value: "200건" },
];
const OnebyoneBox = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div style={{ marginLeft: "1.75rem" }}>
      <OnebyoneTiitle>[1:1 문의 관리]</OnebyoneTiitle>
      <Line></Line>
      <Section>
        <Box>
          {formFields.map((field, index) => (
            <BoxRow key={index} isEven={index % 2 === 0}>
              <LabelCell>{field.label}</LabelCell>
              <InputCell>
                {field.label === "일자검색" && (
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
      <Title>∙ 전체 1:1문의 접수/처리 현황</Title>
      <InfoBox>
        <NumBox fields={formFields2} labelWidth={140} valueWidth={210} />
      </InfoBox>
      <Title>∙ 1:1 답변 만족도 현황 (5단계)</Title>
      <InfoBox>
        <NumBox fields={formFields3} labelWidth={85} valueWidth={110} />
      </InfoBox>
    </div>
  );
};
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
const Section = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #cecece;
  width: 72.9375rem;
`;

const OnebyoneTiitle = styled.div`
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
export default OnebyoneBox;
