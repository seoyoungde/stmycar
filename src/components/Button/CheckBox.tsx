import React from "react";
import styled from "@emotion/styled";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <Label>
      <Input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={disabled}
      />
      {label && <span>{label}</span>}
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 9rem;
`;

const Input = styled.input`
  cursor: pointer;
  accent-color: #007bff;
`;

export default Checkbox;
