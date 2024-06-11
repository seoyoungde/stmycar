import React from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";

interface CenterMemberPopupProps {
  onClose: () => void;
}

const CenterMemberPopup: React.FC<CenterMemberPopupProps> = ({ onClose }) => {
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
            <InputCell>123456789</InputCell>
            <LabelCell>회사형태</LabelCell>
            <InputCell>Aassas(마스터)</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>아이디</LabelCell>
            <InputCell>aaaaaa</InputCell>
            <LabelCell>회원등급</LabelCell>
            <InputCell>활동매장</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>공업사명</LabelCell>
            <InputCell>다된다</InputCell>
            <LabelCell>사업자번호</LabelCell>
            <InputCell>000-00-00000</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>전화번호</LabelCell>
            <InputCell>010-2552-4258</InputCell>
            <LabelCell>업태/업종</LabelCell>
            <InputCell>자동차수리</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>주소</LabelCell>
            <InputCell>[120-456] 서울 강남구 신사동 123</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>회원가입일</LabelCell>
            <InputCell>2015.07.11 18:20</InputCell>
            <LabelCell>추천인</LabelCell>
            <InputCell>다해준다 공업사(창원)</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>가 견적신청 건수</LabelCell>
            <InputCell>100 건</InputCell>
            <LabelCell>실 견적 접수</LabelCell>
            <InputCell>90 건</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>예약신청 건수</LabelCell>
            <InputCell>80 건</InputCell>
            <LabelCell>수리완료 건수</LabelCell>
            <InputCell>80 건</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>정산결제계좌</LabelCell>
            <InputCell>기업은행 123-45-7897 [홍길동]</InputCell>
            <LabelCell>총 수리누적금액</LabelCell>
            <InputCell>300,000,000원</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>사업자등록증 사본</LabelCell>
            <InputCell>
              <BluePoint>사업자등록증사본</BluePoint>
            </InputCell>
            <LabelCell>영업신고서 사본</LabelCell>
            <InputCell>
              <BluePoint>영업신고서 사본</BluePoint>
            </InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>대표자 신분증 사본</LabelCell>
            <InputCell>
              <BluePoint>신분증사본</BluePoint>
            </InputCell>
            <LabelCell>기타</LabelCell>
            <InputCell></InputCell>
          </BoxRow>
        </Box>

        <SubText>∙ 대표자 정보 (마스터 관리자)</SubText>
        <Box width="65rem">
          <BoxRow>
            <LabelCell>대표자명</LabelCell>
            <InputCell>홍길동</InputCell>
            <LabelCell>휴대폰[수신동의]</LabelCell>
            <InputCell>010-5555-1234</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>대표자주소</LabelCell>
            <InputCell>[25450] 서울 강남구 신사동 123</InputCell>
            <LabelCell>이메일[수신동의]</LabelCell>
            <InputCell width="8.125rem">asb@naver.com</InputCell>
          </BoxRow>
        </Box>
        <SubTextBox>
          <SubText>∙ 부 운영자 정보</SubText>
          <SubText>∙ 정산 담당자 정보</SubText>
        </SubTextBox>
        <Box width="65rem">
          <BoxRow>
            <LabelCell>관리 운영자명</LabelCell>
            <InputCell width="9.375rem">혼당당</InputCell>
            <LabelCell>정산 담당자명</LabelCell>
            <InputCell>홍정산</InputCell>
          </BoxRow>

          <BoxRow>
            <LabelCell>휴대폰[수신]</LabelCell>
            <InputCell>010-0000-0000</InputCell>
            <LabelCell>휴대폰[수신]</LabelCell>
            <InputCell>010-0000-0000</InputCell>
          </BoxRow>
          <BoxRow>
            <LabelCell>이메일[수신]</LabelCell>
            <InputCell>asb@naver.com</InputCell>
            <LabelCell>이메일[수신]</LabelCell>
            <InputCell>asb@naver.com</InputCell>
          </BoxRow>
        </Box>
        <SaveButton>정보 저장</SaveButton>
      </PopupContainer>
    </Overlay>
  );
};
const BluePoint = styled.div`
  color: #558ed5;
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
  width:43.5rem;
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
export default CenterMemberPopup;
