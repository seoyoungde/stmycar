import React from "react";
import styled from "@emotion/styled";

const StyledBox = styled.table`
  width: 72.9375rem;
  border-collapse: collapse;
`;

interface BoxProps {
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children }) => (
  <StyledBox>
    <tbody>{children}</tbody>
  </StyledBox>
);

const StyledBoxRow = styled.tr`
  height: 2.4375rem;
  width: 72.9375rem;
`;

interface BoxRowProps {
  isEven?: boolean;
  children?: React.ReactNode;
}

export const BoxRow: React.FC<BoxRowProps> = ({ children, isEven }) => (
  <StyledBoxRow>{children}</StyledBoxRow>
);

const StyledBoxCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #cecece;
  border-top: 0;
`;

interface BoxCellProps {
  children?: React.ReactNode;
}

export const TableCell: React.FC<BoxCellProps> = ({ children }) => (
  <StyledBoxCell>{children}</StyledBoxCell>
);

export const LabelCell: React.FC<BoxCellProps> = ({ children }) => (
  <StyledBoxCell
    style={{
      backgroundColor: "#efefef",
      fontSize: "0.875rem",
      width: "6.625rem",
      borderRight: "0",
    }}
  >
    {children}
  </StyledBoxCell>
);

export const InputCell: React.FC<BoxCellProps> = ({ children }) => (
  <StyledBoxCell style={{ display: "flex", alignItems: "center" }}>
    {children}
  </StyledBoxCell>
);
