import React, { useState, forwardRef, ForwardedRef } from "react";
import styled from "@emotion/styled";
import RadioButton from "../../Button/RadioButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

const Eventregister: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [moneyselectedValue, setMoneyselectedValue] = useState("option1");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  const handleRadioMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoneyselectedValue(e.target.value);
  };
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: Date | null) => {
    setSelectedTime(time);
  };

  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedEndTime, setSelectedEndTime] = useState<Date | null>(null);

  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };

  const handleEndTimeChange = (time: Date | null) => {
    setSelectedEndTime(time);
  };
  const CustomInput = forwardRef(
    (
      { value, onClick }: { value: string; onClick: () => void },
      ref: ForwardedRef<HTMLButtonElement>
    ) => (
      <StyledButton style={{ width: "65px" }} onClick={onClick} ref={ref}>
        {value}
      </StyledButton>
    )
  );
  return (
    <PageContainer>
      <PageTitle>이벤트(할인) 등록</PageTitle>
      <Line></Line>
      <Contents>
        <Box>
          <Title>
            <Required>*</Required> 이벤트 주제
          </Title>
          <KeywordBox>
            <select
              style={{
                width: "20.625rem",
                height: "2rem",
                borderRadius: "0",
              }}
            >
              <option value="1">일급마이카</option>
              <option value="2">확인중</option>
              <option value="3">미확인</option>
            </select>
          </KeywordBox>
        </Box>

        <Box>
          <Title>
            <Required>*</Required> 이벤트 유형
          </Title>
          <KeywordBox>
            <select
              style={{
                width: "20.625rem",
                height: "2rem",
                borderRadius: "0",
              }}
            >
              <option value="1">신규회원가입유치</option>
              <option value="2">확인중</option>
              <option value="3">미확인</option>
            </select>
          </KeywordBox>
        </Box>
        <Box>
          <Title>
            <Required>*</Required> 이벤트 제목
          </Title>
          <KeywordBox>
            <Input />
          </KeywordBox>
        </Box>
        <Box>
          <Title>
            <Required>*</Required> 운용 기간
          </Title>
          <KeyWordContainer>
            <KeywordBox>
              <ButtonBox>
                <Button>15일</Button>
                <Button>30일</Button>
                <Button>2개월</Button>
                <Button>3개월</Button>
                <Button>6개월</Button>
              </ButtonBox>
            </KeywordBox>
            <KeywordBox>
              <DatePickerWrapper>
                <DatePicker
                  locale={ko}
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd"
                  placeholderText="시작날짜"
                  customInput={
                    <CustomInput value="시작날짜" onClick={() => {}} />
                  }
                />
              </DatePickerWrapper>
              <DatePickerWrapper>
                <DatePicker
                  locale={ko}
                  selected={selectedTime}
                  onChange={handleTimeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="HH:mm"
                  placeholderText="시작시간"
                  customInput={
                    <CustomInput value="시작시간" onClick={() => {}} />
                  }
                />
              </DatePickerWrapper>
              <Text1>~</Text1>

              <DatePickerWrapper>
                <DatePicker
                  locale={ko}
                  selected={selectedEndDate}
                  onChange={handleEndDateChange}
                  dateFormat="MM/dd"
                  placeholderText="종료날짜"
                  customInput={
                    <CustomInput value="종료날짜" onClick={() => {}} />
                  }
                />
              </DatePickerWrapper>
              <DatePickerWrapper>
                <DatePicker
                  locale={ko}
                  selected={selectedEndTime}
                  onChange={handleEndTimeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="HH:mm"
                  placeholderText="종료시간"
                  customInput={
                    <CustomInput value="종료시간" onClick={() => {}} />
                  }
                />
              </DatePickerWrapper>
            </KeywordBox>
          </KeyWordContainer>
        </Box>
        <Box>
          <Title>
            <Required>*</Required> 이벤트 적용 대상
          </Title>

          <KeywordBox>
            <RadioButton
              name="options"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={handleRadioChange}
            >
              <RadioBox2>전체회원</RadioBox2>
            </RadioButton>
            <RadioButton
              name="options"
              value="option2"
              checked={selectedValue === "option2"}
              onChange={handleRadioChange}
            >
              <RadioBox2>일반회원</RadioBox2>
            </RadioButton>
            <RadioButton
              name="options"
              value="option3"
              checked={selectedValue === "option3"}
              onChange={handleRadioChange}
            >
              <RadioBox2>제휴공업사회원</RadioBox2>
            </RadioButton>
          </KeywordBox>
        </Box>
        <Box>
          <Title>
            <Required>*</Required> 이벤트 제공혜택
            <Title style={{ marginLeft: "0.9375rem", marginTop: "-0.625rem" }}>
              (할인권정 선택)
            </Title>
          </Title>
          <KeyWordContainer>
            <KeywordBox>
              <RadioButton
                name="moneyoptions"
                value="option1"
                checked={moneyselectedValue === "option1"}
                onChange={handleRadioMoneyChange}
              >
                <RadioBox>1000원권</RadioBox>
              </RadioButton>
              <RadioButton
                name="moneyoptions"
                value="option2"
                checked={moneyselectedValue === "option2"}
                onChange={handleRadioMoneyChange}
              >
                <RadioBox>2000원권</RadioBox>
              </RadioButton>
              <RadioButton
                name="moneyoptions"
                value="option3"
                checked={moneyselectedValue === "option3"}
                onChange={handleRadioMoneyChange}
              >
                <RadioBox>3000원권</RadioBox>
              </RadioButton>
            </KeywordBox>
            <KeywordBox>
              <RadioButton
                name="moneyoptions"
                value="option4"
                checked={moneyselectedValue === "option4"}
                onChange={handleRadioMoneyChange}
              >
                <RadioBox>5000원권</RadioBox>
              </RadioButton>
              <RadioButton
                name="moneyoptions"
                value="option5"
                checked={moneyselectedValue === "option5"}
                onChange={handleRadioMoneyChange}
              >
                <RadioBox>10000원권</RadioBox>
              </RadioButton>
              <RadioButton
                name="moneyoptions"
                value="option6"
                checked={moneyselectedValue === "option6"}
                onChange={handleRadioMoneyChange}
              >
                <RadioBox>20000원권</RadioBox>
              </RadioButton>
            </KeywordBox>
          </KeyWordContainer>
        </Box>
      </Contents>
      <Line></Line>
      <RegisterButton>이벤트 등록</RegisterButton>
    </PageContainer>
  );
};
const RadioBox2 = styled.div`
  margin-right: 0.9375rem;
`;
const RegisterButton = styled.button`
  width: 29.4375rem;
  height: 3rem;
  border: 0;
  background-color: #558ed5;
  border-radius: 0.375rem;
  color: white;
  margin: auto;
  font-size: 1.125rem;
  font-weight: bold;
  cursor:pointer;
`;
const Text1 = styled.div``;
const DatePickerWrapper = styled.div`
  width: 5.5rem;
`;
const StyledButton = styled.button`
  width: 3.375rem;
  height: 1.4375rem;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
`;
const RadioBox = styled.div`
  width: 4.8125rem;
  height: 2.0625rem;
  background-color: #91bff9;
  text-align: center;
  line-height: 2.0625rem;
  border-radius: 0.25rem;
  margin-right: 0.9375rem;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 3.375rem;
`;
const PageTitle = styled.div`
  font-size: 1.1875rem;
  text-align: center;
  margin-bottom: 0.6875rem;
`;
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-bottom: 4.125rem;
  width: 41rem;
`;
const Contents = styled.div`
  margin: auto;
  margin-bottom: 1.625rem;
`;
const Box = styled.div`
  display: flex;
  margin-bottom: 0.6875rem;
`;
const Required = styled.span`
  color: red;
`;
const Input = styled.input`
  width: 20.0625rem;
  height: 1.625rem;
`;
const KeywordBox = styled.div`
  display: flex;
  width: 21.875rem;
  flex-direction: row;
  justify-content: space-between;
`;
const KeyWordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 20.625rem;
  flex-direction: row;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 3.8rem;
  height: 1.9375rem;
  border: 1px solid #999999;
  background-color: white;
  border-radius: 0.25rem;
`;
const Title = styled.div`
  font-size: 1.125rem;
  width: 10.9375rem;
  height: 2.1875rem;
  line-height: 2.1875rem;
`;
export default Eventregister;
