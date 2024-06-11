import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";
import CustomDatePicker from "../../../Box/DatePicker";
import NumBox, { NumBoxField } from "../../../Box/NumBox";

const formFields = [
  { label: "일자검색", type: "text" },
  { label: "진행상태", type: "text" },
  { label: "검색항목", type: "text" },
];
const formFields2: NumBoxField[] = [
  { label: "전체 등록 수", value: "100 건" },
  { label: "진행 중", value: "70 건" },
  { label: "진행 대기", value: "10 건" },
  { label: "이벤트 종료", value: "20 건" },
];
const formFields3: NumBoxField[] = [
  { label: "전체 등록 수", value: "100 건" },
  { label: "진행 중", value: "70 건" },
  { label: "승인대기/완료", value: "10 건/10 건" },
  { label: "이벤트 종료", value: "20 건" },
];
const EventManageBox = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div>
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
                        width: "5rem",
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
      <Title>∙ 일급 마이카 자체 이벤트 등록 현황</Title>
      <InfoBox>
        <NumBox fields={formFields2} labelWidth={100} valueWidth={150} />
      </InfoBox>
      <Title>∙ 제휴 공업사 이벤트 등록 현황</Title>
      <InfoBox>
        <NumBox fields={formFields3} labelWidth={100} valueWidth={150} />
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
  margin-left: 0.25rem;
`;
export default EventManageBox;
