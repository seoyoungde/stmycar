import React from "react";
import styled from "@emotion/styled";

interface CarListBoxRowData {
  label: string;
  value: string;
  type: string;
  options?: string[];
}
const formFields: CarListBoxRowData[] = [
  { label: "구분", type: "select", value: "전체", options: ["국산", "수입차"] },
  {
    label: "상태",
    type: "select",
    value: "전체",
    options: ["노출", "대기", "비노출"],
  },
  {
    label: "검색",
    type: "select",
    value: "전체",
    options: ["생산지", "제조사", "모델"],
  },
];

const CarListBox: React.FC = () => {
  const topRowFields = formFields.slice(0, 2);
  const bottomRowField = formFields[2];
  return (
    <InfoBox>
      <InfoTableBox>
        <StyledTable>
          <tbody>
            <TableRow>
              {topRowFields.map((field, index) => (
                <FieldBox key={index}>
                  <LabelCell>{field.label}</LabelCell>
                  {field.type === "select" ? (
                    <StyledSelect value={field.value}>
                      {field.options?.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </StyledSelect>
                  ) : (
                    <ValueCell>{field.value}</ValueCell>
                  )}
                </FieldBox>
              ))}
            </TableRow>
            <TableRow>
              <FieldBox>
                <LabelCell>{bottomRowField.label}</LabelCell>
                <StyledSelect2 value={bottomRowField.value}>
                  {bottomRowField.options?.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </StyledSelect2>

                <StyledInput type="text" />
              </FieldBox>
            </TableRow>
          </tbody>
        </StyledTable>
      </InfoTableBox>
      <ButtonBox>
        <CarListSearchButton>검색</CarListSearchButton>
      </ButtonBox>
    </InfoBox>
  );
};
const StyledInput = styled.input`
  font-size: 0.875rem;
  width: 15rem;
  height: 1.07rem;
  margin: auto;
  margin-right: 9.5rem;
`;
const ButtonBox = styled.div`
  width: 4.8125rem;
  border: 1px solid #cecece;
  border-left: 0;
`;
const CarListSearchButton = styled.div`
  width: 3.75rem;
  height: 2.3125rem;
  margin-top: 1.0625rem;
  font-size: 0.8125rem;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 2.3125rem;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
`;
const InfoBox = styled.div`
  width: 72.9375rem;
  display: flex;
  flex-direction: row;
  margin-left: 1.875rem;
`;
const InfoTableBox = styled.div`
  width: 66.875rem;
`;
const StyledTable = styled.div`
  border-collapse: collapse;
  width: 100%;
`;
const TableRow = styled.div`
  display: flex;
  border: 1px solid #cecece;
  width: 66.875rem;
`;
const LabelCell = styled.div`
  background-color: #efefef;
  padding: 0.5rem;
  font-size: 0.875rem;
  width: 6.625rem;
`;
const ValueCell = styled.td`
  padding: 0.5rem;
  font-size: 0.875rem;
  width: 19.875rem;
`;
const StyledSelect = styled.select<{ value: string }>`
  font-size: 0.875rem;
  width: 15rem;
  height: 1.4375rem;
  margin: auto;
  margin-right: 9.5rem;
`;
const StyledSelect2 = styled.select<{ value: string }>`
  font-size: 0.875rem;
  width: 7rem;
  height: 1.4375rem;
  margin: auto;
`;
const FieldBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.875rem;
`;
export default CarListBox;
