import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../../../Box/Box";
import Button from "../../../Button/Button";
import CustomDatePicker from "../../../Box/DatePicker";
import RadioButton from "../../../Button/RadioButton";

const formFields = [
  { label: "가입일자", type: "text" },
  { label: "회원검색", type: "text" },
];

const CenterMemberBox: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedValue, setSelectedValue] = useState("option1");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div style={{ marginLeft: "1.75rem" }}>
      <Title>[회원검색]</Title>
      <Line></Line>
      <Section>
        <Box>
          {formFields.map((field, index) => (
            <BoxRow key={index} isEven={index % 2 === 0}>
              <LabelCell>{field.label}</LabelCell>
              <InputCell>
                {field.label === "가입일자" && (
                  <div style={{ display: "flex" }}>
                    <RadioButton
                      name="options"
                      value="option1"
                      checked={selectedValue === "option1"}
                      onChange={handleRadioChange}
                    >
                      가입일
                    </RadioButton>
                    <RadioButton
                      name="options"
                      value="option2"
                      checked={selectedValue === "option2"}
                      onChange={handleRadioChange}
                    >
                      로그인
                    </RadioButton>
                    <CustomDatePicker
                      startDate={startDate}
                      endDate={endDate}
                      onStartDateChange={setStartDate}
                      onEndDateChange={setEndDate}
                      placeholderText="날짜"
                    />
                  </div>
                )}

                {field.label === "회원검색" && (
                  <SelectBox>
                    <select
                      style={{
                        width: "4.6875rem",
                        height: "1.5625rem",
                        borderRadius: "0",
                      }}
                    >
                      <option value="1">선택</option>
                      <option value="2">이름</option>
                      <option value="3">아이디</option>
                      <option value="3">이메일</option>
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
const SelectBox = styled.div`
  margin-left: 0.55rem;
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
export default CenterMemberBox;
