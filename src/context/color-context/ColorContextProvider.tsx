import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import LastSelectedColorContext from "./ColorContext";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { retrieveLastSelectedMoodData } from "../../utils/MoodBehavior";
// import { fetchColors } from "../../store/features/colors-scheme/colorSchemeSlice";
import { ColorContextProps } from "./ColorContext";

const ColorContextProvider = ({ children }) => {
    // const dispatch = useAppDispatch();
  
  const [colorVal, setColor] = useState<string | null>(null);

//   const convertToNumber = async (): Promise<number> => {
//     const result = await retrieveLastSelectedMoodData();
//     const numberValue = parseFloat(result);
//     return isNaN(numberValue) ? 0 : numberValue;
//   };
  
  
  

  // useEffect(() => {
  //   dispatch(fetchColors());
  // }, []);

  

  // const updateColorData = (data: string) => {
  //   coloresList.find((item) => item.feelingID === Number(lastSelectedFeelingId))
  //   setColor(data);
  // };
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
