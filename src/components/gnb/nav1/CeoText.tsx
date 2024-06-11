import React from "react";
import styled from "@emotion/styled";
import MyEditor from "../../Box/Quill";

const CeoText = () => {
  return (
    <>
      <PageContainer>
        <CeotextTitle>∙ 대표인사말</CeotextTitle>
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
const CeotextTitle = styled.div`
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
export default CeoText;
