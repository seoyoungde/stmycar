import React from "react";
import styled from "@emotion/styled";
import NumBox, { NumBoxField } from "../../../Box/NumBox";

const formFields: NumBoxField[] = [
  { label: "견적신청", value: "1000건" },
  { label: "입고예약", value: "500건" },
  { label: "수리진행 중", value: "500건" },
  { label: "이용후기등록건", value: "500건" },
];
const formFields2: NumBoxField[] = [
  { label: "견적ok", value: "1000건" },
  { label: "입고예약ok", value: "500건" },
  { label: "수리완료", value: "500건" },
  { label: "수리누적금액", value: "500건" },
];
const RepairListNumBox = () => {
  return (
    <div>
      <Title>∙ 사고수리 견적/입고예약/수리완료 현황</Title>
      <RepairSection>
        <RepairBox>사고수리</RepairBox>
        <ExteriorRepairBox>외장수리</ExteriorRepairBox>
      </RepairSection>
      <InfoBox>
        <NumBox fields={formFields} />
      </InfoBox>
      <InfoBox>
        <NumBox fields={formFields2} />
      </InfoBox>
    </div>
  );
};
const RepairSection = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.5rem;
  margin-left: 1.75rem;
  margin-bottom: 0.375rem;
`;
const RepairBox = styled.button`
  width: 4.5rem;
  height: 1.5rem;
  border: 1px solid black;
  border-radius: 0.1875rem;
  margin-right: 0.3125rem;
  background-color: white;
  &:hover {
    background-color: gray;
    color: white;
  }
`;
const ExteriorRepairBox = styled.button`
  width: 4.5rem;
  height: 1.5rem;
  border: 1px solid black;
  border-radius: 0.1875rem;
  background-color: white;
  &:hover {
    background-color: gray;
    color: white;
  }
`;
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: 1rem;
`;
const Title = styled.div`
  font-size: 1.0625rem;
  margin-top: 1.8125rem;
  margin-left: 1.9375rem;
  margin-bottom: 0.9375rem;
`;
export default RepairListNumBox;
