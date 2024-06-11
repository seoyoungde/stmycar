import React, { useState } from "react";
import styled from "@emotion/styled";
import MemberSearchTable from "./table/MemberSearchTable";
import MemberTableBox from "./box/MemberSearchBox";

const MemberSearch: React.FC = () => {
  return (
    <>
      <MemberTableBox />
      <MemberSearchTable />
    </>
  );
};

export default MemberSearch;
