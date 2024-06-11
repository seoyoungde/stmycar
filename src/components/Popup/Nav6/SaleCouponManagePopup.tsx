import React, { ForwardedRef, forwardRef, useState } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import RadioButton from "../../Button/RadioButton";

interface SaleCouponManagePopupProps {
  onClose: () => void;
}

const SaleCouponManagePopup: React.FC<SaleCouponManagePopupProps> = ({
  onClose,
}) => {
  const [moneyselectedValue, setMoneyselectedValue] = useState("option1");
  const handleRadioMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoneyselectedValue(e.target.value);
  };
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
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
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>쿠폰 등록 정보 확인</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <PageTitle>* 할인 쿠폰 등록 정보</PageTitle>

        <Line></Line>
        <PageContent>
          쿠폰(할인)등록은 1~2일 전에 미리 등록해 주시길바랍니다
        </PageContent>

        <Contents>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 쿠폰발행 방식
            </ContentsTitle>
            <KeywordBox>
              <select
                style={{
                  width: "20.625rem",
                  height: "2rem",
                  borderRadius: "0",
                }}
              >
                <option value="1">단독발행</option>
                <option value="2">확인중</option>
                <option value="3">미확인</option>
              </select>
            </KeywordBox>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 쿠폰 제목
            </ContentsTitle>
            <KeywordBox>
              <select
                style={{
                  width: "20.625rem",
                  height: "2rem",
                  borderRadius: "0",
                }}
              >
                <option value="1">수리비용 맞춰보세요!!!</option>
                <option value="2">확인중</option>
                <option value="3">미확인</option>
              </select>
            </KeywordBox>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 적용 기간
            </ContentsTitle>

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
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 쿠폰 금액(권종)
            </ContentsTitle>
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
            </KeywordBox2>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 쿠폰 이미지
            </ContentsTitle>
            <InputBox>
              <Input />
              <FileButton>첨부하기</FileButton>
            </InputBox>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
              <Required>*</Required> 쿠폰 적용 대상
            </ContentsTitle>
            <Input2 />
          </ContentsBox>
          <Line></Line>
          <SaveButton>등록정보 확인</SaveButton>
        </Contents>
      </PopupContainer>
    </Overlay>
  );
};
const KeyWordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  width: 16.875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SaveButton = styled.button`
  background-color: red;
  border: 0;
  color: white;
  border-radius: 0.375rem;
  width: 13.6875rem;
  height: 2.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  margin-left: 7.5rem;
  margin-top: 0.625rem;
`;
const RadioBox = styled.div`
  width: 3.9375rem;
  height: 2.0625rem;
  background-color: #91bff9;
  text-align: center;
  line-height: 2.0625rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin-right: 0.3125rem;
`;
const Input = styled.input`
  width: 11.875rem;
  height: 1.5625rem;
`;
const FileButton = styled.button`
  width: 4.1875rem;
  height: 1.9375rem;
  border: 0;
  background-color: #868686;
  color: white;
  border-radius: 0.125rem;
  font-size: 0.75rem;
`;
const Input2 = styled.input`
  width: 16.375rem;
  height: 1.5625rem;
  margin-top:0.4rem;
`;
const KeywordBox2 = styled.div`
  width: 16.875rem;
`;

const SubTitle = styled.div`
  font-size: 0.75rem;
  line-height: 2.1875rem;
`;
const Text1 = styled.div`
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  line-height: 1.875rem;
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
  border: 0;
  background-color: #c9c9c9;
  border-radius: 0.25rem;
`;
const DatePickerWrapper = styled.div``;
const StyledButton = styled.button`
  width: 7.5rem;
  height: 1.875rem;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
`;
const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;
const ContentsTitle = styled.div`
  font-size: 0.85rem;
  width: 6.6rem;
  font-weight: bold;
  line-height: 2.1875rem;
`;
const KeywordBox = styled.div`
  display: flex;
  width: 16.875rem;
  flex-direction: row;
`;
const Required = styled.span`
  color: red;
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 28.125rem;
  justify-content: space-between;
  margin-bottom: 0.625rem;
`;
const Contents = styled.div`
  margin: auto;
  width: 28.125rem;
  height: auto;
`;
const PageContent = styled.div`
  text-align: center;
  color: #636363;
  font-size: 0.8125rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
const Line = styled.div`
  border-top: 1px solid #cecece;
  width: 28.125rem;
`;
const PageTitle = styled.div`
  font-size: 1.1875rem;
  text-align: center;
  margin-bottom: 0.6875rem;
  font-weight: bold;
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
export default SaleCouponManagePopup;
