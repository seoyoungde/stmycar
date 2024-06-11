import React from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";

const InfoPopup = () => {
  return (
    <Container>
      <SubText>
        <strong>∙ 홍길동</strong> 회원님의 회원등급은 <strong>활동시민 </strong>
        입니다
      </SubText>
      <Box width="64.1875rem">
        <BoxRow>
          <LabelCell>이름</LabelCell>
          <InputCell height="1.375rem">홍길동</InputCell>
          <LabelCell>회원등급</LabelCell>
          <InputCell height="1.375rem">활동시민</InputCell>
        </BoxRow>

        <BoxRow>
          <LabelCell>아이디</LabelCell>
          <InputCell height="1.375rem">assaadd(마스터)</InputCell>
          <LabelCell>생년월일</LabelCell>
          <InputCell height="1.375rem">1973.05.01 (48세)</InputCell>
        </BoxRow>

        <BoxRow>
          <LabelCell>핸드폰</LabelCell>
          <InputCell height="1.375rem">
            010-1125-4545 <ColorText>[수신동의 완료]</ColorText>
          </InputCell>
          <LabelCell>이메일</LabelCell>
          <InputCell height="1.375rem">
            hahadf@naver.com <ColorText>[수신동의 완료]</ColorText>
          </InputCell>
        </BoxRow>
        <BoxRow>
          <LabelCell>회원가입일</LabelCell>
          <InputCell height="1.375rem">2024.01.11 18:20</InputCell>
          <LabelCell>최근로그인</LabelCell>
          <InputCell height="1.375rem">2024.01.11 18:20</InputCell>
        </BoxRow>
        <BoxRow>
          <LabelCell>로그인횟수</LabelCell>
          <InputCell height="1.375rem">21회</InputCell>
          <LabelCell>최근로그인 경로</LabelCell>
          <InputCell height="1.375rem">[pc]1.229.65.49 / [모바일]</InputCell>
        </BoxRow>
        <BoxRow>
          <LabelCell>주소</LabelCell>
          <InputCell height="1.375rem">[123-456] 서울 강남구 신사동 123</InputCell>
        </BoxRow>
        <BoxRow>
          <LabelCell>총 견적건수</LabelCell>
          <InputCell height="1.375rem">21회</InputCell>
          <LabelCell>총 예약건수</LabelCell>
          <InputCell height="1.375rem">21회</InputCell>
        </BoxRow>
        <BoxRow>
          <LabelCell>포인트</LabelCell>
          <InputCell height="1.375rem">25,000P</InputCell>
          <LabelCell>할인쿠폰</LabelCell>
          <InputCell height="1.375rem">5장</InputCell>
        </BoxRow>
      </Box>
    </Container>
  );
};
const ColorText = styled.div`
  color: #558ed5;
`;
const Container = styled.div``;
const SubText = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.625rem;
  margin-top: 1.25rem;
`;
export default InfoPopup;
