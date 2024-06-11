import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import Checkbox from "../../Button/CheckBox";

const checkboxItems = [
  "마스터",
  "부운영자",
  "전체메뉴",
  "운영관리",
  "견적/예약관리",
  "카테고리관리",
  "사고수리정보관리",
  "회원관리",
  "이벤트/홍보관리",
  "고객센터",
  "통계관리",
];

interface AdminListPopupProps {
  onClose: () => void;
}
const AdminListPopup: React.FC<AdminListPopupProps> = ({ onClose }) => {
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
          <Title>사용자 정보</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <SubText>
          <strong>∙ 홍길동(마스터)</strong>회원님의 권한 설정 정보입니다
        </SubText>
        <Box width="33rem">
          <BoxRow>
            <LabelCell>아이디</LabelCell>
            <InputCell height="1.875rem">Aassas(마스터)</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>이름</LabelCell>
            <InputCell height="1.875rem">홍길동</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>비밀번호</LabelCell>
            <InputCell height="1.875rem">xxxxxxx</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>권한</LabelCell>
            <InputCell height="6.25rem">
              <CheckBoxTable>
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
                <CheckBoxTable1>
                  {checkboxItems.slice(2, 5).map((item) => (
                    <Checkbox
                      key={item}
                      label={item}
                      checked={!!checkedItems[item]}
                      onChange={() => handleCheckboxChange(item)}
                    />
                  ))}
                </CheckBoxTable1>
                <CheckBoxTable2>
                  {checkboxItems.slice(5, 7).map((item) => (
                    <Checkbox
                      key={item}
                      label={item}
                      checked={!!checkedItems[item]}
                      onChange={() => handleCheckboxChange(item)}
                    />
                  ))}
                </CheckBoxTable2>
                <CheckBoxTable2>
                  {checkboxItems.slice(7, 9).map((item) => (
                    <Checkbox
                      key={item}
                      label={item}
                      checked={!!checkedItems[item]}
                      onChange={() => handleCheckboxChange(item)}
                    />
                  ))}
                </CheckBoxTable2>
                <CheckBoxTable2>
                  {checkboxItems.slice(9, 12).map((item) => (
                    <Checkbox
                      key={item}
                      label={item}
                      checked={!!checkedItems[item]}
                      onChange={() => handleCheckboxChange(item)}
                    />
                  ))}
                </CheckBoxTable2>
              </CheckBoxTable>
            </InputCell>
          </BoxRow>
        </Box>
      </PopupContainer>
    </Overlay>
  );
};
const CheckBoxTable = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckBoxTable1 = styled.div`
  display: flex;
  flex-direction: row;
`;
const CheckBoxTable2 = styled.div`
  display: flex;
  flex-direction: row;
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
  transform: translate(-35%, -50%);
  padding: 0.625rem;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
const SubText = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.625rem;
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
  width: 32rem;
  height: 3.3125rem;
  background-color: black;
  color: white;
  margin: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin-bottom: 1.25rem;
`;
export default AdminListPopup;
