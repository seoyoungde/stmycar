import React, { useState } from "react";
import styled from "@emotion/styled";
import MemberSearch from "../../gnb/nav2/MemberSearch";
import CenterMember from "../../gnb/nav2/CenterMember";
import MemberQuit from "../../gnb/nav2/MemberQuit";
import RepairManage from "../../gnb/nav2/RepairManage";
import ExperieceGroup from "../../gnb/nav2/ExperienceGroup";
import RegularCenter from "../../gnb/nav2/RegularCenter";
import { BoxRow } from "../../Box/Box";

const Nav2Leftbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<String>("Tab1");
  const renderContent = () => {
    switch (activeTab) {
      case "Tab1":
        return <MemberSearch />;
      case "Tab2":
        return <CenterMember />;
      case "Tab3":
        return <MemberQuit />;
      case "Tab4":
        return <RepairManage />;
      case "Tab5":
        return <ExperieceGroup />;
      case "Tab6":
        return <RegularCenter />;
      default:
        return null;
    }
  };
  return (
    <Sidebar>
      <Box>
        <Container>
          <Title>회원 관리</Title>
          <Line />
          <Tabs>
            <Tab
              onClick={() => setActiveTab("Tab1")}
              as={activeTab === "Tab1" ? ActiveTab : undefined}
            >
              일반회원목록
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab2")}
              as={activeTab === "Tab2" ? ActiveTab : undefined}
            >
              공업사 회원목록
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab3")}
              as={activeTab === "Tab3" ? ActiveTab : undefined}
            >
              회원탈퇴목록
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab4")}
              as={activeTab === "Tab4" ? ActiveTab : undefined}
            >
              사고수리이력관리
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab5")}
              as={activeTab === "Tab5" ? ActiveTab : undefined}
            >
              체험단모집/관리
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab6")}
              as={activeTab === "Tab6" ? ActiveTab : undefined}
            >
              단골공업사관리
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
export default Nav2Leftbar;
