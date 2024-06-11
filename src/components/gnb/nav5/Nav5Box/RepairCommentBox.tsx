import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";

import CustomDatePicker from "../../../Box/DatePicker";
const formFields = [
  { label: "기간검색", type: "text" },
  { label: "키워드검색", type: "text" },
];
const RepairCommentBox: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div>
      <RepairCommentBoxTItle>[사고수리댓글 목록 화면]</RepairCommentBoxTItle>
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
                {field.label === "키워드검색" && (
                  <SelectBox>
                    <select
                      style={{
                        width: "4.125rem",
                        height: "1.5625rem",
                        borderRadius: "0",
                      }}
                    >
                      <option value="1">선택</option>
                      <option value="2">국산</option>
                      <option value="3">수입</option>
                      <option value="4">차종</option>
                      <option value="5">공업사</option>
                      <option value="6">제조사</option>
                      <option value="7">모델</option>
                      <option value="8">사고구분</option>
                      <option value="9">사고부위</option>
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
    </div>
  );
};
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-bottom: 1.25rem;
  margin-left: 1.75rem;
`;
const Section = styled.div`
  margin-left: 1.75rem;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #cecece;
  width: 72.9375rem;
`;
const RepairCommentBoxTItle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-left: 1.9375rem;
  margin-bottom: 0.9375rem;
`;
const SelectBox = styled.div`
  margin-left: 0.875rem;
`;
const Input = styled.input`
  width: 19.375rem;
  height: 1.4375rem;
  border: 1px solid #ccc;
  margin-left: 0.5rem;
`;
export default RepairCommentBox;
