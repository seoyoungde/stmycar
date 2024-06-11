import React from "react";
import styled from "@emotion/styled";

interface PopupProps {
  message: string;
  onClose: () => void;
  confirmAction?: () => void;
  onConfirm?: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose, confirmAction }) => {
  return (
    <>
      <PopupBackdrop onClick={onClose} />
      <PopupContainer>
        <PopupBox>
          <Message>{message}</Message>
          <ButtonBox>
            <Button
              onClick={() => {
                onClose();
                if (confirmAction) {
                  confirmAction();
                }
              }}
            >
              확인
            </Button>
          </ButtonBox>
        </PopupBox>
      </PopupContainer>
    </>
  );
};
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-41%, -50%);

  background: white;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const PopupBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const PopupBox = styled.div`
  width: 290px;
  height: 205px;
`;
const Message = styled.p`
  font-size: 14px;
  text-align: center;
  margin: auto;
  height: 152px;
  line-height: 152px;
`;
const ButtonBox = styled.div`
  width: 290px;
  height: 53px;
  background-color: #d9d9d9;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 282px;
  height: 44px;
  margin-top: 4px;
  margin-left: 4px;
`;

export default Popup;
