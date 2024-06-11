import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";
import NumBox, { NumBoxField } from "../../../Box/NumBox";
import CustomDatePicker from "../../../Box/DatePicker";

const formFields = [
  { label: "일자검색", type: "text" },
  { label: "진행상태", type: "text" },
  { label: "검색항목", type: "text" },
];
const formFields2: NumBoxField[] = [
  { label: "전체 쿠폰 등록 건수", value: "1,000,000건" },
  { label: "운영중인 쿠폰 건수", value: "100,000건" },
  { label: "기간 만료 건수", value: "500,000건" },
];
const formFields3: NumBoxField[] = [
  { label: "적용 대기중 건수", value: "1,000,000건" },
  { label: "강제종료 건수", value: "2000건" },
  { label: "기간 만료 건수", value: "500건" },
];
const SaleCouponManageBox = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <>
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
                {field.label === "진행상태" && (
                  <SelectBox>
                    <select
                      style={{
                        width: "9.375rem",
                        height: "1.5625rem",
                        borderRadius: "0",
                      }}
                    >
                      <option value="1">선택</option>
                      <option value="2">진행중</option>
                      <option value="3">완료</option>
                      <option value="4">발급대기중</option>
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
      <Title>∙ 플랫폼 전체 쿠폰 할인 운영 현황</Title>
      <InfoBox>
        <NumBox fields={formFields2} labelWidth={180} valueWidth={160} />
        <NumBox fields={formFields3} labelWidth={180} valueWidth={160} />
      </InfoBox>
    </>
  );
};

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
  font-size: 0.875rem;
`;
const Input = styled.input`
  width: 19.375rem;
  height: 1.4375rem;
  border: 1px solid #ccc;
  margin-left: 0.3125rem;
`;
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default SaleCouponManageBox;
