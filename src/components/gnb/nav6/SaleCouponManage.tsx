import React, { useState } from "react";
import styled from "@emotion/styled";
import SaleCouponManageBox from "./Nav6Box/SaleCouponManageBox";
import SaleCouponManageTable from "./Nav6Table/SaleCouponManageTable";
import SaleCouponRegister from "./SaleCouponRegister";

const SaleCouponManage = () => {
  const [activeSection, setActiveSection] = useState<
    "couponlist" | "couponregister"
  >("couponlist");
  return (
    <PageContainer>
      <EventManageContainer>
        <Navigation>
          <NavItem
            isActive={activeSection === "couponlist"}
            onClick={() => setActiveSection("couponlist")}
          >
            할인 쿠폰 목록
          </NavItem>
          <NavItem
            isActive={activeSection === "couponregister"}
            onClick={() => setActiveSection("couponregister")}
          >
            할인 쿠폰 등록
          </NavItem>
        </Navigation>
        <Line></Line>
        {activeSection === "couponlist" && (
          <div>
            <SaleCouponManageBox />
            <SaleCouponManageTable />
          </div>
        )}
        {activeSection === "couponregister" && <SaleCouponRegister />}
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
export default SaleCouponManage;
