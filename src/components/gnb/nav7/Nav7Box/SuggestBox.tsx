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
  { label: "개선항목 누적 등록 수", value: "1,000건" },
  { label: "확인대기", value: "100건" },
  { label: "확인 중", value: "100건" },
  { label: "처리/검토완료", value: "900건" },
];
const formFields3: NumBoxField[] = [
  { label: "제안항목 누적 등록 수", value: "1,000건" },
  { label: "확인대기", value: "100건" },
  { label: "확인 중", value: "100건" },
  { label: "처리/검토완료", value: "900건" },
];
const formFields4: NumBoxField[] = [
  { label: "칭찬항목 누적 등록 수", value: "1,000건" },
  { label: "확인대기", value: "100건" },
  { label: "확인 중", value: "100건" },
  { label: "처리/검토완료", value: "900건" },
];

const SuggestBox = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div style={{ marginLeft: "1.75rem" }}>
      <SuggestTitle>[개선/제안/칭찬 관리]</SuggestTitle>
      <Line />
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
      <Title>∙ 전체 개선/제안/칭찬 등록/처리 현황</Title>
      <InfoBox>
        <NumBox fields={formFields2} labelWidth={145} valueWidth={100} />
        <NumBox fields={formFields3} labelWidth={145} valueWidth={100} />
        <NumBox fields={formFields4} labelWidth={145} valueWidth={100} />
      </InfoBox>
    </div>
  );
};
const InfoBox = styled.div`
  width: 100%;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-bottom: 1.25rem;
  width: 72.9375rem;
`;
const SuggestTitle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-bottom: 0.9375rem;
`;
export default SuggestBox;
