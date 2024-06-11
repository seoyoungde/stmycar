import React from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

interface TableProps {
  headers: string[];
  data: Array<Array<any>>;
  width?: string;
  headerStyles?: SerializedStyles;
  cellStyles?: SerializedStyles;
  onRowClick?: (index: number) => void;
  renderCell?: (
    data: any,
    rowIndex: number,
    cellIndex: number
  ) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({
  headers,
  data,
  width,
  onRowClick,
  headerStyles,
  cellStyles,
  renderCell,
}) => {
  return (
    <StyledTable width="73rem">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTableHeader key={index} headerStyles={headerStyles}>
              {header}
            </StyledTableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <StyledTableRow key={rowIndex} onClick={() => onRowClick?.(rowIndex)}>
            {row.map((cell, cellIndex) => (
              <StyledTableCell key={cellIndex} cellStyles={cellStyles}>
                {renderCell ? renderCell(cell, rowIndex, cellIndex) : cell}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table<{ width?: string }>`
  border-collapse: collapse;
  width: ${(props) => props.width || "100%"};
`;
const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #efefef;
  }
`;
const StyledTableHeader = styled.th<{ headerStyles?: SerializedStyles }>`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #cecece;
  ${({ headerStyles }) => headerStyles || ""};
`;

const StyledTableCell = styled.td<{ cellStyles?: SerializedStyles }>`
  text-align: center;
  border: 1px solid #ddd;


  ${({ cellStyles }) => cellStyles || ""};
`;
export default Table;
