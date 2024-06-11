import React, { useState } from "react";
import styled from "@emotion/styled";
import IdSearch from "./Search/IdSearch";
import PasswordSearch from "./Search/PasswordSearch";

const LoginSearch = () => {
  const [activeSection, setActiveSection] = useState<"id" | "password">("id");
  return (
    <>
      <PageContainer>
        <Navigation>
          <NavItem
            isActive={activeSection === "id"}
            onClick={() => setActiveSection("id")}
          >
            아이디 찾기
          </NavItem>
          <NavItem
            isActive={activeSection === "password"}
            onClick={() => setActiveSection("password")}
          >
            비밀번호 찾기
          </NavItem>
        </Navigation>

        {activeSection === "id" && <IdSearch></IdSearch>}

        {activeSection === "password" && <PasswordSearch></PasswordSearch>}
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
const Navigation = styled.div`
  display: flex;
  width: 33.25rem;
  margin: auto;
  justify-content: space-around;
  padding: 0.625rem;
  border-bottom: 1px solid gray;
`;

const NavItem = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.125rem;
  border-bottom: ${(props) => (props.isActive ? "2px solid #A10C0C" : "none")};
  }
`;

export default LoginSearch;
