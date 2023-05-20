import { View } from "react-native";
import React, { useContext, useEffect } from "react";
import Inspirations from "./inspirations/Inspirations";
import Entries from "./Entries";
import LogMood from "./logMood/LogMood";
import LastSelectedColorContext from "../../context/color-context/ColorContext";
import { retrieveLastSelectedMoodData } from "../../utils/MoodBehavior";
import { useAppSelector } from "../../store/store";
import colors from "../../utils/colors";

const Home = ({ navigation }) => {
  const { colorVal, updateColorData } = useContext(LastSelectedColorContext);
  const coloresList = useAppSelector((state) => state.fetchColors.colorsVal);
  let lastSelectedFeelingId = retrieveLastSelectedMoodData();
  useEffect(() => {
    lastSelectedFeelingId.then((feeling_id) => {
      const colorForLAstSelected = coloresList.filter((colorValue, idx) => {
        if (idx + 1 === Number.parseInt(feeling_id)) return colorValue;
        else colors.white50;
      });
      updateColorData(colorForLAstSelected[0]);
    });
  },[])

  return (
    <View className="pt-16 px-6 h-full" style={{ backgroundColor: colorVal }}>
      <Inspirations navigation={navigation} />
      <Entries />
      <LogMood />
    </View>
  );
};

export default Home;
