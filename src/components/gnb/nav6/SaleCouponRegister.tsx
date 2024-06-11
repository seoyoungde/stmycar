import React, { forwardRef, useState, ForwardedRef } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import RadioButton from "../../Button/RadioButton";

const SaleCouponRegister = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [moneyselectedValue, setMoneyselectedValue] = useState("option1");
  const handleRadioMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoneyselectedValue(e.target.value);
  };
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };
  const CustomInput = forwardRef(
    (
      { value, onClick }: { value: string; onClick: () => void },
      ref: ForwardedRef<HTMLButtonElement>
    ) => (
      <StyledButton onClick={onClick} ref={ref}>
        {value}
      </StyledButton>
    )
  );
  return (
    <PageContainer>
      <PageTitle>할인 쿠폰 등록</PageTitle>

      <Line></Line>
      <PageContent>
        쿠폰(할인)등록은 노출을 원하는 일자의 1~2일 전에 미리 등록해
        주시길바랍니다
      </PageContent>
      <Contents>
        <Box>
          <Title>
            <Required>*</Required> 쿠폰발행 방식
          </Title>
          <KeywordBox>
            <select
              style={{
                width: "20.625rem",
                height: "2rem",
                borderRadius: "0",
              }}
            >
              <option value="1">선택해주세요</option>
              <option value="2">단독발행</option>
              <option value="3">제휴발행</option>
            </select>
          </KeywordBox>
        </Box>
        <Box>
          <Title>
            <Required>*</Required> 쿠폰 제목
          </Title>
          <Input />
        </Box>
        <Box>
          <Title>
            <Required>*</Required> 적용 기간
          </Title>
          <KeywordContainer>
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
              <Text1>~</Text1>
              <DatePickerWrapper>
                <DatePicker
                  locale={ko}
                  selected={selectedEndDate}
                  onChange={handleEndDateChange}
                  dateFormat="MM/dd"
                  placeholderText="시작날짜"
                  customInput={
                    <CustomInput value="시작날짜" onClick={() => {}} />
                  }
                />
              </DatePickerWrapper>
            </KeywordBox>
            <KeywordBox>
              <ButtonBox>
                <Button>15일</Button>
                <Button>30일</Button>
                <Button>2개월</Button>
                <Button>3개월</Button>
                <Button>6개월</Button>
              </ButtonBox>
            </KeywordBox>
          </KeywordContainer>
        </Box>
        <Box>
          <Title>
            <Required>*</Required> 쿠폰 금액(권종)
          </Title>
          <KeywordBox2>
            <SubTitle>쿠폰(할인) 금액을 설정해주세요</SubTitle>
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
          </KeywordBox2>
        </Box>
        <Box>
          <Title>
            <Required>*</Required> 쿠폰이미지
          </Title>
          <Input2 />
          <AddButton>첨부하기</AddButton>
        </Box>
        <Box>
          <Title>
            <Required>*</Required> 쿠폰 적용 대상
          </Title>

          <KeywordBox>
            <select
              style={{
                width: "20.625rem",
                height: "2rem",
                borderRadius: "0",
              }}
            >
              <option value="1">선택해주세요</option>
              <option value="2">확인중</option>
              <option value="3">미확인</option>
            </select>
          </KeywordBox>
        </Box>
      </Contents>
      <Line></Line>
      <RegisterButton>쿠폰 등록</RegisterButton>
    </PageContainer>
  );
};
const RadioBox = styled.div`
  width: 4.8125rem;
  height: 2.0625rem;
  background-color: #91bff9;
  text-align: center;
  line-height: 2.0625rem;
  border-radius: 0.25rem;
  margin-right: 0.9375rem;
`;
const KeyWordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
`;
const SubTitle = styled.div`
  font-size: 0.8rem;
  line-height: 2.1875rem;
`;
const KeywordContainer = styled.div`
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
  width: 3.7rem;
  height: 1.9375rem;
  border: 0;
  background-color: #c9c9c9;
  border-radius: 0.25rem;
`;
const Text1 = styled.div`
  margin-left: 1.875rem;
  margin-right: 1.8125rem;
  line-height: 1.875rem;
`;
const DatePickerWrapper = styled.div``;
const StyledButton = styled.button`
  width: 8.125rem;
  height: 1.875rem;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
`;
const Input = styled.input`
  width: 20.0625rem;
  height: 1.625rem;
`;
const Input2 = styled.input`
  width: 15.125rem;
  height: 1.625rem;
`;
const AddButton = styled.button`
  width: 4.3125rem;
  height: 2rem;
  border: 0;
  background-color: #838383;
  color: white;
  font-size: 0.75rem;
  border-radius: 0.375rem;
  margin-left: 0.625rem;
  cursor:pointer;
`;
const KeywordBox = styled.div`
  display: flex;
  width: 21.875rem;
  flex-direction: row;
`;
const KeywordBox2 = styled.div`
  width: 21.875rem;
`;
const RegisterButton = styled.button`
  width: 29.4375rem;
  height: 3rem;
  border: 0;
  background-color: red;
  border-radius: 0.375rem;
  color: white;
  margin: auto;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1.0625rem;
  cursor:pointer;
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
const PageContent = styled.div`
  text-align: center;
  color: #636363;
  font-size: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
const Title = styled.div`
  font-size: 1.125rem;
  width: 10.9375rem;
  height: 2.1875rem;
  line-height: 2.1875rem;
`;
const Line = styled.div`
  border-top: 1px solid #cecece;
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
export default SaleCouponRegister;
