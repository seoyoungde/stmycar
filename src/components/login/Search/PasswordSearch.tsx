import React from "react";
import styled from "@emotion/styled";

const PasswordSearch = () => {
  return (
    <>
      <PageContainer>
        <PasswordSection>
          <LabelBox>
            <IdInputWrapper>
              <Label>아이디</Label>
              <InputField />
            </IdInputWrapper>
            <NameInputWrapper>
              <Label>관리자명</Label>
              <InputField />
              <SendButton>인증발송</SendButton>
            </NameInputWrapper>
            <EmailInputWrapper>
              <Label>관리자이메일</Label>
              <InputField />
              <SendNumButton>인증확인</SendNumButton>
            </EmailInputWrapper>
          </LabelBox>
          <ConfirmButton>확인</ConfirmButton>
        </PasswordSection>
      </PageContainer>
    </>
  );
};
const PageContainer = styled.div`
  display: flex;
  margin: auto;
`;
const PasswordSection = styled.div`
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
const IdInputWrapper = styled.div`
  margin-top: 1.5625rem;
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
const NameInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export default PasswordSearch;
