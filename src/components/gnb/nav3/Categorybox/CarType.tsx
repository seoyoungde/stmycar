import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

const CarType = () => {
  const [typeinputText, setTypeinputText] = useState("");
  const [typecategories, setTypecategories] = useState<string[]>([]);
  const typeaddCategory = () => {
    if (typeinputText.trim() !== "") {
      setTypecategories([...typecategories, typeinputText]);
      setTypeinputText("");
    }
  };

  const typedeleteCategory = (index: number) => {
    const typeupdatedCategories = typecategories.filter((_, i) => i !== index);
    setTypecategories(typeupdatedCategories);
  };

  return (
    <SelectBox2>
      <CarTypeBox>
        <Title>
          <Required>*</Required> 차종
        </Title>
        <SelectBox>
          <InputSection>
            <InputBox>
              <Input
                value={typeinputText}
                onChange={(e) => setTypeinputText(e.target.value)}
              />
              <PlusButton onClick={typeaddCategory}>
                <FaPlus size="0.875rem" />
              </PlusButton>
            </InputBox>
            <SaveButton>저장</SaveButton>
          </InputSection>
          <CategoryTable>
            <SavedCategory>카테고리</SavedCategory>
            <DeletedCategory>삭제</DeletedCategory>
          </CategoryTable>
          {typecategories.map((typecategory, index) => (
            <CategoryRow key={index}>
              <SavedCategory>{typecategory}</SavedCategory>
              <DeletedCategory onClick={() => typedeleteCategory(index)}>
                <FaTrashAlt
                  color="#B3B1A8"
                  size="1.0625rem"
                  style={{ marginTop: "0.25rem" }}
                />
              </DeletedCategory>
            </CategoryRow>
          ))}
        </SelectBox>
      </CarTypeBox>
    </SelectBox2>
  );
};
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
  border: 0.0625rem solid black;
  border-left: 0;
  text-align: center;
  background-color: white;
`;
const CategoryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SavedCategory = styled.div`
  width: 8.125rem;
  height: 2rem;
  border: 1px solid black;
  margin-bottom: 0.1px;
  padding-left: 0.8125rem;
  line-height: 2rem;
  font-size: 0.875rem;
`;
const SaveButton = styled.button`
  width: 2.5rem;
  height: 2.1875rem;
  color: white;
  background-color: #558ed5;
  border: none;
  border-radius: 0.3125rem;
`;
const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const CarTypeBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.div`
  font-size: 1rem;
  line-height: 1.9375rem;
  margin-right: 3.5rem;
`;
const Required = styled.span`
  color: red;
`;
const SelectBox2 = styled.div`
  width: 23.125rem;
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: row;
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
const PlusButton = styled.div`
  width: 2.25rem;
  height: 2.1875rem;
  background-color: #bfbfbf;
  border: 1px solid black;
  border-left: 0;
  text-align: center;
  line-height: 2.1875rem;
`;
export default CarType;
