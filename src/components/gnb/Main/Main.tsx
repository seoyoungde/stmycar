import React from "react";
import styled from "@emotion/styled";
import MainTable1 from "./MainTable/MainTable1";
import MainTable2 from "./MainTable/MainTable2";
import MainTable3 from "./MainTable/MainTable3";
import MainTable4 from "./MainTable/MainTable4";
import MainTable5 from "./MainTable/MainTable5";
import MainTable6 from "./MainTable/MainTable6";

const Main = () => {
  return (
    <Container>
      <MainTable1 />
      <MainTable2 />
      <MainTable3 />
      <MainTable4 />
      <MainTable5 />
      <MainTable6 />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export default Main;
