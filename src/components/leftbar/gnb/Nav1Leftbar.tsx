import React, { useState } from "react";
import styled from "@emotion/styled";
import AdminList from "../../gnb/nav1/AdminList";
import AdminRegister from "../../gnb/nav1/AdminRegister";
import AdminInfo from "../../gnb/nav1/AdminInfo";
import CeoText from "../../gnb/nav1/CeoText";
import CRIntro from "../../gnb/nav1/CRIntro";
import CRHistory from "../../gnb/nav1/CRHistory";
import BICI from "../../gnb/nav1/BICI";
import ContactUs from "../../gnb/nav1/CantactUs";

const Nav1Leftbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<String>("Tab1");
  const renderContent = () => {
    switch (activeTab) {
      case "Tab1":
        return <AdminList />;
      case "Tab2":
        return <AdminRegister />;
      case "Tab3":
        return <AdminInfo />;
      case "Tab4":
        return <CeoText />;
      case "Tab5":
        return <CRIntro />;
      case "Tab6":
        return <CRHistory />;
      case "Tab7":
        return <BICI />;
      case "Tab8":
        return <ContactUs />;
      default:
        return null;
    }
  };
  return (
    <Sidebar>
      <Box>
        <Container>
          <Title>운영관리</Title>
          <Line></Line>
          <Tabs>
            <Tab
              onClick={() => setActiveTab("Tab1")}
              as={activeTab === "Tab1" ? ActiveTab : undefined}
            >
              관리자 목록
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab2")}
              as={activeTab === "Tab2" ? ActiveTab : undefined}
            >
              관리자 등록
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab3")}
              as={activeTab === "Tab3" ? ActiveTab : undefined}
            >
              관리자 정보변경
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab4")}
              as={activeTab === "Tab4" ? ActiveTab : undefined}
            >
              대표인사말
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab5")}
              as={activeTab === "Tab5" ? ActiveTab : undefined}
            >
              사업소개
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab6")}
              as={activeTab === "Tab6" ? ActiveTab : undefined}
            >
              회사연혁
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab7")}
              as={activeTab === "Tab7" ? ActiveTab : undefined}
            >
              BI/CI
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab8")}
              as={activeTab === "Tab8" ? ActiveTab : undefined}
            >
              Contact us
            </Tab>
          </Tabs>
        </Container>
      </Box>
      <Content>{renderContent()} </Content>
    </Sidebar>
  );
};
const Box = styled.div`
  border-right: 1px solid #a3a3a3;
  width: 14rem;
  height: auto;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 90rem;
  margin: auto;
  border: 1px solid #a3a3a3;
  border-top: 0rem;
`;
const Title = styled.div`
font-size: 1.1rem;
font-weight: bold;
width: 9rem;
  margin: auto;
  margin-top: 0;
  margin-bottom: 0;
`;
const Line = styled.div`
border-bottom: 1px solid black;
width: 14.2rem;
margin-bottom: 2.1rem;
margin-top: 1.1rem;
`;
const Container = styled.div`
width: 14rem;
height: 50.1rem;
color: black;
display: flex;
flex-direction: column;
padding-top: 1.3rem;
`;
const Tab = styled.button`
text-decoration: none;
color: black;
font-size: 1rem;
margin-bottom: 0.9rem;
background: transparent;
border: none;
curosr: pointer;
&:hover {
  font-weight: bold;
}
`;
const Tabs = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width:10rem;
margin: auto;
margin-top: 0;
`;

const ActiveTab = styled(Tab)`
  font-weight: bold;
`;
const Content = styled.div`

`;
export default Nav1Leftbar;
