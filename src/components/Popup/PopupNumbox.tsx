import React from "react";
import styled from "@emotion/styled";

const DEFAULT_LABEL_WIDTH = 110;
const DEFAULT_VALUE_WIDTH = 143;

export interface PopupNumBoxField {
  label: string;
  value: string;
}

interface PopupNumBoxProps {
  fields: PopupNumBoxField[];
  labelWidth?: number;
  valueWidth?: number;
  tableWidth?: number;
}

interface CellProps {
  width: number;
}

const PopupNumBox: React.FC<PopupNumBoxProps> = ({
  fields,
  labelWidth = DEFAULT_LABEL_WIDTH,
  valueWidth = DEFAULT_VALUE_WIDTH,
  tableWidth = 1167,
}) => {
  return (
    <TableWrapper width={tableWidth}>
      {fields.map((field, index) => (
        <TableCell key={index}>
          <LabelCell width={labelWidth}>{field.label}:</LabelCell>
          <ValueCell width={valueWidth}>{field.value}</ValueCell>
        </TableCell>
      ))}
    </TableWrapper>
  );
};

const TableWrapper = styled.div<{ width: number }>`
  border: 1px solid #cecece;
  display: flex;
  flex-direction: row;
  width: ${({ width }) => `${width}px`};
`;

const TableCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const LabelCell = styled.div<CellProps>`
  background-color: #efefef;
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
  width: ${({ width }) => `${width}px`};
`;

const ValueCell = styled.div<CellProps>`
  padding: 8px;
  font-size: 14px;
  width: ${({ width }) => `${width}px`};
`;

export default PopupNumBox;
