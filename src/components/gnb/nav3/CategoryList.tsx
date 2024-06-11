import React, { useState } from "react";
import styled from "@emotion/styled";
import CRmenu from "./CRmenu";
import Mycarmenu from "./Mycarmenu";

const CategoryList = () => {
  const [activeSection, setActiveSection] = useState<"crMenu" | "mycarMenu">(
    "crMenu"
  );
  return (
    <PageContainer>
      <CategoryListContainer>
        <Navigation>
          <NavItem
            isActive={activeSection === "crMenu"}
            onClick={() => setActiveSection("crMenu")}
          >
            (주)창래 홈페이지 메뉴관리
          </NavItem>
          <NavItem
            isActive={activeSection === "mycarMenu"}
            onClick={() => setActiveSection("mycarMenu")}
          >
            일급 마이카 메뉴관리
          </NavItem>
        </Navigation>
        {activeSection === "crMenu" && <CRmenu />}
        {activeSection === "mycarMenu" && <Mycarmenu />}
      </CategoryListContainer>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  margin-top: 0.75rem;
  margin-left: 1.875rem;
  display: flex;
  flex-direction: column;
`;
const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`;
const NavItem = styled.button<{ isActive: boolean }>`
background:${(props) => (props.isActive ? "#EFEFEF" : "none")};
color:${(props) => (props.isActive ? "red" : "none")};
border:1px solid #E2E2E2;
cursor:pointer;
font-size:1rem;
width:14.4375rem;
height:2.4375rem;
font-weight:${(props) => (props.isActive ? "bold" : "none")};
}
`;
export default CategoryList;
