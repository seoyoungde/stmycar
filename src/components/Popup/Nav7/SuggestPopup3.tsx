import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import RadioButton from "../../Button/RadioButton";

interface SuggestPopup3Props {
  onClose: () => void;
}
const formFields = [
  { label: "회원명(ID)", type: "text" },
  { label: "이메일", type: "text" },
  { label: "항목분류", type: "text" },
  { label: "제목", type: "text" },
  { label: "문의 내용", type: "text" },
  { label: "대상공업사", type: "text" },
  { label: "등록일자", type: "text" },
  { label: "첨부파일", type: "text" },
  { label: "만족도 체크", type: "text" },
];
const formFields2 = [
  { label: "대상공업사", type: "text" },
  { label: "이메일", type: "text" },
  { label: "제목", type: "text" },
  { label: "답변 내용", type: "text" },
  { label: "첨부자료", type: "text" },
  { label: "등록일자", type: "text" },
];
const formFields3 = [
  { label: "제목", type: "text" },
  { label: "담당자", type: "text" },
  { label: "사실확인 및처리결과내용", type: "text" },
  { label: "첨부자료", type: "text" },
];
const SuggestPopup3: React.FC<SuggestPopup3Props> = ({ onClose }) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>확인완료 내용</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <PageTitle>* 회원 등록 내용</PageTitle>
        <Section>
          <Box>
            {formFields.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell>
                  {field.label === "회원명(ID)" && (
                    <TextBox> 홍타박(ekdkal)</TextBox>
                  )}
                  {field.label === "이메일" && (
                    <TextBox>
                      <ColorText>qkrtjdud09066@gail.com</ColorText>
                    </TextBox>
                  )}
                  {field.label === "항목분류" && <TextBox> 개선</TextBox>}
                  {field.label === "제목" && (
                    <TextBox> 매장서비스 개선 요망</TextBox>
                  )}
                  {field.label === "문의 내용" && (
                    <TextBox>매장서비스 개선 요망</TextBox>
                  )}
                  {field.label === "대상공업사" && (
                    <TextBox> (강원)다못고쳐 공업사</TextBox>
                  )}
                  {field.label === "등록일자" && (
                    <TextBox> 2024/03/25 18:25</TextBox>
                  )}
                  {field.label === "첨부파일" && (
                    <TextBox>
                      <ColorText>123.jpg</ColorText>
                    </TextBox>
                  )}
                  {field.label === "만족도 체크" && (
                    <RadioBox>
                      <RadioButton
                        name="options"
                        value="option1"
                        checked={selectedValue === "option1"}
                        onChange={handleRadioChange}
                      >
                        매우만족
                      </RadioButton>
                      <RadioButton
                        name="options"
                        value="option2"
                        checked={selectedValue === "option2"}
                        onChange={handleRadioChange}
                      >
                        만족
                      </RadioButton>
                      <RadioButton
                        name="options"
                        value="option3"
                        checked={selectedValue === "option3"}
                        onChange={handleRadioChange}
                      >
                        보통
                      </RadioButton>
                      <RadioButton
                        name="options"
                        value="option4"
                        checked={selectedValue === "option4"}
                        onChange={handleRadioChange}
                      >
                        불만
                      </RadioButton>
                      <RadioButton
                        name="options"
                        value="option5"
                        checked={selectedValue === "option5"}
                        onChange={handleRadioChange}
                      >
                        매우불만
                      </RadioButton>
                    </RadioBox>
                  )}
                </InputCell>
              </BoxRow>
            ))}
          </Box>
        </Section>
        <PageTitle>* 대상 공업사회원 답변 등록 내용</PageTitle>
        <Section>
          <Box>
            {formFields2.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell width="20.625rem">
                  {field.label === "대상공업사" && (
                    <TextBox> (강원)다못고쳐 공업사</TextBox>
                  )}
                  {field.label === "이메일" && (
                    <TextBox>qkrtjdud0906@gmail.com</TextBox>
                  )}
                  {field.label === "제목" && (
                    <TextBox>매장서비스 개선 요망</TextBox>
                  )}
                  {field.label === "답변 내용" && (
                    <TextBox>매장서비스 개선 요망</TextBox>
                  )}
                  {field.label === "첨부자료" && (
                    <TextBox>
                      <ColorText>123.jpg</ColorText>
                    </TextBox>
                  )}
                  {field.label === "등록일자" && (
                    <TextBox>2024/03/25 18:25</TextBox>
                  )}
                </InputCell>
              </BoxRow>
            ))}
          </Box>
        </Section>
        <PageTitle>* 일급마이카 운영 담당자 확인 및 처리 사항</PageTitle>
        <Section>
          <Box>
            {formFields3.map((field, index) => (
              <BoxRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}</LabelCell>
                <InputCell width="20.625rem">
                  {field.label === "제목" && (
                    <TextBox>(강원)다못고쳐 공업사</TextBox>
                  )}
                  {field.label === "담당자" && (
                    <TextBox>플랫폼 고객지원팀 홍길순 주임</TextBox>
                  )}
                  {field.label === "사실확인 및처리결과내용" && (
                    <TextBox>
                      ㅁㄹㅁㅇㄹㅁㄹㅁ
                      <br />
                      자세한 안내 더보기:
                      <ColorText>ADAFA</ColorText>
                    </TextBox>
                  )}
                  {field.label === "첨부자료" && (
                    <TextBox>
                      <ColorText>123.jpg</ColorText>
                    </TextBox>
                  )}
                </InputCell>
              </BoxRow>
            ))}
          </Box>
        </Section>
      </PopupContainer>
    </Overlay>
  );
};
const ColorText = styled.div`
  color: #558ed5;
`;
const TextBox = styled.div`
  font-size: 0.8125rem;
  line-height: 1.4375rem;
`;
const RadioBox = styled.div`
  display: flex;
  width: 20.625rem;
  flex-direction: row;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 29.375rem;
  margin-bottom: 0.625rem;
`;
const PageTitle = styled.div`
  font-size: 0.8125rem;
  margin-bottom: 0.6875rem;
  font-weight: bold;
`;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 28.125rem;
  height: 3.3125rem;
  background-color: black;
  color: white;
  margin: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin-bottom: 1.25rem;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-41%, -50%);
  padding: 0.625rem;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.2);
  z-index: 1000;
  height: 50.625rem;
  overflow: scroll;
`;
const CloseButton = styled.button`
  background: #838383;
  color: white;
  line-height: 1.5rem;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  width: 3.375rem;
  height: 1.5rem;
  margin-top: 0.875rem;
`;
const Title = styled.div`
  font-size: 1.0625rem;
  font-weight: bold;
  line-height: 3.3125rem;
`;
export default SuggestPopup3;
