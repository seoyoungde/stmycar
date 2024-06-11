import React from "react";
import styled from "@emotion/styled";
import Main from "../gnb/Main/Main";

const MainLeftbar: React.FC = () => {
  return (
    <Sidebar>
      <Nav1TabContainer>
        <Nav1title>전체운영현황</Nav1title>
      </Nav1TabContainer>

      <Main />
    </Sidebar>
  );
};

const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 1440px;
  margin: auto;
  border: 1px solid #a3a3a3;
  border-top: 0px;
  margin-bottom: 50px;
`;
const Nav1title = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 17px;
  border-bottom: 1px solid black;
  width: 213px;
`;
const Nav1TabContainer = styled.div`
  color: black;
  width: 213px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-right: 1px solid #a3a3a3;
`;

export default MainLeftbar;
