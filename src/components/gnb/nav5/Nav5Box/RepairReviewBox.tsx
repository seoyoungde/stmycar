import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";
import NumBox, { NumBoxField } from "../../../Box/NumBox";

import CustomDatePicker from "../../../Box/DatePicker";
const formFields = [
  { label: "기간검색", type: "text" },
  { label: "키워드검색", type: "text" },
];
const formFields2: NumBoxField[] = [
  { label: "전체 누적 등록 건", value: "1,000,000건" },
  { label: "등록 대기 건", value: "100,000건" },
  { label: "등록 완료 건", value: "500,000건" },
];
const formFields3 = [
  { label: "지급/차감액", type: "text" },
  { label: "지급/차감사유", type: "text" },
];
const RepairReviewBox: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div>
      <RepairCommentBoxTItle>[이용후기검색]</RepairCommentBoxTItle>
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
                        width: "5rem",
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
      <Title>∙ 전체 이용후기 등록 현황</Title>
      <InfoBox>
        <NumBox fields={formFields2} labelWidth={180} valueWidth={160} />
      </InfoBox>

      <Title>∙ 이용후기 포인트 지급/차감</Title>
      <Section>
        <Box>
          {formFields3.map((field, index) => (
            <BoxRow key={index} isEven={index % 2 === 0}>
              <LabelCell>{field.label}</LabelCell>
              <InputCell>
                {field.label === "지급/차감액" && (
                  <InputBox>
                    <Input />
                    원(차감 시 마이너스금액으로 입력)
                  </InputBox>
                )}
                {field.label === "지급/차감사유" && (
                  <InputBox>
                    <Input />
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
const Title = styled.div`
  font-size: 1.0625rem;
  margin-top: 1.8125rem;
  margin-left: 1.9375rem;
  margin-bottom: 0.9375rem;
  font-weight: bold;
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
const InputBox = styled.div`
  margin-left: 0.875rem;
  font-size: 0.875rem;
`;
const SelectBox = styled.div`
  margin-left: 0.875rem;
  font-size: 0.875rem;
`;
const Input = styled.input`
  width: 19.375rem;
  height: 1.4375rem;
  border: 1px solid #ccc;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: 1rem;
`;
export default RepairReviewBox;
