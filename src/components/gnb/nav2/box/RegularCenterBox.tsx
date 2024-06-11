import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";
import CustomDatePicker from "../../../Box/DatePicker";
import NumBox, { NumBoxField } from "../../../Box/NumBox";

const formFields = [
  { label: "일자검색", type: "text" },
  { label: "검색항목", type: "text" },
];
const formFields2: NumBoxField[] = [
  { label: "전체 단골 공업사 등록 수", value: "100,000 건" },
  { label: "단골등록 회원수", value: "50,000 명" },
];

const RegularCenterBox: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div style={{ marginLeft: "1.75rem" }}>
      <Section>
        <Box>
          {formFields.map((field, index) => (
            <BoxRow key={index}>
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
                {field.label === "진행상태" && (
                  <SelectBox>
                    <select
                      style={{
                        width: "19.3125rem",
                        height: "1.5625rem",
                        borderRadius: "0",
                      }}
                    >
                      <option value="1">선택</option>
                      <option value="2">확인중</option>
                      <option value="3">미확인</option>
                    </select>
                  </SelectBox>
                )}
                {field.label === "검색항목" && (
                  <SelectBox>
                    <select
                      style={{
                        width: "4.125rem",
                        height: "1.5625rem",
                        borderRadius: "0",
                      }}
                    >
                      <option value="1">선택</option>
                      <option value="2">확인중</option>
                      <option value="3">미확인</option>
                    </select>
                    <Input />
                  </SelectBox>
                )}
              </InputCell>
            </BoxRow>
          ))}
        </Box>
        <Button />
      </Section>
      <Title>∙ 단골 공업사 목록 List</Title>
      <InfoBox>
        <NumBox fields={formFields2} labelWidth={210} valueWidth={300} />
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
  font-weight: bold;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #cecece;
  width: 72.9375rem;
`;
const SelectBox = styled.div`
  margin-left: 0.875rem;
`;
const Input = styled.input`
  width: 14.75rem;
  height: 1.3125rem;
  border: 1px solid black;
  margin-left: 0.125rem;
`;
export default RegularCenterBox;
