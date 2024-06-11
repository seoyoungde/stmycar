import React, { useState } from "react";
import styled from "@emotion/styled";

interface Item {
  id: number;
  text: string;
  editing: boolean;
  isSwitchOn: boolean;
}

const AlermManage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddClick = () => {
    const newItem: Item = {
      id: new Date().getTime(),
      text: "",
      editing: true,
      isSwitchOn: false,
    };
    setItems([...items, newItem]);
  };

  const handleEditClick = (id: number, newText: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, text: newText, editing: false } : item
      )
    );
  };

  const handleDeleteClick = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSwitchToggle = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isSwitchOn: !item.isSwitchOn } : item
      )
    );
  };
  return (
    <div style={{ marginLeft: "1.75rem" }}>
      <AlermManageTitle>[ 알림 항목 설정 관리 ]</AlermManageTitle>
      <Line></Line>
      <Contents>
        <Header>
          <ListTitle>항목</ListTitle>
          <CheckTitle>적용여부</CheckTitle>
          <AddButton onClick={handleAddClick}>항목 추가</AddButton>
        </Header>
        <Line2></Line2>
        <ListBox>
          {items.map((item) => (
            <ItemContainer key={item.id}>
              {item.editing ? (
                <InputField
                  type="text"
                  value={item.text}
                  onChange={(e) =>
                    setItems(
                      items.map((i) =>
                        i.id === item.id ? { ...i, text: e.target.value } : i
                      )
                    )
                  }
                />
              ) : (
                <span>{item.text}</span>
              )}

              <ButtonContainer>
                <ToggleSwitch>
                  <Switch
                    type="checkbox"
                    checked={item.isSwitchOn}
                    onChange={() => handleSwitchToggle(item.id)}
                  />
                  <span className="slider" />
                </ToggleSwitch>
                {item.editing ? (
                  <Button onClick={() => handleEditClick(item.id, item.text)}>
                    저장
                  </Button>
                ) : (
                  <Button
                    onClick={() =>
                      setItems(
                        items.map((i) =>
                          i.id === item.id ? { ...i, editing: true } : i
                        )
                      )
                    }
                  >
                    수정
                  </Button>
                )}
                <Button onClick={() => handleDeleteClick(item.id)}>삭제</Button>
              </ButtonContainer>
            </ItemContainer>
          ))}
        </ListBox>
      </Contents>
      <Line2></Line2>
      <SaveButton>설정 저장</SaveButton>
    </div>
  );
};
const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.25rem;
  margin-right: 2.25rem;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 1.5625rem;
  }

  & .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    left: 0.125rem;
    bottom: 0.125rem;
    background-color: white;
    transition: 0.4s;
  }

  & input:checked + .slider {
    background-color: #00de16;
  }

  & input:checked + .slider:before {
    transform: translateX(1.25rem);
  }
`;
const Switch = styled.input`
  type: checkbox;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625rem;
`;

const InputField = styled.input`
  width: 17rem;
  height: 1.4375rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  gap: 0.3125rem;
`;

const Button = styled.button`
  padding: 0.3125rem 0.625rem;
  width: 3.125rem;
  border: 0;
  background-color: #838383;
  color: white;
  border-radius: 0.375rem;
`;
const AlermManageTitle = styled.div`
  font-size: 1.1875rem;
  font-weight: bold;
  margin-top: 1.8125rem;
  margin-bottom: 0.9375rem;
`;
const Line = styled.div`
  border-top: 1px solid #cecece;
  margin-bottom: 1.25rem;
  width: 72.9375rem;
`;
const Line2 = styled.div`
  border-top: 1px solid #cecece;
  margin: auto;
  margin-top: 0.75rem;
  margin-bottom: 2.125rem;
  width: 41rem;
`;
const Contents = styled.div`
  width: 43.125rem;
  height: 23.75rem;
  margin: auto;
  margin-top: 6.0625rem;
  overflow: auto;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 3rem;
`;
const ListTitle = styled.div`
  font-size: 1.125rem;
  width: 23.5rem;
`;
const ListBox = styled.div`
  height: 15.6875rem;
  margin-left: 3rem;
`;
const CheckTitle = styled.div`
  font-size: 1.125rem;
`;
const AddButton = styled.button`
  width: 6.8125rem;
  height: 1.625rem;
  border-radius: 0.375rem;
  border: 0;
  background-color: #558ed5;
  color: white;
  cursor:pointer;
`;
const SaveButton = styled.button`
  width: 6.8125rem;
  height: 1.625rem;
  background-color: red;
  color: white;
  border: 0;
  border-radius: 0.375rem;
  text-align: center;
  margin-left: 34.375rem;
  cursor:pointer;
`;
export default AlermManage;
