import React from "react";
import styled from "@emotion/styled";
import MyEditor from "../../Box/Quill";

const CRHistory = () => {
  return (
    <>
      <PageContainer>
        <CRhistoryTItle>∙ 회사연혁</CRhistoryTItle>
        <QuillBox>
          <MyEditor />
        </QuillBox>
      </PageContainer>
    </>
  );
};
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CRhistoryTItle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-left: 1.9375rem;
  margin-bottom: 0.9375rem;
`;
const QuillBox = styled.div`
  margin: auto;
  margin-left: 1.75rem;
`;

export default CRHistory;
