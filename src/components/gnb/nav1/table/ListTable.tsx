import React, { useState } from "react";
import styled from "@emotion/styled";
import Table from "../../../Table/Table";
import { css } from "@emotion/react";
import AdminListPopup from "../../../Popup/Nav1/AdminListPopup";
import { usePopup } from "../../../Popup/UsePopup";
import Popup from "../../../Popup/Popup";
import Pagination from "../../../Button/Pagination";

type TableData = string[][];

const ListTable = () => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();
  const [isSmallPopupVisible, setIsSmallPopupVisible] = useState<{ visible: boolean; rowIndex?: number }>({ visible: false });
  const [isSmallPopup2Visible, setIsSmallPopup2Visible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<TableData>([
    ["1", "홍길동", "Aassas(마스터)", "전체 메뉴 접근 권한", "2044/05/85", "버튼"],
    ["2", "홍길대", "Bassas(부운영자)", "회원관리, 카테고리관련, 이벤트/홍보관리", "2024/03/30", "버튼"],
    ["3", "홍길수", "Cassas(부운영자)", "견적/예약관리,통계관리", "2024/03/30", "버튼"],
  ]);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showSmallPopup = (rowIndex: number) => {
    setIsSmallPopupVisible({ visible: true, rowIndex });
  };

  const closeSmallPopup = () => {
    setIsSmallPopupVisible({ visible: false });
  };

  const deleteRow = () => {
    if (isSmallPopupVisible.visible && typeof isSmallPopupVisible.rowIndex === "number") {
      setData(prevData => prevData.filter((_, index) => index !== isSmallPopupVisible.rowIndex));
      setIsSmallPopupVisible({ visible: false });
      setIsSmallPopup2Visible(true);
    }
  };

  const closeSmallPopup2 = () => {
    setIsSmallPopup2Visible(false);
  };

  const headers = ["No", "이름", "아이디", "권한 ", "등록일", "관리"];

  const renderCell = (cellData: string, rowIndex: number, cellIndex: number) => {
    if (cellIndex === 5) {
      return (
        <ButtonBox>
          <ModifyButton onClick={openPopup}>수정</ModifyButton>
          <DeleteButton onClick={() => showSmallPopup(rowIndex)}>삭제</DeleteButton>
        </ButtonBox>
      );
    }
    return cellData;
  };

  const headerStyles = css`
    border: 1px solid #cecece;
    padding: 0.5rem;
    text-align: center;
    color: white;
    font-size: 1rem;
    font-weight: normal;
    background-color: #646464;
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
    <PageContainer>
      <Container>
        <Title>∙ 관리자 목록</Title>

        <Header>
          <TableButton>
            <Text>∙ 총 5명, 1 / 1 페이지</Text>
          </TableButton>
        </Header>

        <Table
          headers={headers}
          data={data}
          width="100%"
          headerStyles={headerStyles}
          cellStyles={cellStyles}
          renderCell={renderCell}
        />
        {isPopupVisible && <AdminListPopup onClose={closePopup} />}
        {isSmallPopupVisible.visible && (
          <Popup
            message="정말로 삭제하시겠습니까?"
            onClose={closeSmallPopup}
            onConfirm={deleteRow}
          />
        )}
        {isSmallPopup2Visible && (
          <Popup message="삭제되었습니다." onClose={closeSmallPopup2} />
        )}
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
};

const Text = styled.div`
  line-height: 2rem;
  font-size: 0.9375rem;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 0.4375rem;
`;

const TableButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 72.9375rem;
`;
const Title = styled.div`
  font-size: 1.1875rem;
  margin-left: 0.625rem;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.875rem;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.75rem;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 6.875rem;
  margin: auto;
`;
const ModifyButton = styled.button`
  width: 3.125rem;
  height: 1.625rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
  cursor:pointer;
`;
const DeleteButton = styled.button`
  width: 3.125rem;
  height: 1.625rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
  cursor:pointer;
`;

export default ListTable;