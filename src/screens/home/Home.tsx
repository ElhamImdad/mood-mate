import { View, Text } from "react-native";
import React, { useState } from "react";
import Inspirations from "./inspirations/Inspirations";
import Entries from "./Entries";
import LogMood from "./logMood/LogMood";

const Home = ({ navigation }) => {
  
  return (
    <View className="pt-16 px-6 h-full">
      <Inspirations navigation={navigation}/>
      <Entries />
      <LogMood/>
    </View>
  );
};

export default Home;
