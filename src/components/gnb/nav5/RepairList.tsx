import React from "react";
import styled from "@emotion/styled";
import RepairListTable from "./Nav5Table/RepairListTable";
import RepairListBox from "./Nav5Box/RepairListBox";
import RepairListNumBox from "./Nav5Box/RepairListNumBox";

const RepairList = () => {
  return (
    <>
      <RepairListBox />
      <RepairListNumBox />
      <RepairListTable />
    </>
  );
};

export default RepairList;
