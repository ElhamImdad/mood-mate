import React, { createContext } from "react";

export interface ColorContextProps {
    colorVal: string | null;
    updateColorData: (newValue: string) => void;
  }

const LastSelectedColorContext = createContext<ColorContextProps | undefined>(undefined)

export default LastSelectedColorContext;
