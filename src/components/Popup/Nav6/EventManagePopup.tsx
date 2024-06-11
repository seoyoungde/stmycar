import React, { ForwardedRef, forwardRef, useState } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import RadioButton from "../../Button/RadioButton";

interface EventManagePopupProps {
  onClose: () => void;
}

const EventManagePopup: React.FC<EventManagePopupProps> = ({ onClose }) => {
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
      <StyledButton style={{width:"4.25rem"}} onClick={onClick} ref={ref}>
        {value}
      </StyledButton>
    )
  );
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>이벤트 상세 정보 화면(수정)</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <PageTitle>* 이벤트(할인)등록</PageTitle>
        <Line></Line>
        <Contents>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 이벤트 주제
            </ContentsTitle>
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
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 이벤트 유형
            </ContentsTitle>
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
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 이벤트 제목
            </ContentsTitle>
            <Input />
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 운용 기간
            </ContentsTitle>
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
              <KeywordBox style={{ marginTop: "0.1875rem" }}>
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
          </ContentsBox>

          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 이벤트 적용 대상
            </ContentsTitle>
            <KeywordBox>
              <RadioButton
                name="options"
                value="option1"
                checked={selectedValue === "option1"}
                onChange={handleRadioChange}
              >
                전체회원
              </RadioButton>
              <RadioButton
                name="options"
                value="option2"
                checked={selectedValue === "option2"}
                onChange={handleRadioChange}
              >
                일반회원
              </RadioButton>
              <RadioButton
                name="options"
                value="option3"
                checked={selectedValue === "option3"}
                onChange={handleRadioChange}
              >
                제휴공업사회원
              </RadioButton>
            </KeywordBox>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 이벤트 제공혜택 <br />
              <ContentsTitle style={{ marginLeft: "0.9375rem", marginTop: "-0.625rem" }}>
                (할인권정 선택)
              </ContentsTitle>
            </ContentsTitle>
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
              <KeywordBox style={{ marginTop: "0.3125rem" }}>
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
          </ContentsBox>
          <Line />
          <SaveButton>확인</SaveButton>
          <EventModifyButton>이벤트 수정</EventModifyButton>
        </Contents>
      </PopupContainer>
    </Overlay>
  );
};
const SaveButton = styled.button`
  width: 8.125rem;
  height: 2.5rem;
  border: 0;
  background-color: #558ed5;
  color: white;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: bold;
  margin-left: 11rem;
`;
const EventModifyButton = styled.button`
  width: 8.125rem;
  height: 2.5rem;
  border: 0;
  background-color: #558ed5;
  color: white;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: bold;
  margin-left: 0.625rem;
`;

const RadioBox = styled.div`
  width: 4.1875rem;
  height: 2.0625rem;
  background-color: #91bff9;
  text-align: center;
  line-height: 2.0625rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin-left:0.5rem;
`;
const Text1 = styled.div`
  margin-right: 0.375rem;
  margin-left: 0.3125rem;
`;
const DatePickerWrapper = styled.div`
  width: 5.5rem;
`;
const KeyWordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 20.625rem;
  flex-direction: row;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 3.125rem;
  height: 1.9375rem;
  border: 1px solid #999999;
  background-color: white;
  border-radius: 0.25rem;
`;
const Input = styled.input`
  width: 18.25rem;
  height: 1.5rem;
  margin-top:0.4rem;
`;
const KeywordBox = styled.div`
  display: flex;
  width: 18.7rem;
  flex-direction: row;
`;
const ContentsTitle = styled.div`
  font-size: 0.845rem;
  width: 7rem;
  font-weight: bold;
  line-height: 2.1875rem;
`;
const Required = styled.span`
  color: red;
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 28.5rem;
  justify-content: space-between;
  margin-bottom: 0.625rem;
`;
const Contents = styled.div`
  margin: auto;
  width: 28.5rem;
  height: auto;
`;
const Line = styled.div`
  border-top: 1px solid #cecece;
  width: 28.75rem;
  margin-bottom: 1.25rem;
`;
const PageTitle = styled.div`
  font-size: 1.1875rem;
  text-align: center;
  margin-bottom: 0.6875rem;
  font-weight: bold;
`;
const StyledButton = styled.button`
  width: 4.375rem;
  height: 1.875rem;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
`;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 28.125rem;
  height: 3.3125rem;
  background-color: black;
  color: white;
  margin: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin-bottom: 1.25rem;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-41%, -50%);
  padding: 0.625rem;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
const CloseButton = styled.button`
  background: #838383;
  color: white;
  line-height: 1.5rem;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  width: 3.375rem;
  height: 1.5rem;
  margin-top: 0.875rem;
`;
const Title = styled.div`
  font-size: 1.0625rem;
  font-weight: bold;
  line-height: 3.3125rem;
`;
export default EventManagePopup;
