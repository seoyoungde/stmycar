import React, { useState } from "react";
import styled from "@emotion/styled";
import CarList from "../../gnb/nav3/CarList";
import CategoryList from "../../gnb/nav3/CategoryList";

const Nav3Leftbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<String>("Tab1");
  const renderContent = () => {
    switch (activeTab) {
      case "Tab1":
        return <CategoryList />;
      case "Tab2":
        return <CarList />;
      default:
        return null;
    }
  };
  return (
    <Sidebar>
      <Box>
        <Container>
          <Title>카테고리 관리</Title>
          <Line />
          <Tabs>
            <Tab
              onClick={() => setActiveTab("Tab1")}
              as={activeTab === "Tab1" ? ActiveTab : undefined}
            >
              카테고리목록관리
            </Tab>
            <Tab
              onClick={() => setActiveTab("Tab2")}
              as={activeTab === "Tab2" ? ActiveTab : undefined}
            >
              차량제원항목관리
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
  font-wieght: bold;
`;
const Content = styled.div`

`;
export default Nav3Leftbar;
