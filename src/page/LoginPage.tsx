import React from "react";
import styled from "@emotion/styled";
import Login from "../components/login/Login";
import LoginLeftbar from "../components/leftbar/LoginLeftbar";

const LoginPage = () => {
  return (
    <>
      <PageContainer>
        <Section>
          <LoginLeftbar />
          <Login />
        </Section>
      </PageContainer>
    </>
  );
};
const PageContainer = styled.div`
  display: flex;
  height: auto;
  width: 1440px;
  margin: auto;
  border: 1px solid #a3a3a3;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;
export default LoginPage;
