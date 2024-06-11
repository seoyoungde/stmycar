import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const LoginLeftbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar>
        <NavTitle>로그인</NavTitle>
        <NavItem
          className="loginpage"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </NavItem>
        <NavItem
          className="idsearchpage"
          onClick={() => {
            navigate("/idsearch");
          }}
        >
          아이디찾기
        </NavItem>
        <NavItem
          className="idsearchpage"
          onClick={() => {
            navigate("/idsearch");
          }}
        >
          비밀번호찾기
        </NavItem>
      </Sidebar>
    </>
  );
};
const Sidebar = styled.div`
  color: black;
  width: 213px;
  height: 752px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-right: 1px solid #a3a3a3;
`;
const NavTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 17px;
  border-bottom: 1px solid black;
  width: 213px;
`;
const NavItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
  margin-bottom: 14px;
  margin-left: 46px;
  &:hover {
    font-weight: bold;
  }
`;

export default LoginLeftbar;
