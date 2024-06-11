import React from "react";
import styled from "@emotion/styled";

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}
const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  children,
}) => (
  <RadioLabel>
    <CustomRadio
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {children}
  </RadioLabel>
);

const RadioLabel = styled.label`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`;
const CustomRadio = styled.input`
  appearance: none;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;

  position: relative;
  cursor: pointer;
  outline: none;

  &:checked {
    background-color: white;
    border: 2px solid #edbdba;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.5rem;
    height: 0.5rem;
    background-color: red;
    border-radius: 50%;
  }
`;
export default RadioButton;
