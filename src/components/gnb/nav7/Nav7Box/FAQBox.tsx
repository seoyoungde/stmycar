import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";
import CustomDatePicker from "../../../Box/DatePicker";

const formFields = [
  { label: "일자검색", type: "text" },
  { label: "분류선택", type: "text" },
  { label: "검색항목", type: "text" },
];

const FAQBox = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div style={{ marginLeft: "1.75rem" }}>
      <Title>[FAQ관리]</Title>
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

                {field.label === "분류선택" && (
                  <SelectBox>
                    <select
                      style={{
                        width: "4.6875rem",
                        height: "1.5625rem",
                        borderRadius: "0",
                      }}
                    >
                      <option value="1">분류선택</option>
                      <option value="2">확인중</option>
                      <option value="3">미확인</option>
                    </select>
                    <Input />
                  </SelectBox>
                )}
                {field.label === "검색항목" && <Input />}
              </InputCell>
            </BoxRow>
          ))}
        </Box>
        <Button />
      </Section>
    </div>
  );
};
const SelectBox = styled.div`
  margin-left: 0.875rem;
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

const Title = styled.div`
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
export default FAQBox;
