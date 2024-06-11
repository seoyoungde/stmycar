import React from "react";
import styled from "@emotion/styled";

const IdSearch = () => {
  return (
    <>
      <PageContainer>
        <IdSection>
          <LabelBox>
            <NameInputWrapper>
              <Label>관리자명</Label>
              <InputField />
            </NameInputWrapper>
            <PhoneNumInputWrapper>
              <Label>관리자핸드폰번호</Label>
              <InputField />
              <SendButton>인증발송</SendButton>
            </PhoneNumInputWrapper>
            <NumberInputWrapper>
              <Label>인증번호</Label>
              <InputField />
              <SendNumButton>인증확인</SendNumButton>
            </NumberInputWrapper>
          </LabelBox>
          <ConfirmButton>확인</ConfirmButton>
        </IdSection>
      </PageContainer>
    </>
  );
};
const PageContainer = styled.div`
  display: flex;
  margin: auto;
`;
const IdSection = styled.div`
  width: 28.5rem;
  height: 18.25rem;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin: auto;
`;
const NameInputWrapper = styled.div`
  margin-top: 1.5625rem;
  display: flex;
  flex-direction: row;
`;
const PhoneNumInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const NumberInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Label = styled.label`
  width: 8.75rem;
  line-height: 2rem;
`;
const InputField = styled.input`
  width: 14.0625rem;
  height: 2rem;
  border: 1px solid #ccc;
`;
const SendButton = styled.div`
  width: 4.5rem;
  height: 2rem;
  background-color: #838383;
  border-radius: 0.375rem;
  color: white;
  text-align: center;
  line-height: 2rem;
  font-size: 1rem;
  margin-left: 0.875rem;
`;
const SendNumButton = styled.div`
  width: 4.5rem;
  height: 2rem;
  background-color: #838383;
  border-radius: 0.375rem;
  color: white;
  text-align: center;
  line-height: 2rem;
  font-size: 1rem;
  margin-left: 0.875rem;
`;
const ConfirmButton = styled.div`
  width: 25.0625rem;
  height: 2.5625rem;
  background-color: #ff3737;
  border-radius: 0.375rem;
  color: white;
  margin: auto;
  font-size: 1.125rem;
  text-align: center;
  line-height: 2.5625rem;
`;
export default IdSearch;
