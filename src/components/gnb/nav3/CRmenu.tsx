import React from "react";
import styled from "@emotion/styled";
import { FaCaretRight } from "react-icons/fa";
import CategoryDetailBox from "./box/CategoryDetailBox";
import CRCategoryBox from "./box/CRCategoryBox";

const CRmenu: React.FC = () => {
  return (
    <PageContainer>
      <CRCategoryContainer>
        <Header>
          <CRmenuTitle>∙ (주)창래 홈페이지 GNB 카테고리 관리</CRmenuTitle>
        </Header>
        <CRCategoryBox />
      </CRCategoryContainer>
      <DirectionBox>
        <FaCaretRight
          color="#DCDDDE"
          size="30"
          style={{ marginTop: "6.875rem", marginLeft: "-0.1875rem" }}
        />
      </DirectionBox>
      <CategoryDetailContainer>
        <DetailTitle>∙ 카테고리 정보 상세 보기</DetailTitle>
        <CategoryDetailBox />
      </CategoryDetailContainer>
    </PageContainer>
  );
};
const DirectionBox = styled.div`
  width: 1.1875rem;
  height: 15.75rem;
  background-color: #f8f8f8;
  border: 1px solid #eaeaea;
  margin: auto;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const CRmenuTitle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-bottom: 0.9375rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const CRCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
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
export default CRmenu;
