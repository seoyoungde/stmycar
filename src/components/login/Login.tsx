import React from "react";
import styled from "@emotion/styled";

const Login = () => {
  return (
    <>
      <PageContainer>
        <LoginSection>
          <LoginContent>
            <LoginTitle>통합관리자 로그인</LoginTitle>
            <DividerWrapper>
              <HorizontalDivider />
            </DividerWrapper>
            <InputWrapper>
              <LabelBox>
                <IdInputWrapper>
                  <Label>아이디</Label>
                  <InputField />
                </IdInputWrapper>
                <PasswordInputWrapper>
                  <Label>비밀번호</Label>
                  <InputField type="password" />
                </PasswordInputWrapper>
              </LabelBox>
              <LoginButton>로그인</LoginButton>
            </InputWrapper>
            <OptionsWrapper>
              <KeepLoggedInOption>
                <CheckBox type="checkbox" />
                <StyledText>로그인 상태 유지</StyledText>
              </KeepLoggedInOption>
              <RecoveryOptions>
                <Link>아이디 찾기</Link>
                <Separator>|</Separator>
                <Link>비밀번호 찾기</Link>
              </RecoveryOptions>
            </OptionsWrapper>
            <DividerWrapper>
              <HorizontalDivider />
            </DividerWrapper>
            <AdminInfo>
              <StyledText2>
                로그인이 계속되지 않거나 문제가 발생한 <br />
                경우, 관리자에게 문의하세요
              </StyledText2>
              <AdminLink>관리자 등록</AdminLink>
            </AdminInfo>
          </LoginContent>
        </LoginSection>
        <CopyrightText>
          Copyright @ BioBiz Corp. All rights reserved.
        </CopyrightText>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  width: 76.75rem;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const LoginSection = styled.div`
  width: 45.0625rem;
  height: 24rem;
  margin: auto;
  border: 0.0625rem solid #a3a3a3;
  display: flex;
  flex-direction: column;
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.25rem;
  margin: auto;
`;

const LoginTitle = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
`;

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HorizontalDivider = styled.div`
  height: 1px;
  background-color: #a3a3a3;
  width: 33.25rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 26.3125rem;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  margin-bottom: 3.0625rem;
  margin-top: 2.625rem;
`;

const IdInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-right: 0.8125rem;
`;
const Label = styled.label`
  width: 6.0625rem;
  line-height: 2rem;
`;
const InputField = styled.input`
  width: 14.0625rem;
  height: 2rem;
  border: 1px solid #ccc;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled.button`
  width: 5.375rem;
  height: 4.375rem;
  background-color: #ff3737;
  border-radius: 0.625rem;
  color: white;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ca2a2a;
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 26.3125rem;
  margin: auto;
  margin-bottom: 3.0625rem;
`;

const KeepLoggedInOption = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  width: 1.125rem;
  height: 1.0625rem;
`;
const RecoveryOptions = styled.div`
  display: flex;
  align-items: center;
`;
const StyledText = styled.div`
  font-size: 0.875rem;
`;
const StyledText2 = styled.div`
  font-size: 0.9375rem;
  color: #797979;
`;
const Link = styled.a`
  color: #a3a3a3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.div`
  margin: 0 0.3125rem;
  color: #a3a3a3;
`;

const AdminInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const AdminLink = styled.a`
  color: black;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CopyrightText = styled.div`
  text-align: center;
  margin-top: 1.0625rem;
  font-size: 0.8125rem;
  color: #929292;
`;

export default Login;
