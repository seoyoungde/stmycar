import React, { useState } from "react";
import styled from "@emotion/styled";
import RadioButton from "../../Button/RadioButton";
import Checkbox from "../../Button/CheckBox";
import Popup from "../../Popup/Popup";
import { usePopup } from "../../Popup/UsePopup";
import RepairRegisterPopup from "../../Popup/Nav5/RepairRegisterPopup";

const checkboxItems = [
  "경차",
  "소형차",
  "준중형차",
  "중형차",
  "대형차",
  "스포츠카",
  "SUV",
  "RV",
  "경승합차",
  "승합차",
  "화물차",
  "기타",
];

const RepairRegister = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (label: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
  return (
    <>
      <Title>[사고수리정보 등록 화면]</Title>
      <Line></Line>
      <Section>
        <CarProduction>
          <ProductionTitle>
            <Required>*</Required> 차량생산지
          </ProductionTitle>
          <RadioButton
            name="options"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleRadioChange}
          >
            국산차
          </RadioButton>
          <RadioButton
            name="options"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleRadioChange}
          >
            수입차
          </RadioButton>
        </CarProduction>
        <CarCategory>
          <CategoryTitle>
            <Required>*</Required> 차종
          </CategoryTitle>
          <CheckBoxTable>
            <CheckBoxTable1>
              {checkboxItems.slice(0, 6).map((item) => (
                <Checkbox
                  key={item}
                  label={item}
                  checked={!!checkedItems[item]}
                  onChange={() => handleCheckboxChange(item)}
                />
              ))}
            </CheckBoxTable1>
            <CheckBoxTable2>
              {checkboxItems.slice(6, 12).map((item) => (
                <Checkbox
                  key={item}
                  label={item}
                  checked={!!checkedItems[item]}
                  onChange={() => handleCheckboxChange(item)}
                />
              ))}
            </CheckBoxTable2>
          </CheckBoxTable>
        </CarCategory>
        <PlaceSelect>
          <PlaceTitle>
            <Required>*</Required> 지역선택
          </PlaceTitle>
          <KeywordBox style={{ marginRight: "4.4375rem" }}>
            <select
              style={{
                width: "14.5rem",
                height: "1.875rem",
                borderRadius: "0",
              }}
            >
              <option value="1">지역</option>
              <option value="2">서울</option>
              <option value="3">경기도</option>
              <option value="4">부산</option>
              <option value="5">인천</option>
              <option value="6">광주</option>
              <option value="7">대전</option>
              <option value="8">울산</option>
            </select>
          </KeywordBox>
          <PlaceTitle>
            <Required>*</Required> 제휴공업사
          </PlaceTitle>
          <KeywordBox>
            <select
              style={{
                width: "14.5rem",
                height: "1.875rem",
                borderRadius: "0",
              }}
            >
              <option value="1">공업사선택</option>
              <option value="2">서인천공업사</option>
              <option value="3">와이공업사</option>
            </select>
          </KeywordBox>
        </PlaceSelect>
        <DetailSelect>
          <DetailTitle>
            <Required>*</Required> 제조사/모델/등급
          </DetailTitle>
          <SelectContainer>
            <SelectBox>
              <KeywordBox>
                <select
                  style={{
                    width: "5.625rem",
                    height: "1.875rem",
                    borderRadius: "0",
                    marginRight: "0.625rem",
                  }}
                >
                  <option value="1">제조사선택</option>
                  <option value="2">현대</option>
                  <option value="3">기아</option>
                </select>

                <select
                  style={{
                    width: "5.625rem",
                    height: "1.875rem",
                    borderRadius: "0",
                    marginRight: "0.625rem",
                  }}
                >
                  <option value="1">모델선택</option>
                  <option value="2">k5</option>
                  <option value="3">소나타</option>
                </select>
                <select
                  style={{
                    width: "5.625rem",
                    height: "1.875rem",
                    borderRadius: "0",
                    marginRight: "0.625rem",
                  }}
                >
                  <option value="1">등급1 선택</option>
                  <option value="2">등급2 선택</option>
                  <option value="3">연식 선택</option>
                </select>
                <select
                  style={{
                    width: "5.625rem",
                    height: "1.875rem",
                    borderRadius: "0",
                    marginRight: "0.625rem",
                  }}
                >
                  <option value="1">등급2 선택</option>
                  <option value="2">확인중</option>
                  <option value="3">미확인</option>
                </select>
                <select
                  style={{
                    width: "5.625rem",
                    height: "1.875rem",
                    borderRadius: "0",
                    marginRight: "0.625rem",
                  }}
                >
                  <option value="1">연식 선택</option>
                  <option value="2">2010년식</option>
                  <option value="3">2020년식</option>
                </select>
                <select
                  style={{
                    width: "5.625rem",
                    height: "1.875rem",
                    borderRadius: "0",
                    marginRight: "0.625rem",
                  }}
                >
                  <option value="1">색상 선택</option>
                  <option value="2">흰색</option>
                  <option value="3">검정색</option>
                </select>
                <select
                  style={{
                    width: "5.625rem",
                    height: "1.875rem",
                    borderRadius: "0",
                    marginRight: "0.625rem",
                  }}
                >
                  <option value="1">연료 선택</option>
                  <option value="2">확인중</option>
                  <option value="3">미확인</option>
                </select>
                <select
                  style={{
                    width: "5.625rem",
                    height: "1.875rem",
                    borderRadius: "0",
                    marginRight: "0.625rem",
                  }}
                >
                  <option value="1">변속기 선택</option>
                  <option value="2">확인중</option>
                  <option value="3">미확인</option>
                </select>
                <select
                  style={{
                    width: "5.9375rem",
                    height: "1.875rem",
                    borderRadius: "0",
                  }}
                >
                  <option value="1">기타옵션 선택</option>
                  <option value="2">확인중</option>
                  <option value="3">미확인</option>
                </select>
              </KeywordBox>
              <ResetButton>초기화</ResetButton>
            </SelectBox>
            <SelectedContents>
              <Contents2>
                *선택 항목 &gt; 현대 &gt; 쏘나타 &gt; LF소나타 &gt; 가솔린1600CC
                &gt; 1.6터보스타일
              </Contents2>
              <DeleteButton>삭제</DeleteButton>
            </SelectedContents>
            <ExampleContents>
              *예제 &gt; 현대 &gt; 쏘나타 &gt; LF소나타 &gt; 가솔린1600CC &gt;
              1.6터보스타일
            </ExampleContents>
          </SelectContainer>
        </DetailSelect>
        <AccidentSelect>
          <AccidentTitle>
            <Required>*</Required> 사고구분
          </AccidentTitle>
          <AccidentContentBox>
            <KeywordBox>
              <select
                style={{
                  width: "14.5rem",
                  height: "1.875rem",
                  borderRadius: "0",
                  marginRight: "0.625rem",
                }}
              >
                <option value="1">사고구분 선택</option>
                <option value="2">확인중</option>
                <option value="3">미확인</option>
              </select>

              <select
                style={{
                  width: "14.5rem",
                  height: "1.875rem",
                  borderRadius: "0",
                  marginRight: "0.3125rem",
                }}
              >
                <option value="1">사고부위 선택</option>
                <option value="2">확인중</option>
                <option value="3">미확인</option>
              </select>
              <AddButton>추가</AddButton>
            </KeywordBox>

            <SelectedContents>
              <Contents>* 서비스 센터</Contents>
              <RepairCost>수리비용</RepairCost>
              <CostInput>
                <Input />
              </CostInput>
              ~
              <CostInput>
                <Input />
              </CostInput>
              <DeleteButton>삭제</DeleteButton>
            </SelectedContents>
            <SelectedContents>
              <Contents>* 1급 종합공업사</Contents>
              <RepairCost>수리비용</RepairCost>
              <CostInput>
                <Input />
              </CostInput>
              ~
              <CostInput>
                <Input />
              </CostInput>
              <DeleteButton>삭제</DeleteButton>
            </SelectedContents>
            <SelectedContents>
              <Contents>* 일반 공업사</Contents>
              <RepairCost>수리비용</RepairCost>
              <CostInput>
                <Input />
              </CostInput>
              ~
              <CostInput>
                <Input />
              </CostInput>
              <DeleteButton>삭제</DeleteButton>
            </SelectedContents>
            <AccidentText>
              ( 최대 5개까지 선택가능, 나머지 사항은 기타참고사항에 기재)
            </AccidentText>
          </AccidentContentBox>
        </AccidentSelect>
        <AccidentPhoto>
          <PhotoTitle>
            <Required>*</Required> 사고 부위사진
          </PhotoTitle>
          <PhotoSection>
            <PhotoContainer>
              <Photo1Box>
                <PhotoText>사고수리 전 이야기</PhotoText>
                <PhotoBox onClick={openPopup}>
                  <Photo1>+</Photo1>
                  <Photo1>+</Photo1>
                  <Photo1>+</Photo1>
                  <Photo1>+</Photo1>
                  <Photo1>+</Photo1>
                </PhotoBox>
              </Photo1Box>
              <Photo1Box>
                <PhotoText>사고수리 후 이야기</PhotoText>
                <PhotoBox onClick={openPopup}>
                  <Photo1>+</Photo1>
                  <Photo1>+</Photo1>
                  <Photo1>+</Photo1>
                  <Photo1>+</Photo1>
                  <Photo1>+</Photo1>
                </PhotoBox>
              </Photo1Box>
            </PhotoContainer>
            {isPopupVisible && <RepairRegisterPopup onClose={closePopup} />}
            <PhotoBoxText>
              ( 최소 2장 ~ 최소 5장 선택까지 등록가능 ) ( 1280 * 1280 / 15M 이하
              / jpg,gif,png만 가능 )
            </PhotoBoxText>
          </PhotoSection>
        </AccidentPhoto>
        <Information>
          <InformationTitle>
            <Required>*</Required> 정보노출
          </InformationTitle>
          <RadioButton
            name="options"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={handleRadioChange}
          >
            노출함
          </RadioButton>
          <RadioButton
            name="options"
            value="option4"
            checked={selectedValue === "option4"}
            onChange={handleRadioChange}
          >
            노출안함
          </RadioButton>
        </Information>
        <Else>
          <ElseTitleBox>
            <ElseTitle>
              <Required>*</Required> 기타참고사항
            </ElseTitle>
            <ElseTitle2>(최대600자)</ElseTitle2>
          </ElseTitleBox>
          <ElseInput></ElseInput>
        </Else>
      </Section>
      <ButtonBox>
        <SaveButton>저장</SaveButton>
      </ButtonBox>
    </>
  );
};
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-bottom: 1.25rem;
  margin-left: 1.75rem;
`;
const PhotoBoxText = styled.div`
  font-size: 0.75rem;
  margin-top: 0.3125rem;
`;

const PhotoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const PhotoBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 21rem;
  justify-content: space-between;
`;
const Photo1Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  margin-bottom: 0.5rem;
`;
const Photo1 = styled.div`
  width: 3.3125rem;
  height: 3.1875rem;
  border: 1px solid black;
  text-align: center;
  line-height: 3.1875rem;
  font-size: 1.125rem;
  cursor:pointer;
`;
const PhotoText = styled.div`
  font-size: 0.9rem;
  width: 20.4rem;
  height: 1.4rem;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  background-color: #d9d9d9;
  padding-left: 0.5rem;
`;
const PhotoContainer = styled.div`
  display: flex;
`;
const AccidentText = styled.div`
  font-size: 0.875rem;
  margin-top: 0.625rem;
`;
const RepairCost = styled.div`
  margin-left: 4rem;
  margin-right: 0.625rem;
`;
const Contents2 = styled.div``;
const CostInput = styled.div`
  margin-right: 0.3125rem;
  margin-left: 0.3125rem;
`;
const Input = styled.input`
  width: 7.4375rem;
  height: 1.5625rem;
`;
const AccidentContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const KeywordBox = styled.div`
  display: flex;
`;
const Required = styled.span`
  color: red;
`;
const Title = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-left: 2rem;
  margin-bottom: 0.9375rem;
`;
const ButtonBox = styled.div`
  margin: auto;
  margin-top: 2.0625rem;
  width: 6.3125rem;
`;
const SaveButton = styled.button`
  background-color: black;
  color: white;
  width: 6.3125rem;
  height: 2rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1.25rem;
  cursor:pointer;
`;
const Section = styled.div`
  font-size: 1rem;
  margin-left: 2rem;
  display: flex;

  flex-direction: column;
`;
const CarProduction = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.125rem;
`;
const ProductionTitle = styled.div`
  width: 9.25rem;
`;
const CarCategory = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.125rem;
`;
const CategoryTitle = styled.div`
  width: 9.25rem;
`;
const PlaceSelect = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.125rem;
`;
const PlaceTitle = styled.div`
  width: 9.25rem;
`;
const DetailSelect = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.125rem;
`;
const DetailTitle = styled.div`
  width: 9.25rem;
`;
const AccidentSelect = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.125rem;
`;
const AccidentTitle = styled.div`
  width: 9.25rem;
`;
const AccidentPhoto = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.125rem;
  width: 60rem;
`;
const PhotoTitle = styled.div`
  width: 9.25rem;
`;
const Information = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.125rem;
`;
const InformationTitle = styled.div`
  width: 9.25rem;
`;
const Else = styled.div`
  display: flex;
  flex-direction: row;
`;
const ElseTitle = styled.div`
  width: 9.25rem;
`;
const ElseInput = styled.input`
  width: 63.375rem;
  height: 5.875rem;
`;
const CheckBoxTable = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckBoxTable1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 37.5rem;
  justify-content: space-between;
`;
const CheckBoxTable2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 37.5rem;
  justify-content: space-between;
`;
const ElseTitleBox = styled.div`
  width: 5.8125rem;
  margin-right: 3.4375rem;
`;
const ElseTitle2 = styled.div`
  font-size: 0.625rem;
  display: flex;
  justify-content: flex-end;
`;
const ResetButton = styled.button`
  width: 4.625rem;
  height: 1.875rem;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
  border: 0;
  font-size: 0.875rem;
  margin-left: 0.625rem;
  cursor:pointer;
`;
const SelectBox = styled.div`
  display: flex;
`;
const SelectContainer = styled.div``;
const SelectedContents = styled.div`
  display: flex;
  width: 37.5625rem;
  height: 2.6875rem;
  background-color: #ebebeb;
  line-height: 2.6875rem;
  font-size: 0.875rem;
  padding-left: 1rem;
  margin-top: 0.5rem;
`;
const Contents = styled.div`
width:8rem;
`;
const DeleteButton = styled.button`
  width: 2.6875rem;
  height: 1.875rem;
  background-color: #838383;
  color: white;
  border: 0;
  border-radius: 0.375rem;
  margin: auto;
  margin-right: 0.3125rem;
  cursor:pointer;
`;
const ExampleContents = styled.div`
  font-size: 0.875rem;
  margin-left: 1rem;
  margin-top: 0.625rem;
`;
const AddButton = styled.button`
  width: 2.6875rem;
  height: 1.875rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
  cursor:pointer;
`;
export default RepairRegister;
