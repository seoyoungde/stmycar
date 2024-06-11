import React, { useState } from "react";
import styled from "@emotion/styled";
import NoticeManage from "../../gnb/nav7/NoticeManage";
import Onebyone from "../../gnb/nav7/Onebyone";
import Complain from "../../gnb/nav7/Complain";
import FAQManage from "../../gnb/nav7/FAQManage";
import TermManage from "../../gnb/nav7/TermManage";
import Suggest from "../../gnb/nav7/Suggest";

const Nav7Leftbar = () => {
  const [activeTab, setActiveTab] = useState<String>("Tab1");
  const renderContent = () => {
    switch (activeTab) {
      case "Tab1":
        return <NoticeManage />;
      case "Tab2":
        return <Onebyone />;
      case "Tab3":
        return <Complain />;
      case "Tab4":
        return <Suggest />;
      case "Tab5":
        return <FAQManage />;
      case "Tab6":
        return <TermManage />;
      default:
        return null;
    }
  };
  return (
    <Sidebar>
      <Box>
        <Container>
          <Title>고객센터관리</Title>
          <Line />
          <Tabs>
            <Tab
              onClick={() => setActiveTab("Tab1")}
              as={activeTab === "Tab1" ? ActiveTab : undefined}
            >
              공지사항관리
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab2")}
              as={activeTab === "Tab2" ? ActiveTab : undefined}
            >
              1:1문의관리
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab3")}
              as={activeTab === "Tab3" ? ActiveTab : undefined}
            >
              신고관리
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab4")}
              as={activeTab === "Tab4" ? ActiveTab : undefined}
            >
              개선/제안/칭찬관리
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab5")}
              as={activeTab === "Tab5" ? ActiveTab : undefined}
            >
              FAQ관리
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab6")}
              as={activeTab === "Tab6" ? ActiveTab : undefined}
            >
              이용약관등관리
            </Tab>
          </Tabs>
        </Container>
      </Box>
      <Content>{renderContent()}</Content>
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
const Content = styled.div``;
export default Nav7Leftbar;
