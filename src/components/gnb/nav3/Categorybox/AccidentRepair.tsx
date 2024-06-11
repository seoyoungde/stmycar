import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

const AccidentRepair = () => {
  const [repairinputText, setRepairInputText] = useState("");
  const [repaircategories, setRepairCategories] = useState<string[]>([]);
  const repairaddCategory = () => {
    if (repairinputText.trim() !== "") {
      setRepairCategories([...repaircategories, repairinputText]);
      setRepairInputText("");
    }
  };

  const repairdeleteCategory = (index: number) => {
    const repairupdatedCategories = repaircategories.filter(
      (_, i) => i !== index
    );
    setRepairCategories(repairupdatedCategories);
  };
  const [accidentType, setAccidentType] = useState<"accident" | "exterior">(
    "accident"
  );

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccidentType(event.target.value as "accident" | "exterior");
  };

  return (
    <SelectBox2>
      <AccidentSection>
        <Title>
          <Required>*</Required> 사고구분
        </Title>
        <RadioGroup>
          <label style={{ marginRight: "0.625rem", display: "flex" }}>
            <CustomRadio
              type="radio"
              value="accident"
              checked={accidentType === "accident"}
              onChange={handleRadioChange}
            />
            <LabelText>사고수리</LabelText>
          </label>
          <label style={{ display: "flex" }}>
            <CustomRadio
              type="radio"
              value="exterior"
              checked={accidentType === "exterior"}
              onChange={handleRadioChange}
            />
            <LabelText>외장수리</LabelText>
          </label>
        </RadioGroup>
      </AccidentSection>
      <AccidentBox>
        <Title>
          <Required>*</Required> 사고부위
        </Title>
        <SelectBox>
          <InputSection>
            <InputBox>
              <Input
                value={repairinputText}
                onChange={(e) => setRepairInputText(e.target.value)}
              />
              <PlusButton onClick={repairaddCategory}>
                <FaPlus size="0.875rem" />
              </PlusButton>
            </InputBox>
            <SaveButton>저장</SaveButton>
          </InputSection>

          <CategoryTable>
            <SavedCategory>카테고리</SavedCategory>
            <DeletedCategory>삭제</DeletedCategory>
          </CategoryTable>

          {repaircategories.map((repaircategory, index) => (
            <CategoryRow key={index}>
              <SavedCategory>{repaircategory}</SavedCategory>
              <DeletedCategory onClick={() => repairdeleteCategory(index)}>
                <FaTrashAlt
                  color="#B3B1A8"
                  size="1.0625rem"
                  style={{ marginTop: "0.25rem" }}
                />
              </DeletedCategory>
            </CategoryRow>
          ))}
        </SelectBox>
      </AccidentBox>
    </SelectBox2>
  );
};
const LabelText = styled.div``;
const CustomRadio = styled.input`
  appearance: none;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin-right: 0.4375rem;
  position: relative;
  cursor: pointer;
  outline: none;
  margin-top: px;

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
const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 0.3125rem;
`;

const AccidentSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.0625rem;
`;
const SaveButton = styled.button`
  width: 2.5rem;
  height: 2.1875rem;
  color: white;
  background-color: #558ed5;
  border: none;
  border-radius: 0.3125rem;
`;
const SavedCategory = styled.div`
  width: 8.125rem;
  height: 2rem;
  border: 0.0625rem solid black;
  margin-bottom: 0.1px;
  padding-left: 0.8125rem;
  line-height: 2rem;
  font-size: 0.875rem;
`;
const PlusButton = styled.button`
  width: 2.25rem;
  height: 2.1875rem;
  background-color: #bfbfbf;
  border: 1px solid black;
  border-left: 0;
  text-align: center;
  line-height: 2.1875rem;
`;
const SelectBox2 = styled.div``;
const AccidentBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: row;
`;
const Required = styled.span`
  color: red;
`;
const Title = styled.div`
  font-size: 1rem;
  line-height: 1.9375rem;
  margin-right: 1rem;
`;
const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 0.25rem;
`;
const Input = styled.input`
  width: 10.625rem;
  height: 1.9375rem;
  border: 1px solid black;
`;
const CategoryTable = styled.div`
  margin-top: 0.4375rem;
  display: flex;
  flex-direction: row;
  line-height: 2rem;
  font-size: 0.875rem;
`;
const DeletedCategory = styled.button`
  width: 4.1875rem;
  height: 2.125rem;
  border: 1px solid black;
  border-left: 0;
  text-align: center;
  background-color: white;
`;
const CategoryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default AccidentRepair;
