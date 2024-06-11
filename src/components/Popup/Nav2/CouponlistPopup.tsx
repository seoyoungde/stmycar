import React, { useState } from "react";
import styled from "@emotion/styled";
import PopupNumBox, { PopupNumBoxField } from "../PopupNumbox";
import { Box, BoxRow, LabelCell, InputCell } from "../PopupBox";
import { css } from "@emotion/react";
import PopupTable from "../PopupTable";
import Pagination from "../../Button/Pagination";

const formFields: PopupNumBoxField[] = [
  { label: "누적 쿠폰", value: "10장" },
  { label: "사용가능 쿠폰", value: "5장" },
  { label: "만기/사용한 쿠폰", value: "5장" },
];

const CouponlistPopup = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const headers = [
    "번호",
    "다운로드 일시",
    "받은 쿠폰 금액",
    "내역",
    "사용일시",
    "사용여부",
  ];
  const data = [
    [3, "2024.08.08", "6000 원권", "첫 견적신청", "2024/03/01", "-5000원"],
    [2, "2024.08.08", "6000 원권", "첫 견적신청", "2024/03/01", "-5000원"],
    [1, "2024.08.08", "6000 원권", "첫 견적신청", "2024/03/01", "-5000원"],
  ];

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
  return (
    <div style={{ width: "66.875rem", display: "flex", flexDirection: "column" }}>
      <Title>∙ 현재 보유 쿠폰 현황</Title>
      <InfoBox>
        <PopupNumBox
          fields={formFields}
          tableWidth={1020}
          labelWidth={150}
          valueWidth={150}
        />
      </InfoBox>

      <Title>∙ 쿠폰 사용 내역</Title>
      <PopupTable
        headers={headers}
        data={data}
        width="63.75rem"
        headerStyles={headerStyles}
        cellStyles={cellStyles}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const InfoBox = styled.div`
  width: 100%;
  display: flex;
`;
const Title = styled.div`
  font-size: 1.0625rem;
  margin-top: 1.8125rem;
  margin-bottom: 0.9375rem;
  font-weight: bold;
`;
export default CouponlistPopup;
