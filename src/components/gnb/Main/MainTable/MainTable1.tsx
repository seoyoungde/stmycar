import React from "react";
import { css } from "@emotion/react";
import MainTable from "../../../Table/MainTable";

const MainTable1 = () => {
  const headers = [
    "신규 회원가입",
    "회원 탈퇴",
    "신규 제휴 공업사",
    "사전 견적",
    "입고 예약",
    "수리 중",
    "수리 완료",
  ];
  const headers2 = [
    "이용후기",
    "댓글",
    "개선/제안/칭찬",
    "최근 본 사례",
    "단골등록",
    "1:1문의",
    "신고접수",
  ];
  const data = [["0건", "0건", "0건", "0건", "0건", "0건", "0건"]];
  const data2 = [["0건", "0건", "0건", "0건", "0건", "0건", "0건"]];

  const customHeaderStyles = css`
    background-color: #efefef;
    color: #333;
    font-size: 0.875rem;
    border-top: 0;
    width: 9.375rem;
    height: 1.25rem;
  `;

  const customCellStyles = css`
    padding: 0.5rem;
    font-size: 0.8125rem;
  `;

  return (
    <div style={{ marginLeft: "1.75rem", marginTop: "1.9375rem" }}>
      <h1 style={{ fontSize: "1.0625rem", marginBottom: "1.3125rem" }}>
        ∙ 일급 마이카 일일 이용 현황 (2024.01/01/01 12:00:00 | * 참고사항 : 매일
        3시간 간격 데이터 자동 업데이트 )
      </h1>
      <MainTable
        headers={headers}
        data={data}
        width="72.9375rem"
        headerStyles={customHeaderStyles}
        cellStyles={customCellStyles}
      />
      <div style={{ marginTop: "0.75rem" }}></div>
      <MainTable
        headers={headers2}
        data={data2}
        width="72.9375rem"
        headerStyles={customHeaderStyles}
        cellStyles={customCellStyles}
      />
    </div>
  );
};

export default MainTable1;
