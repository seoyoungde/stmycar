import React from "react";
import styled from "@emotion/styled";

const StyledCheckbox = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  return (
    <CheckboxLabel>
      <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
