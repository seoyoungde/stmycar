import React, { useState } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
  placeholderText?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  placeholderText,
}) => {
  return (
    <DatePickerContainer>
      <DatePicker
        selected={startDate}
        onChange={onStartDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText={
          placeholderText ? `${placeholderText} 시작` : "시작 날짜 선택"
        }
      />
      {" ~ "}
      <DatePicker
        selected={endDate}
        onChange={onEndDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText={
          placeholderText ? `${placeholderText} 종료` : "종료 날짜 선택"
        }
      />
      <SelectBox>
        <Select1>오늘</Select1>
        <Select2>일주일</Select2>
        <Select3>1개월</Select3>
        <Select4>2개월</Select4>
        <Select5>전체</Select5>
      </SelectBox>
    </DatePickerContainer>
  );
};
const DatePickerContainer = styled.div`
  margin-right: 8px;
  margin-left: 14px;
  display: flex;
  align-items: center;
`;
const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 240px;
  justify-content: space-between;
  margin-left: 5px;
`;
const Select1 = styled.div`
  width: 37px;
  height: 23px;
  background-color: black;
  color: white;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  line-height: 23px;
`;
const Select2 = styled.div`
  width: 45px;
  height: 23px;
  background-color: #838383;
  color: white;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  line-height: 23px;
`;
const Select3 = styled.div`
  width: 45px;
  height: 23px;
  background-color: #838383;
  color: white;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  line-height: 23px;
`;
const Select4 = styled.div`
  width: 45px;
  height: 23px;
  background-color: #838383;
  color: white;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  line-height: 23px;
`;
const Select5 = styled.div`
  width: 45px;
  height: 23px;
  background-color: #838383;
  color: white;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  line-height: 23px;
`;
export default CustomDatePicker;
