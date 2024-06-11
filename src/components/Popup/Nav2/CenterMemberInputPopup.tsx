import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import Checkbox from "../../Button/CheckBox";

const checkboxItems = ["법인사업자", "개인사업자"];

interface CenterMemberInputPopupProps {
  onClose: () => void;
}

const CenterMemberInputPopup: React.FC<CenterMemberInputPopupProps> = ({
  onClose,
}) => {
  const [checkedItems, setCheckedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const handleCheckboxChange = (label: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>다수리(aaaa) 회원정보 등록</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <SubText>∙ 다수리(aaaa) 회원님은 활동매장 회원입니다</SubText>
        <Box width="65rem">
          <BoxRow>
            <LabelCell>가맹점코드</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
            <LabelCell>회사형태</LabelCell>
            <InputCell>
              <CheckBoxTable1>
                {checkboxItems.slice(0, 2).map((item) => (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={!!checkedItems[item]}
                    onChange={() => handleCheckboxChange(item)}
                  />
                ))}
              </CheckBoxTable1>
            </InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>아이디</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
            <LabelCell>회원등급</LabelCell>
            <InputCell>활동매장</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>공업사명</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
            <LabelCell>사업자번호</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>전화번호</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
            <LabelCell>업태/업종</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>주소</LabelCell>
            <InputCell>
              <InputBox>
                <Input />
                <AdressSearch>우편번호 검색</AdressSearch>
              </InputBox>
            </InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>회원가입일</LabelCell>
            <InputCell>가입일자 자동등록 됩니다</InputCell>
            <LabelCell>추천인</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>가 견적신청 건수</LabelCell>
            <InputCell>-- 건</InputCell>
            <LabelCell>실 견적 접수</LabelCell>
            <InputCell>-- 건</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>예약신청 건수</LabelCell>
            <InputCell>-- 건</InputCell>
            <LabelCell>수리완료 건수</LabelCell>
            <InputCell>-- 건</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>정산결제계좌</LabelCell>
            <InputCell>회원등록 승인 후 추가등록항목</InputCell>
            <LabelCell>총 수리누적금액</LabelCell>
            <InputCell>300,000,000원</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>사업자등록증 사본</LabelCell>
            <InputCell>
              사업자등록증사본
              <UploadButton>업로드</UploadButton>
            </InputCell>
            <LabelCell>영업신고서 사본</LabelCell>
            <InputCell>
              영업신고서 사본 <UploadButton>업로드</UploadButton>
            </InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>대표자 신분증 사본</LabelCell>
            <InputCell>
              신분증사본 <UploadButton>업로드</UploadButton>
            </InputCell>
            <LabelCell>기타</LabelCell>
            <InputCell></InputCell>
          </BoxRow>
        </Box>

        <SubText>∙ 대표자 정보 (마스터 관리자)</SubText>
        <Box width="65rem">
          <BoxRow>
            <LabelCell>대표자명</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
            <LabelCell>휴대폰[수신동의]</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>대표자주소</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
            <LabelCell>이메일[수신동의]</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
          </BoxRow>
        </Box>
        <SubTextBox>
          <SubText>∙ 부 운영자 정보</SubText>
          <SubText>∙ 정산 담당자 정보</SubText>
        </SubTextBox>
        <Box width="65rem">
          <BoxRow>
            <LabelCell>관리 운영자명</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
            <LabelCell>정산 담당자명</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>휴대폰[수신]</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
            <LabelCell>휴대폰[수신]</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>이메일[수신]</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
            <LabelCell>이메일[수신]</LabelCell>
            <InputCell>
              <Input />
            </InputCell>
          </BoxRow>
        </Box>
        <SaveButton>정보 저장</SaveButton>
      </PopupContainer>
    </Overlay>
  );
};
const UploadButton = styled.button`
  width: 3.4375rem;
  height: 1.4375rem;
  background-color: #838383;
  color: white;
  border-radius: 0.1875rem;
  border: 0;
  margin-left: 0.3125rem;
`;
const InputBox = styled.div`
  display: flex;
`;
const AdressSearch = styled.button`
  width: 5.9375rem;
  height: 1.5rem;
  color: white;
  border: 0;
  background-color: #838383;
  border-radius: 0.1875rem;
  margin-left: 0.3125rem;
`;
const CheckBoxTable1 = styled.div`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input`
  width: 12.5rem;
  height: 1.125rem;
`;
const SaveButton = styled.div`
  width: 5.5625rem;
  height: 1.625rem;
  background-color: black;
  color: white;
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.625rem;
  border-radius: 0.375rem;
  margin: auto;
  margin-top: 0.625rem;
`;
const SubTextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 39.375rem;
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
  overflow:scroll;
  height:50rem;
`;
const SubText = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.625rem;
  font-weight: bold;
  margin-top: 1.25rem;
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
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 63.75rem;
  height: 3.3125rem;
  background-color: black;
  color: white;
  margin: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
`;
export default CenterMemberInputPopup;
