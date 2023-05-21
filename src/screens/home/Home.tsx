import { View } from "react-native";
import React, { useContext, useEffect } from "react";
import Inspirations from "./inspirations/Inspirations";
import Entries from "./Entries";
import LogMood from "./logMood/LogMood";
import LastSelectedColorContext from "../../context/color-context/ColorContext";
import { useAppSelector } from "../../store/store";
import colors from "../../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const { colorVal, updateColorData } = useContext(LastSelectedColorContext);
  const colorsList = useAppSelector((state) => state.fetchColors.colorsVal);

  const retrieveLastSelectedMoodData = async () => {
    const value = await AsyncStorage.getItem("lastSelectedMood");
    if (value) {
      // console.log("Last Selected Mood Data:", value);
      const feeling_ = JSON.parse(value);
      
      const lastSelectedColor = colorsList.filter((colorValue, idx) => {
        if (idx + 1 === feeling_.feelingID) return colorValue;
        else colors.darkSky;
      });
      updateColorData(lastSelectedColor[0]);
    } else {
      console.log("Data not found in local storage.");
    }
  };

  useEffect(() => {
    retrieveLastSelectedMoodData();
  }, [colorsList, colorVal]);

  return (
    <View className="pt-16 px-6 h-full" style={{ backgroundColor: colorVal }}>
      <Inspirations navigation={navigation} />
      <Entries />
      <LogMood />
    </View>
  );
};

export default Home;
