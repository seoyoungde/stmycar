import React, { useState } from "react";
import styled from "@emotion/styled";
import MemberQuitBox from "./box/MemberQuitBox";
import MemberQuitTable from "./table/MemberQuitTable";
import CompanyQuitTable from "./table/CompanyQuitTable";

const MemberQuit = () => {
  const [activeSection, setActiveSection] = useState<
    "userQuit" | "companyQuit"
  >("userQuit");
  return (
    <PageContainer>
      <MemberQuitBox />
      <MemberQuitContainer>
        <Navigation>
          <NavItem
            isActive={activeSection === "userQuit"}
            onClick={() => setActiveSection("userQuit")}
          >
            일반회원 탈퇴 목록
          </NavItem>
          <NavItem
            isActive={activeSection === "companyQuit"}
            onClick={() => setActiveSection("companyQuit")}
          >
            제휴공업사 탈퇴 목록
          </NavItem>
        </Navigation>
        <Line />
        {activeSection === "userQuit" && <MemberQuitTable />}
        {activeSection === "companyQuit" && <CompanyQuitTable />}
      </MemberQuitContainer>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberQuitContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 78px;
  width: 1167px;
  margin-left: 28px;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  margin: auto;
`;
const NavItem = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: ${(props) => (props.isActive ? "bold" : "none")};
  text-decoration:${(props) => (props.isActive ? "underline" : "none")};
  }
`;
const Line = styled.div`
  width: 400px;
  border-top: 1px solid black;
  margin: auto;
  margin-top: 10px;
`;
export default MemberQuit;
