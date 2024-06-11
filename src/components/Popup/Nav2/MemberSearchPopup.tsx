import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import InfoPopup from "./InfoPopup";
import PointlistPopup from "./PointlistPopup";
import CouponlistPopup from "./CouponlistPopup";

interface MemberSearchPopupProps {
  onClose: () => void;
}

const MemberSearchPopup: React.FC<MemberSearchPopupProps> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState<
    "info" | "pointlist" | "couponlist"
  >("info");
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>홍길동(aaaa)회원정보</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>

        <Box width="64.1875rem">
          <Container>
            <Navigation>
              <NavItem
                isActive={activeSection === "info"}
                onClick={() => setActiveSection("info")}
              >
                개인정보
              </NavItem>
              <NavItem
                isActive={activeSection === "pointlist"}
                onClick={() => setActiveSection("pointlist")}
              >
                포인트내역
              </NavItem>
              <NavItem
                isActive={activeSection === "couponlist"}
                onClick={() => setActiveSection("couponlist")}
              >
                할인쿠폰내역
              </NavItem>
            </Navigation>
            {activeSection === "info" && <InfoPopup />}
            {activeSection === "pointlist" && <PointlistPopup />}
            {activeSection === "couponlist" && <CouponlistPopup />}
          </Container>
        </Box>
      </PopupContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-41%, -55%);
  padding: 0.625rem;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const CloseButton = styled.button`
  background: #838383;
  color: white;
  line-height: 1.5rem;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  width: 3.375rem;
  height: 1.5rem;
  margin-top: 0.875rem;
`;
const Title = styled.div`
  font-size: 1.0625rem;
  font-weight: bold;
  line-height: 3.3125rem;
`;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 62.9375rem;
  height: 3.3125rem;
  background-color: black;
  color: white;
  margin: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin-bottom: 1.25rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 64.1875rem;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;
const NavItem = styled.button<{ isActive: boolean }>`
  background: ${(props) => (props.isActive ? "#B3B3B3" : "white")};
  border: 1px solid #cecece;
  cursor: pointer;
  font-size: 1.125rem;
  width: 21.1875rem;
  height: 2.1875rem;
`;
export default MemberSearchPopup;
