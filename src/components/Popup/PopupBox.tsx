import React from "react";
import styled from "@emotion/styled";

interface PopupBoxProps {
  children?: React.ReactNode;
  width?: string;
}

const StyledBox = styled.table<PopupBoxProps>`
  border-collapse: collapse;
  border-top: 1px solid #cecece;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const Box: React.FC<PopupBoxProps> = ({ children, width }) => (
  <StyledBox width={width}>
    <tbody>{children}</tbody>
  </StyledBox>
);

const StyledBoxRow = styled.tr`
  height: 40px;
  border-right: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
`;

interface PopupBoxRowProps {
  isEven?: boolean;
  children?: React.ReactNode;
}

export const BoxRow: React.FC<PopupBoxRowProps> = ({ children }) => (
  <StyledBoxRow>{children}</StyledBoxRow>
);

const StyledBoxCell = styled.td`
  padding: 8px;
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
`;

interface PopupBoxCellProps {
  children?: React.ReactNode;
  height?: string;
  width?: string;
}

export const TableCell: React.FC<PopupBoxCellProps> = ({
  children,
  height,
  width,
}) => (
  <StyledBoxCell height={height} width={width}>
    {children}
  </StyledBoxCell>
);

export const LabelCell: React.FC<PopupBoxCellProps> = ({ children }) => (
  <StyledBoxCell
    style={{
      backgroundColor: "#efefef",
      fontSize: "14px",
      width: "140px",
      borderRight: "0",
    }}
  >
    {children}
  </StyledBoxCell>
);

export const InputCell: React.FC<PopupBoxCellProps> = ({
  children,
  height,
  width,
}) => (
  <StyledBoxCell
    style={{
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
    }}
    height={height}
    width={width}
  >
    {children}
  </StyledBoxCell>
);
