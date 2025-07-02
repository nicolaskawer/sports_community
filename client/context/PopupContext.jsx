import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [closeAllPopups, setCloseAllPopups] = useState(() => () => {});

  return (
    <PopupContext.Provider value={{ setCloseAllPopups, closeAllPopups }}>
      {children}
    </PopupContext.Provider>
  );
};
