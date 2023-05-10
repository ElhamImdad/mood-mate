import { View, Text } from "react-native";
import React, { useState } from "react";
import Inspirations from "./Inspirations";
import Entries from "./Entries";
import LogMood from "./logMood/LogMood";

const Home = ({ navigation }) => {
  
  return (
    <View className="pt-16 px-6 h-full">
      <Inspirations />
      <Entries />
      <LogMood/>
    </View>
  );
};

export default Home;
