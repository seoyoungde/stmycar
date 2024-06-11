import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import { FaAngleDown, FaRegThumbsUp } from "react-icons/fa6";
import StarRating from "../../Button/StarRating";
import { css } from "@emotion/react";
import PopupTable from "../PopupTable";

interface RepairCommentPopupProps {
  onClose: () => void;
}
const RepairCommentPopup: React.FC<RepairCommentPopupProps> = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const headers = ["번호", "회원명", "리뷰 내용", "등록일자", "평가/조회수"];
  const data = [
    [100, "홍길동", "정말 친절하시네요 그리고...", "2024.03.01", "평가/조회수"],
    [100, "홍길동", "정말 친절하시네요 그리고...", "2024.03.01", "평가/조회수"],
    [100, "홍길동", "정말 친절하시네요 그리고...", "2024.03.01", "평가/조회수"],
  ];

  const renderCell = (data: any, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 4) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "5rem",
            margin: "auto",
          }}
        >
          <FaRegThumbsUp />
          <RenderText>|</RenderText>
          <RenderText>20회</RenderText>
        </div>
      );
    }
    return data;
  };

  const headerStyles = css`
    border: 1px solid #cecece;
    padding: 0.5rem;
    text-align: center;
    color: white;
    font-size: 1rem;
    font-weight: normal;
    background-color: black;
    font-size: 0.875rem;
    white-space: pre-wrap;
  `;

  const cellStyles = css`
    border: 1px solid #cecece;
    padding: 0.5rem;
    text-align: center;
    font-size: 0.8125rem;
  `;

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
          <Title>사고수리정보 댓글 상세 리스트</Title>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </HeaderBox>
        <Box>
          <BoxContainer>
            <TitleContainer>
              <BoxTitle>[수리 전]</BoxTitle>
              <Photo1></Photo1>

              <Photo2></Photo2>
              <BoxTitle>[수리 후]</BoxTitle>
            </TitleContainer>

            <SubBox>
              <Icon>
                <FaAngleDown />
              </Icon>
              <SubButton onClick={toggleExpansion}>
                {isExpanded ? "접기" : "펼치기"}
              </SubButton>
            </SubBox>
            {isExpanded && (
              <ExpandedBox>
                {
                  <div style={{ marginLeft: "0.625rem" }}>
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
                          <DetailTItle>
                            * 사고부위: 앞범퍼,운전석뒷휀다
                          </DetailTItle>
                        </RowBox>
                        <DetailTItle>
                          * 제조사/모델/등급/연식/색상/기타
                        </DetailTItle>
                        <DetailTItle style={{ marginLeft: "0.4375rem" }}>
                          :기아/K5/가솔린1600CC/2.0력셔리/2011/진주색/선루프
                        </DetailTItle>
                      </DetailInfo>
                      <DetailInfo>
                        <RowBox2>
                          <DetailTItle>* 차량입고일자 :</DetailTItle>
                          <DetailTItle>2024 / 05 / 05</DetailTItle>
                        </RowBox2>
                        <RowBox2>
                          <DetailTItle>* 차량 수리완료일자 : </DetailTItle>
                          <DetailTItle>2024 / 01 / 15</DetailTItle>
                        </RowBox2>
                        <RowBox2>
                          <DetailTItle>* 실제수리비용 통합금액 : </DetailTItle>
                          <DetailTItle>대략 60만원 소요</DetailTItle>
                        </RowBox2>

                        <DetailTItle>[협력사 수리 비용 예상 범위]</DetailTItle>
                        <DetailTItle>-서비스센터 100만원~150만원</DetailTItle>
                        <DetailTItle>-1급공업사 50만원~100만원</DetailTItle>
                        <DetailTItle>-일반공업사 50만원~100만원</DetailTItle>
                      </DetailInfo>
                    </RowBox>
                  </div>
                }
              </ExpandedBox>
            )}
            <Line></Line>
            <Title>[홍길동 고객님 이용후기]</Title>
            <ReviewContainer>
              <ScoreBox>
                <ScoreTitle>[평점]</ScoreTitle>
                <Score>
                  <StarRating onRate={handleServiceRating} />
                </Score>
              </ScoreBox>
              <ReviewBox>
                <ReviewText>[후기 글]</ReviewText>
                <Review>
                  친절하게 잘 수리해주시고
                  <br />
                  부분수리가 아닌 전체까지 잘 봐주시면서
                  <br />
                  영업장도 깔끔해서 정말 마음에 들었습니다
                  <br />
                  감사합니다
                  <br />
                  가격도 합리적으로 한 것 같습니다
                </Review>
              </ReviewBox>
            </ReviewContainer>
            <TextBox>
              <TableText>목록 개수</TableText>

              <select
                style={{
                  width: "4.375rem",
                  height: "1.4375rem",
                  borderRadius: "0",
                }}
              >
                <option value="1">5</option>
                <option value="2">4</option>
                <option value="3">3</option>
              </select>
            </TextBox>
            <PopupTable
              headers={headers}
              data={data}
              width="40.1875rem"
              headerStyles={headerStyles}
              cellStyles={cellStyles}
              renderCell={renderCell}
            />
          </BoxContainer>
        </Box>
      </PopupContainer>
    </Overlay>
  );
};

const DetailTItle1 = styled.div`
  width: 8rem;
  font-size: 0.8rem;
`;
const DetailInfo = styled.div`
  width: 16.25rem;
  height: 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.3125rem;
`;
const RowBox2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.3125rem;
`;
const DetailTItle = styled.div`
  font-size: 0.875rem;
`;
const ExpandedBox = styled.div`
  width: 40.4375rem;
  height: 14rem;
  background-color: #f0f0f0;
  margin-top: 0.625rem;
`;
const TextBox = styled.div`
  margin-top: 1.25rem;
  display: flex;
  margin-bottom: 0.625rem;
`;
const TableText = styled.div`
  font-size: 0.8125rem;
  line-height: 1.4375rem;
  margin-right: 0.3125rem;
`;
const RenderText = styled.div`
  color: #558ed5;
`;
const Review = styled.div`
  width: 16.6875rem;
  height: 5.875rem;
  background-color: white;
  border-radius: 0.625rem;
  font-size: 0.75rem;
  padding-top: 0.625rem;
  padding-left: 0.625rem;
  margin: auto;
  margin-top: 0.625rem;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40.1875rem;
  height: 10.0625rem;
  background-color: #f0f0f0;
`;
const ScoreBox = styled.div`
  width: 20rem;
  height: 9.4375rem;
  text-align: center;
`;
const ScoreTitle = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  margin-top: 1.25rem;
`;
const Score = styled.div`
  margin-top: 2.5rem;
`;
const ReviewBox = styled.div`
  width: 20rem;
  height: 9.4375rem;
`;
const ReviewText = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  margin-top: 1.25rem;
  text-align: center;
`;
const SubBox = styled.div`
  width: 40.1875rem;
  height: 2.5625rem;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
`;
const Icon = styled.div`
  margin-right: 15rem;
  margin-left: 20rem;
  margin-top: 0.625rem;
`;
const SubButton = styled.button`
  width: 3.375rem;
  height: 1.5rem;
  border: 0;
  background-color: #838383;
  border-radius: 0.125rem;
  color: white;
  font-size: 0.8125rem;
  margin-top: 0.5rem;
`;
const Line = styled.div`
  width: 40.1875rem;
  border-top: 1px solid #cecece;
  margin-top: 1.875rem;
`;
const TitleContainer = styled.div`
  width: 40.1875rem;
  height: 7.8125rem;
  display: flex;
  flex-direction: row;
  font-size: 0.875rem;
  font-weight: bold;
  margin-left: 2.8125rem;
  margin-bottom: 1.25rem;
`;
const BoxTitle = styled.div`
  font-weight: bold;
  margin-top: 0.625rem;
`;
const Photo1 = styled.div`
  width: 10.0625rem;
  height: 7.8125rem;
  border: 1px solid #808080;
  margin-left: 0.625rem;
  margin-right: 6.125rem;
`;
const Photo2 = styled.div`
  width: 10.0625rem;
  height: 7.8125rem;
  border: 1px solid #808080;
  margin-right: 0.625rem;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.1875rem;
  height: auto;
  margin: auto;
  margin-top: 0.625rem;
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
  height: 50rem;
  overflow: scroll;
`;
export default RepairCommentPopup;
