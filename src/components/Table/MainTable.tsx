import React from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

interface MainTableProps {
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

const MainTable: React.FC<MainTableProps> = ({
  headers,
  data,
  width,
  onRowClick,
  headerStyles,
  cellStyles,
  renderCell,
}) => {
  const columnWidth = `calc(${width || "100%"} / ${headers.length})`;

  return (
    <StyledTable width={width}>
      <thead>
        <StyledTableRow>
          {headers.map((header, index) => (
            <StyledTableHeader
              key={index}
              columnWidth={columnWidth}
              headerStyles={headerStyles}
            >
              {header}
            </StyledTableHeader>
          ))}
        </StyledTableRow>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <StyledTableRow key={rowIndex} onClick={() => onRowClick?.(rowIndex)}>
            {row.map((cell, cellIndex) => (
              <StyledTableCell
                key={cellIndex}
                columnWidth={columnWidth}
                cellStyles={cellStyles}
              >
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
  table-layout: fixed;
  border-top: 1px solid #cecece;
  width: ${(props) => props.width || "100%"};
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #efefef;
  }
`;

const StyledTableHeader = styled.th<{
  columnWidth: string;
  headerStyles?: SerializedStyles;
}>`
  padding: 8px;
  text-align: center;
  border: 1px solid #cecece;
  width: ${(props) => props.columnWidth};
  ${({ headerStyles }) => headerStyles || ""};
`;

const StyledTableCell = styled.td<{
  columnWidth: string;
  cellStyles?: SerializedStyles;
}>`
  text-align: center;
  border: 1px solid #cecece;
  width: ${(props) => props.columnWidth};
  ${({ cellStyles }) => cellStyles || ""};
`;

export default MainTable;
