import React from "react";
import styled from "@emotion/styled";

const formFields = [
  { label: "아이디", type: "text" },
  { label: "이름", type: "text" },
  { label: "비밀번호", type: "password" },
  { label: "비밀번호 확인", type: "password" },
  { label: "이메일 주소", type: "email" },
  {
    label: "권한 선택",
    type: "checkbox",
    options: [
      "마스터",
      "부 운영자",
      "회원관리",
      "견적/예약관리",
      "사고수리정보관리",
      "카테고리관리",
      "이벤트/홍보관리",
      "운영관리",
      "고객센터",
      "통계관리",
    ],
  },
];
const RegisterTable: React.FC = () => {
  const permissions = formFields.find((field) => field.label === "권한 선택");

  return (
    <Container>
      <Box>
        <Table>
          <tbody>
            {formFields.slice(0, 5).map((field, index) => (
              <TableRow key={index} isEven={index % 2 === 0}>
                <LabelCell>{field.label}:</LabelCell>
                <InputCell>
                  <Input type={field.type} />
                  {field.label === "아이디" && (
                    <IdInputText>
                      <IdButton>중복확인</IdButton>
                      <IdText>*영문, 숫자, 기호 포함 6~16자 이내</IdText>
                    </IdInputText>
                  )}
                  {field.label === "비밀번호" && (
                    <PasswordBox>
                      <PasswordText>
                        *영문, 숫자, 기호 포함 6~16자 이내
                      </PasswordText>
                    </PasswordBox>
                  )}
                  {field.label === "이메일 주소" && (
                    <EmailBox>
                      @
                      <select
                        style={{
                          width: "7.5rem",
                          height: "1.5625rem",
                          borderRadius: "0",
                          marginTop: "0.4375rem",
                          marginLeft: "0.4375rem",
                        }}
                      >
                        <option value="1">이메일주소</option>
                        <option value="2">naver.com</option>
                        <option value="3">gmail.com</option>
                        <option value="3">nate.com</option>
                      </select>
                    </EmailBox>
                  )}
                </InputCell>
              </TableRow>
            ))}

            {permissions?.options && (
              <TableRow isPermissionRow={true}>
                <LabelCell>권한 선택:</LabelCell>
                <InputCell>
                  {permissions.options.slice(0, 2).map((option) => (
                    <CheckboxContainer key={option}>
                      <Checkbox type="checkbox" id={option} name="role" />
                      <CheckboxLabel htmlFor={option}>{option}</CheckboxLabel>
                    </CheckboxContainer>
                  ))}
                  <NewLine />
                  {permissions.options.slice(2).map((option) => (
                    <CheckboxContainer key={option}>
                      <Checkbox type="checkbox" id={option} name="role" />
                      <CheckboxLabel htmlFor={option}>{option}</CheckboxLabel>
                    </CheckboxContainer>
                  ))}
                </InputCell>
              </TableRow>
            )}
          </tbody>
        </Table>
      </Box>
    </Container>
  );
};
const EmailBox = styled.div`
  margin-left: 0.875rem;
`;
const NewLine = styled.div`
  flex-basis: 100%;
  height: 0.3125rem;
`;
const Input = styled.input`
  width: 7.875rem;
  height: 1.4375rem;
  margin: auto;
  border: 1px solid #ccc;
  margin-right: 0;
  margin-left: 0.3125rem;
`;
const TableRow = styled.tr<{ isEven?: boolean; isPermissionRow?: boolean }>`
  height: ${({ isPermissionRow }) => (isPermissionRow ? 56 : 39)}px;
  background-color: ${({ isEven }) => (isEven ? "#ffffff" : "#ffffff")};
  border-bottom: 1px solid #cecece;
`;
const Container = styled.div`
  width: 72.625rem;
  height: 16.8125rem;
  margin: auto;
  margin-left: 1.75rem;
`;
const IdInputText = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.75rem;
  text-align: center;
  margin: auto;
  margin-left: 0.875rem;
`;

const IdButton = styled.button`
  width: 5.125rem;
  height: 1.4375rem;
  border: 1px solid #9b9b9b;
  border-radius: 0.1875rem;
  background-color:white;
  font-size:0.7rem;
  cursor:pointer;
`;

const IdText = styled.div`
  line-height: 1.4375rem;
  margin-left: 0.75rem;
`;
const PasswordBox = styled.div`
  margin: auto;
  margin-left: 0;
`;

const PasswordText = styled.div`
  line-height: 1.4375rem;
  margin-left: 0.875rem;
  font-size: 0.75rem;
`;

const Box = styled.div`
  border: 1px solid #cecece;
  border-top: 0;
`;
const Table = styled.table`
  width: 72.625rem;
  height: 16.8125rem;
`;
const TableCell = styled.td`
  border-top: 1px solid #cecece;
`;
const LabelCell = styled(TableCell)`
  font-size: 0.875rem;
  padding-left: 0.75rem;
  background-color: #e2e2e2;
  width: 6.625rem;
  height: 2.4375rem;
  border-right: 1px solid #cecece;
`;

const InputCell = styled(TableCell)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 2.4375rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.1875rem;
  width:7.5rem;
  margin-top: 0.1rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
`;

const CheckboxLabel = styled.label`
  font-size: 0.75rem;
`;

export default RegisterTable;
