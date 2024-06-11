import React, { useState } from "react";
import styled from "@emotion/styled";
import EventManageTable from "./Nav6Table/EventManageTable";
import EventManageBox from "./Nav6Box/EventManageBox";
import Eventregister from "./EventRegister";

const EventManage = () => {
  const [activeSection, setActiveSection] = useState<
    "eventlist" | "eventregister"
  >("eventlist");
  return (
    <PageContainer>
      <EventManageContainer>
        <Navigation>
          <NavItem
            isActive={activeSection === "eventlist"}
            onClick={() => setActiveSection("eventlist")}
          >
            이벤트 목록 관리
          </NavItem>
          <NavItem
            isActive={activeSection === "eventregister"}
            onClick={() => setActiveSection("eventregister")}
          >
            이벤트 등록
          </NavItem>
        </Navigation>
        <Line></Line>
        {activeSection === "eventlist" && (
          <div>
            <EventManageBox />
            <EventManageTable />
          </div>
        )}
        {activeSection === "eventregister" && <Eventregister />}
      </EventManageContainer>
    </PageContainer>
  );
};
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-bottom: 1.25rem;
`;
const EventManageContainer = styled.div`
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
  width: 18.75rem;
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
export default EventManage;
