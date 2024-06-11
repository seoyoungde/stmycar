import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaRegFolder, FaRegTrashAlt, FaPlus } from "react-icons/fa";

interface Category {
  id: number;
  name: string;
  subCategories: Category[];
}

const CRCategoryBox: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const addCategory = () => {
    const newCategory: Category = {
      id: categories.length + 1,
      name: `[대메뉴] ${categories.length + 1}`,
      subCategories: [],
    };
    setCategories([...categories, newCategory]);
  };
  const addSubCategory = (categoryId: number) => {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId) {
          const newSubCategory: Category = {
            id: category.subCategories.length + 1,
            name: `[중메뉴] ${category.subCategories.length + 1}`,
            subCategories: [],
          };
          return {
            ...category,
            subCategories: [...category.subCategories, newSubCategory],
          };
        }
        return category;
      })
    );
  };
  const toggleCategorySelection = (categoryId: number) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id! === categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };
  const deleteSelectedCategories = () => {
    setCategories(
      categories.filter((category) => !selectedCategories.includes(category.id))
    );
    setSelectedCategories([]);
  };
  return (
    <PageConatiner>
      <CategorySection>
        <LargemenuAdd onClick={addCategory}>대메뉴추가</LargemenuAdd>
        <SelectedDelete onClick={deleteSelectedCategories}>
          선택 삭제
        </SelectedDelete>
        <TotalDelete onClick={() => setCategories([])}>전체 삭제</TotalDelete>
        <Saved>설정 저장</Saved>
      </CategorySection>
      <CategoryListSetion>
        <CategoryListBox>
          <CategoryList>
            {categories.map((category) => (
              <React.Fragment key={category.id}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "0.625rem",
                  }}
                >
                  <ListCheckbox>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => toggleCategorySelection(category.id)}
                      style={{ width: "1.0625rem", height: "1.0625rem" }}
                    />
                  </ListCheckbox>
                  <FaRegFolder
                    color="#BFBFBF"
                    size="1.625rem"
                    style={{ marginTop: "0.3125rem", marginRight: "0.3125rem" }}
                  />
                  <CategoryItem>
                    <CategoryItemBox>{category.name}</CategoryItemBox>
                    <InnerBox>
                      <CategoryNum>5</CategoryNum>
                      <CategoryLine>|</CategoryLine>
                      <CategoryIcon>
                        <FaRegTrashAlt />
                      </CategoryIcon>
                    </InnerBox>
                    <PlusButton onClick={() => addSubCategory(category.id)}>
                      <FaPlus size="0.875rem" />
                    </PlusButton>
                  </CategoryItem>
                </div>
                {category.subCategories.length > 0 && (
                  <SubCategoryList>
                    {category.subCategories.map((subCategory) => (
                      <SubCategoryItem key={subCategory.id}>
                        <ListCheckbox>
                          <input
                            type="checkbox"
                            style={{ width: "1.0625rem", height: "1.0625rem" }}
                            checked={selectedCategories.includes(
                              subCategory.id
                            )}
                            onChange={() =>
                              toggleCategorySelection(subCategory.id)
                            }
                          />
                        </ListCheckbox>
                        <FaRegFolder
                          color="#BFBFBF"
                          size="1.625rem"
                          style={{ marginRight: "0.3125rem" }}
                        />
                        <CategoryItem>
                          <CategoryItemBox>{subCategory.name}</CategoryItemBox>
                          <InnerBox>
                            <CategoryNum>5</CategoryNum>
                            <CategoryLine>|</CategoryLine>
                            <CategoryIcon>
                              <FaRegTrashAlt />
                            </CategoryIcon>
                          </InnerBox>
                          <PlusButton
                            onClick={() => addSubCategory(category.id)}
                          >
                            <FaPlus size="0.875rem" />
                          </PlusButton>
                        </CategoryItem>
                      </SubCategoryItem>
                    ))}
                  </SubCategoryList>
                )}
              </React.Fragment>
            ))}
          </CategoryList>
        </CategoryListBox>
      </CategoryListSetion>
    </PageConatiner>
  );
};
const SubCategoryList = styled.div`
  margin-left: 1.875rem;
  margin-bottom: 0.8125rem;
`;

const SubCategoryItem = styled.div`
  display: flex;
  align-items: center;
  height: 1.875rem;
  background-color: white;
  padding-left: 0.625rem;
  margin-bottom: 0.8125rem;
`;
const CategoryListBox = styled.div``;
const ListCheckbox = styled.div`
  margin-top: 0.3125rem;
  margin-right: 0.1875rem;
`;
const PageConatiner = styled.div``;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8125rem;
  margin-left: 0.75rem;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid black;
  font-size: 1rem;
  color: #333;
  width: 20.1875rem;
  height: 2.1875rem;
`;
const CategorySection = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #efefef;
  width: 32.9375rem;
  height: 2.875rem;
`;
const LargemenuAdd = styled.button`
  width: 6.6875rem;
  height: 2.0625rem;
  border: 1px solid #4b4b4b;
  margin: auto;
  margin-right: 0;
  border-radius: 0.1875rem;
`;
const SelectedDelete = styled.button`
  width: 6.6875rem;
  height: 2.0625rem;
  border: 1px solid #4b4b4b;
  margin: auto;
  margin-right: 0;
  border-radius: 0.1875rem;
`;
const TotalDelete = styled.button`
  width: 6.6875rem;
  height: 2.0625rem;
  border: 1px solid #4b4b4b;
  margin: auto;
  border-radius: 0.1875rem;
`;
const Saved = styled.button`
  width: 5.375rem;
  height: 2.0625rem;
  line-height: 2.0625rem;
  background-color: #558ed5;
  color: white;
  border: none;
  border-radius: 0.375rem;
  margin: auto;
`;
const CategoryListSetion = styled.div`
  width: 32.9375rem;
  height: 32.875rem;
  border: 1px solid #4b4b4b;
  overflow: auto;
`;
const CategoryItemBox = styled.div`
  width: 13.3125rem;
  height: 1.8125rem;
  border: 1px solid #bfbfbf;
  line-height: 1.8125rem;
  margin-top: 0.125rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  margin-left: 0.125rem;
`;
const CategoryNum = styled.div`
  font-size: 0.875rem;
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 2.0625rem;
  margin-left: 0.8125rem;
  margin-right: 0.875rem;
  width: 2.3125rem;
  justify-content: space-between;
`;
const CategoryLine = styled.div``;
const CategoryIcon = styled.div`
  line-height: 2.25rem;
`;
const PlusButton = styled.div`
  width: 2.375rem;
  height: 2.1875rem;
  background-color: #bfbfbf;
  border: 1px solid black;
  border-top: 0;
  border-right: 0;
  text-align: center;
  line-height: 2.1875rem;
`;
export default CRCategoryBox;
