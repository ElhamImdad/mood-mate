import React, { useState } from "react";
import LastSelectedColorContext from "./ColorContext";
import { ColorContextProps } from "./ColorContext";

const ColorContextProvider = ({ children }) => {
  const [colorVal, setColor] = useState<string | null>(null);

  const updateColorData = (newValue: string) => {
    setColor(newValue);
  };

  const contextValue: ColorContextProps = {
    colorVal,
    updateColorData,
  };

  return (
    <LastSelectedColorContext.Provider value={contextValue}>
      {children}
    </LastSelectedColorContext.Provider>
  );
};

export default ColorContextProvider;
