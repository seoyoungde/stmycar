import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import ReactDatePicker from "react-datepicker";
import { FaCalendarAlt, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import StarRating from "../../Button/StarRating";

interface RepairListPopupProps {
  onClose: () => void;
}

const RepairListPopup: React.FC<RepairListPopupProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const [serviceRating, setServiceRating] = useState(0);
  const [costRating, setCostRating] = useState(0);
  const [recommendationRating, setRecommendationRating] = useState(0);

  const handleServiceRating = (value: number) => {
    setServiceRating(value);
  };

  const handleCostRating = (value: number) => {
    setCostRating(value);
  };

  const handleRecommendationRating = (value: number) => {
    setRecommendationRating(value);
  };
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <HeaderBox>
          <Title>이용후기 등록화면</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <Box>
          <BoxContainer>
            <Section>
              <PhotoBox>
                <BoxTitle>[수리 전]</BoxTitle>

                <Photo1></Photo1>
                <RowBox>
                  <Photo2></Photo2>
                  <Photo2></Photo2>
                  <Photo2></Photo2>
                  <Photo2></Photo2>
                </RowBox>
              </PhotoBox>
              <InputContainer>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
              </InputContainer>
            </Section>
            <Section>
              <PhotoBox>
                <BoxTitle>[수리 전]</BoxTitle>
                <Photo1></Photo1>
                <RowBox>
                  <Photo2></Photo2>
                  <Photo2></Photo2>
                  <Photo2></Photo2>
                  <Photo2></Photo2>
                </RowBox>
              </PhotoBox>
              <InputContainer>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
                <InputBox>
                  <Input />
                  <AddButton>추가</AddButton>
                </InputBox>
              </InputContainer>
            </Section>

            <BoxTitle>[사고수리 차량 상세정보]</BoxTitle>
            <RowBox>
              <DetailInfo>
                <RowBox>
                  <DetailTItle1>* 구분: 국산차</DetailTItle1>|
                  <DetailTItle1>* 차종: 중형차</DetailTItle1>
                </RowBox>
                <RowBox>
                  <DetailTItle1>* 사고구분: 사고수리</DetailTItle1>|
                  <DetailTItle1>* 지역: 인천</DetailTItle1>
                </RowBox>
                <RowBox>
                  <DetailTItle>* 사고부위: 앞범퍼, 운전석뒤휀다</DetailTItle>|
                </RowBox>
                <DetailTItle>* 제조사/모델/등급/연식/색상/기타</DetailTItle>
                <DetailTItle style={{ marginLeft: "0.4375rem" }}>
                  :기아/K5/가솔린1600CC/2.0력셔리/2011/진주색/선루프
                </DetailTItle>
              </DetailInfo>
              <DetailInfo>
                <RowBox>
                  <DetailTItle>* 차량 입고일자 :</DetailTItle>
                  <DetailTItle>2024 / 05 / 05</DetailTItle>
                </RowBox>
                <RowBox>
                  <DetailTItle>* 차량 수리완료일자 : </DetailTItle>

                  <DetailTItle>2024 / 05 / 05 </DetailTItle>
                </RowBox>
                <RowBox>
                  <DetailTItle>* 실제 수리 비용 :</DetailTItle>
                  <Input2 />
                </RowBox>
                <BoxTitle>[협력사 수리 예상 비용 범위]</BoxTitle>
                <RowBox>
                  <DetailTItle>* 서비스센터 : </DetailTItle>
                  <DetailTItle>수리비용 : 0000원 ~ 0000원 </DetailTItle>
                </RowBox>
                <RowBox>
                  <DetailTItle>* 1급종합공업사 : </DetailTItle>
                  <DetailTItle>수리비용 : 0000원 ~ 0000원 </DetailTItle>
                </RowBox>
                <RowBox>
                  <DetailTItle>* 일반공업사 : </DetailTItle>
                  <DetailTItle>수리비용 : 0000원 ~ 0000원 </DetailTItle>
                </RowBox>
              </DetailInfo>
            </RowBox>

            <BoxTitle style={{ marginTop: "1.25rem" }}>
              [홍길동 고객님 이용후기]
            </BoxTitle>
            <RowBox>
              <Score>
                <ScoreText>[평가하기]</ScoreText>
                <ScoreImage>
                  <StarRating onRate={handleServiceRating} />
                </ScoreImage>
              </Score>
              <ScoreText2>
                <ScoreText2>[추가 평가]</ScoreText2>
                <DetailTItle>
                  * 서비스는 만족하시나요?
                  <FaRegThumbsUp style={{ marginLeft: "4.375rem" }} />
                  <FaRegThumbsDown style={{ marginLeft: "0.625rem" }} />
                </DetailTItle>
                <DetailTItle>
                  * 수리비용은 만족하시나요?
                  <FaRegThumbsUp style={{ marginLeft: "3.625rem" }} />
                  <FaRegThumbsDown style={{ marginLeft: "0.625rem" }} />
                </DetailTItle>
                <DetailTItle>
                  * 추천 할 만 한가요?
                  <FaRegThumbsUp style={{ marginLeft: "6.125rem" }} />
                  <FaRegThumbsDown style={{ marginLeft: "0.625rem" }} />
                </DetailTItle>
              </ScoreText2>
            </RowBox>
            <RowBox>
              <BoxTitle>[후기글 등록]</BoxTitle>
              <InputText>[0/200자 이내]</InputText>
            </RowBox>
            <Input3 />
            <SaveButton>후기 등록</SaveButton>
          </BoxContainer>
        </Box>
      </PopupContainer>
    </Overlay>
  );
};

const Score = styled.div`
  width: 16.375rem;
  height: 7.4375rem;
  border-right: 1px solid #b9b9b9;
`;
const Input3 = styled.input`
  width: 35rem;
  height: 6rem;
  border: 1px solid #767676;
  border-radius: 0.375rem;
  margin-top: 0.625rem;
`;
const ScoreText = styled.div`
  width: 16.375rem;
  height: 7.4375rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0.625rem;
`;
const SaveButton = styled.button`
  width: 5.375rem;
  height: 2.0625rem;
  color: white;
  border-radius: 0.375rem;
  background-color: #558ed5;
  border: 0;
  margin: auto;
`;
const ScoreText2 = styled.div`
  width: 16.375rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0.4rem;
  margin-bottom: 2rem;
`;
const ScoreImage = styled.div`
  margin-top: -4.375rem;
  margin-left: 3.4375rem;
`;
const DetailInfo = styled.div`
  width: 16.25rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InputText = styled.div`
  font-size: 0.8125rem;
`;
const DetailTItle = styled.div`
  font-size: 0.8rem;
`;
const DetailTItle1 = styled.div`
  width: 8rem;
  font-size: 0.8rem;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 58rem;
  margin: auto;
  margin-top: 0.625rem;
`;
const Section = styled.div`
  display: flex;
`;
const PhotoBox = styled.div`
  width: 10rem;
  height: 9.375rem;
  margin-bottom: 3rem;
`;
const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.3125rem;
`;
const BoxTitle = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`;
const Photo1 = styled.div`
  width: 10rem;
  height: 7.5rem;
  background-color: #d9d9d9;
  margin-top: 0.1875rem;
`;
const Photo2 = styled.div`
  width: 2.2rem;
  height: 2rem;
  background-color: #d9d9d9;
`;
const InputContainer = styled.div`
  margin-top: 2rem;
  margin-left: 1.5625rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.1875rem;
`;
const Input = styled.div`
  width: 18rem;
  height: 1.4375rem;
  border: 1px solid #808080;
`;
const Input2 = styled.input`
  width: 9rem;
`;
const AddButton = styled.button`
  margin-left: 0.3125rem;
  width: 3.75rem;
  height: 1.5rem;
  border: 0;
  color: white;
  background-color: #838383;
  border-radius: 0.125rem;
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
  width: 40.1875rem;
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
  overflow: scroll;
  height: 55rem;
`;
export default RepairListPopup;
