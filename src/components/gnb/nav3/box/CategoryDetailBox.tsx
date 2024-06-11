import React, { useState } from "react";
import styled from "@emotion/styled";

interface CategoryDetailBoxRowData {
  label: string;
  type: string;
}
const formFields: CategoryDetailBoxRowData[] = [
  { label: "카테고리 메뉴명", type: "text" },
  { label: "해당 메뉴 노출", type: "radio" },
  { label: "하위 분류 노출", type: "radio" },
];

const CategoryDetailBox: React.FC = () => {
  const [menuVisibility, setMenuVisibility] = useState<
    "isvisible" | "unvisible"
  >("isvisible");
  const [subCategoryVisibility, setSubCategoryVisibility] = useState<
    "isvisible" | "unvisible"
  >("isvisible");

  const handleMenuVisibilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMenuVisibility(event.target.value as "isvisible" | "unvisible");
  };

  const handleSubCategoryVisibilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSubCategoryVisibility(event.target.value as "isvisible" | "unvisible");
  };
  return (
    <InfoBox>
      <InfoTableBox>
        <Table>
          <tbody>
            {formFields.slice(0, 5).map((field, index) => (
              <TableRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell>
                  {field.label === "카테고리 메뉴명" && (
                    <InputBox>
                      <Input />
                    </InputBox>
                  )}
                  {field.type === "radio" &&
                    field.label === "해당 메뉴 노출" && (
                      <SelectionBox>
                        <RadioContainer>
                          <RadioLabel>
                            <CustomRadio
                              type="radio"
                              name="menu-visibility"
                              value="isvisible"
                              checked={menuVisibility === "isvisible"}
                              onChange={handleMenuVisibilityChange}
                            />
                            노출
                          </RadioLabel>
                          <RadioLabel>
                            <CustomRadio
                              type="radio"
                              name="menu-visibility"
                              value="unvisible"
                              checked={menuVisibility === "unvisible"}
                              onChange={handleMenuVisibilityChange}
                            />
                            노출안함
                          </RadioLabel>
                        </RadioContainer>
                      </SelectionBox>
                    )}
                  {field.type === "radio" &&
                    field.label === "하위 분류 노출" && (
                      <SelectionBox>
                        <MenuOption>
                          * 하위 메뉴 존재 여부 : 하위 메뉴 있음
                        </MenuOption>
                        <RadioContainer>
                          <RadioLabel>
                            <CustomRadio
                              type="radio"
                              name="sub-category-visibility"
                              value="isvisible"
                              checked={subCategoryVisibility === "isvisible"}
                              onChange={handleSubCategoryVisibilityChange}
                            />
                            노출
                          </RadioLabel>
                          <RadioLabel>
                            <CustomRadio
                              type="radio"
                              name="sub-category-visibility"
                              value="unvisible"
                              checked={subCategoryVisibility === "unvisible"}
                              onChange={handleSubCategoryVisibilityChange}
                            />
                            노출안함
                          </RadioLabel>
                        </RadioContainer>
                      </SelectionBox>
                    )}
                </InputCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </InfoTableBox>
      <ButtonBox>
        <SavedButton>설정 저장</SavedButton>
      </ButtonBox>
    </InfoBox>
  );
};
const Input = styled.input`
  width: 25.6875rem;
  height: 1.4375rem;
  border: 1px solid #ccc;
  margin-left: 0.5rem;
`;
const SelectionBox = styled.div`
  display: flex;
  margin-left: 0.5rem;
  flex-direction: column;
`;
const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RadioLabel = styled.label`
  font-size: 0.875rem;
  margin-right: 0.875rem;
  display: flex;
  align-items: center;
  padding: 0.25rem;
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
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoTableBox = styled.div`
  width: 34.875rem;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 34.875rem;
`;
const TableRow = styled.tr<{ isEven?: boolean }>`
  width: 34.875rem;
  height: 2.4375rem;
  border: 1px solid #cecece;
`;
const LabelCell = styled.td`
  background-color: #efefef;
  font-size: 0.875rem;
  width: 7.625rem;
  text-align: center;
`;
const TableCell = styled.td`
  padding: 0.5rem;
`;
const InputCell = styled(TableCell)`
  display: flex;
  align-items: center;
`;
const InputBox = styled.div``;
const MenuOption = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.625rem;
  padding: 0.5rem;
`;
const ButtonBox = styled.div`
  margin: auto;
  text-align: center;
`;
const SavedButton = styled.button`
  width: 7.1875rem;
  height: 2rem;
  font-size: 1rem;
  color: white;
  background-color: #558ed5;
  border-radius: 0.375rem;
  margin-top: 1.1875rem;
  border: none;
  line-height: 2rem;
`;
export default CategoryDetailBox;
