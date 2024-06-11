import { useState } from "react";

export const usePopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopup2Visible, setPopup2Visible] = useState(false);
  const [isPopup3Visible, setPopup3Visible] = useState(false);
  const [isPopup4Visible, setPopup4Visible] = useState(false);

  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);
  const openPopup4 = () => setPopup4Visible(true);
  const closePopup4 = () => setPopup4Visible(false);
  const openPopup2 = () => setPopup2Visible(true);
  const closePopup2 = () => setPopup2Visible(false);
  const openPopup3 = () => setPopup3Visible(true);
  const closePopup3 = () => setPopup3Visible(false);

  return {
    isPopupVisible,
    openPopup,
    closePopup,
    isPopup2Visible,
    openPopup2,
    closePopup2,
    isPopup3Visible,
    openPopup3,
    closePopup3,
    isPopup4Visible,
    openPopup4,
    closePopup4,
  };
};
