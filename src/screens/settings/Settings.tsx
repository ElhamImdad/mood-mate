import React, { useContext } from "react";
import { View } from "react-native";
import EmptyState from "../../components/empty-state/EmptyState";
import LastSelectedColorContext from "../../context/color-context/ColorContext";

const Settings = () => {
  const { colorVal, } = useContext(LastSelectedColorContext);
  return (
    <View className="flex-1" style={{backgroundColor: colorVal}}>
      <EmptyState label={"Settings Screen"} />
    </View>
  );
};

export default Settings;
