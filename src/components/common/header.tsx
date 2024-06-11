import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div style={{ fontSize: "1.625rem", fontWeight: "bold" }}>
          <NavLink2 to="/mainpage">일급마이카</NavLink2>
        </div>
        <Nav>
          <NavLink to="/nav1">운영관리</NavLink>
          <NavLink to="/nav2">회원관리</NavLink>
          <NavLink to="/nav3">카테고리관리</NavLink>
          <NavLink to="/nav4">견적/예약관리</NavLink>
          <NavLink to="/nav5">사고수리정보관리</NavLink>
          <NavLink to="/nav6">이벤트/홍보관리</NavLink>
          <NavLink to="/nav7">고객센터</NavLink>
          <NavLink to="/nav8">통계관리</NavLink>
        </Nav>
        <NavLogin>
          <NavLink to="/login">로그아웃</NavLink>
          <div>2024.05.01</div>
        </NavLogin>
      </HeaderContainer>
    </>
  );
};
const HeaderContainer = styled.header`
  border-bottom: 1px solid black;
  color: black;
  width: 90rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3.4375rem;
  font-size: 1rem;
  font-weight: bold;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const NavLink2 = styled(Link)`
  color: black;
  text-decoration: none;
`;
const NavLogin = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
  height: 3.625rem;
  padding-left: 1.25rem;
  padding-top: 1.625rem;
  font-size: 0.8125rem;
`;
export default Header;
