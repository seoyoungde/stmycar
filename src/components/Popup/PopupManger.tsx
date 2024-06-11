import React from "react";
import { usePopup } from "./UsePopup";

interface PopupManagerProps {
  PopupComponent: React.FC<{ onClose: () => void }>;
  triggerButtonText: string;
}

const PopupManager: React.FC<PopupManagerProps> = ({
  PopupComponent,
  triggerButtonText,
}) => {
  const { isPopupVisible, openPopup, closePopup } = usePopup();

  return (
    <div>
      <button onClick={openPopup}>{triggerButtonText}</button>
      {isPopupVisible && <PopupComponent onClose={closePopup} />}
    </div>
  );
};

export default PopupManager;
