import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";

import CustomDatePicker from "../../../Box/DatePicker";

const formFields = [
  { label: "기간검색", type: "text" },
  { label: "사고구분", type: "text" },
  { label: "사고부위", type: "text" },
  { label: "키워드검색", type: "text" },
];

const RepairListBox: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div>
      <RepairListTItle>[사고수리정보 목록 화면]</RepairListTItle>
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
                {field.label === "사고구분" && (
                  <SelectBox>
                    <select
                      style={{
                        width: "5rem",
                        height: "1.5625rem",
                        borderRadius: "0",
                      }}
                    >
                      <option value="1">전체</option>
                    </select>
                  </SelectBox>
                )}
                {field.label === "사고부위" && (
                  <SelectBox>
                    <select
                      style={{
                        width: "5rem",
                        height: "1.5625rem",
                        borderRadius: "0",
                      }}
                    >
                      <option value="1">전체</option>
                    </select>
                  </SelectBox>
                )}
                {field.label === "키워드검색" && (
                  <SelectBox2>
                    <select
                      style={{
                        width: "5rem",
                        height: "1.5625rem",
                        borderRadius: "0",
                      }}
                    >
                      <option value="1">선택</option>
                      <option value="2">견적</option>
                      <option value="3">입고예약</option>
                      <option value="4">수리중</option>
                      <option value="5">수리완료</option>
                      <option value="6">이용후기</option>
                    </select>
                    <Input />
                  </SelectBox2>
                )}
              </InputCell>
            </BoxRow>
          ))}
        </Box>
        <Button />
      </Section>
    </div>
  );
};
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-bottom: 1.25rem;
  margin-left: 1.75rem;
`;
const SelectBox2 = styled.div`
  margin-left: 0.875rem;
`;
const Input = styled.input`
  width: 19.375rem;
  height: 1.4375rem;
  border: 1px solid #ccc;
  margin-left: 0.5rem;
`;
const Section = styled.div`
  margin-left: 1.75rem;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #cecece;
  width: 72.9375rem;
`;
const RepairListTItle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-left: 1.9375rem;
  margin-bottom: 0.9375rem;
`;
const SelectBox = styled.div`
  display: flex;
  margin-left: 0.875rem;
  align-items: center;
`;

export default RepairListBox;
