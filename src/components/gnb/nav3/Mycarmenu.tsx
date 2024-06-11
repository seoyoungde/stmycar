import React from "react";
import styled from "@emotion/styled";
import MycarCategoryDetailBox from "./box/MycarCategoryDetailBox";
import MycarCategoryBox from "./box/MycarCategoryBox";
import { FaCaretRight } from "react-icons/fa";

const Mycarmenu = () => {
  return (
    <PageContainer>
      <MycarCategoryContainer>
        <Header>
          <MycarmenuTitle>
            ∙ 1ST 마이카 웹 사이트 카테고리 메뉴 관리
          </MycarmenuTitle>
        </Header>
        <MycarCategoryBox />
      </MycarCategoryContainer>

      <DirectionBox>
        <FaCaretRight
          color="#DCDDDE"
          size="30"
          style={{ marginTop: "6.875rem", marginLeft: "-0.1875rem" }}
        />
      </DirectionBox>
      <CategoryDetailContainer>
        <DetailTitle>∙ 카테고리 정보 상세 보기</DetailTitle>
        <MycarCategoryDetailBox />
      </CategoryDetailContainer>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const MycarmenuTitle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-bottom: 0.9375rem;
`;
const MycarCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;
const CategoryDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const DetailTitle = styled.div`
  font-size: 1.0625rem;
  font-weight: bold;
  margin-bottom: 0.875rem;
`;
const DirectionBox = styled.div`
  width: 1.1875rem;
  height: 15.75rem;
  background-color: #f8f8f8;
  border: 1px solid #eaeaea;
  margin: auto;
`;
export default Mycarmenu;
