import React, { useState } from "react";
import styled from "@emotion/styled";
import MyEditor from "../../Box/Quill";

const TermManage = () => {
  const [activeSection, setActiveSection] = useState<
    "list1" | "list2" | "list3" | "list4"
  >("list1");
  return (
    <PageContainer>
      <TermManageContainer>
        <Navigation>
          <NavItem
            isActive={activeSection === "list1"}
            onClick={() => setActiveSection("list1")}
          >
            이용약관
          </NavItem>
          <NavItem
            isActive={activeSection === "list2"}
            onClick={() => setActiveSection("list2")}
          >
            개인정보취급방침
          </NavItem>
          <NavItem
            isActive={activeSection === "list3"}
            onClick={() => setActiveSection("list3")}
          >
            위치정보제공동의
          </NavItem>
          <NavItem
            isActive={activeSection === "list4"}
            onClick={() => setActiveSection("list4")}
          >
            제3자정보제공동의
          </NavItem>
        </Navigation>
        <Line></Line>
        {activeSection === "list1" && <MyEditor />}
        {activeSection === "list2" && <MyEditor />}
        {activeSection === "list3" && <MyEditor />}
        {activeSection === "list4" && <MyEditor />}
      </TermManageContainer>
    </PageContainer>
  );
};
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-bottom: 1.25rem;
`;
const TermManageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 72.9375rem;
  margin-top: 1.875rem;
  margin-left: 1.6875rem;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40.625rem;
  margin-bottom: 0.625rem;
`;
const NavItem = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1875rem;

  font-weight: ${(props) => (props.isActive ? "bold" : "none")};
  }
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default TermManage;
