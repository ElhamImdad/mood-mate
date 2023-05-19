import React, { createContext } from "react";
import { FeelingModel, FeelingContextProps } from "../../models/FeelingModel";



export const FeelingfContext = createContext<FeelingContextProps | null>(
  null
);

