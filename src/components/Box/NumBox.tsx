import React from "react";
import styled from "@emotion/styled";

const DEFAULT_LABEL_WIDTH = 110;
const DEFAULT_VALUE_WIDTH = 143;
export interface NumBoxField {
  label: string;
  value: string;
}
interface NumBoxProps {
  fields: NumBoxField[];
  labelWidth?: number;
  valueWidth?: number;
}
interface CellProps {
  width: number;
}
const NumBox: React.FC<NumBoxProps> = ({
  fields,
  labelWidth = DEFAULT_LABEL_WIDTH,
  valueWidth = DEFAULT_VALUE_WIDTH,
}) => {
  return (
    <TableWrapper>
      {fields.map((field, index) => (
        <TableCell key={index}>
          <LabelCell width={labelWidth}>{field.label}:</LabelCell>
          <ValueCell width={valueWidth}>{field.value}</ValueCell>
        </TableCell>
      ))}
    </TableWrapper>
  );
};
const TableWrapper = styled.div`
  border: 1px solid #cecece;
  width: 72.9375rem;
  display: flex;
`;

const TableCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const LabelCell = styled.div<CellProps>`
  background-color: #efefef;
  padding: 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  width: ${({ width }) => `${width}px`};
`;

const ValueCell = styled.div<CellProps>`
  padding: 0.5rem;
  font-size: 0.875rem;
  width: ${({ width }) => `${width}px`};
`;
export default NumBox;
