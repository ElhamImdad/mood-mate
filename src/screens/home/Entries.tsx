import { View, Text } from "react-native";
import React from "react";
import CardDetails from "../../components/card/CardDetails";
import { MOOD_ENTRIES } from "../../utils/Constant";
import { ScrollView } from "react-native";

const Entries = () => {
  let mood_entries = MOOD_ENTRIES;
  return (
    <View className="flex-1">
      <Text className="text-black800 text-2xl font-extrabold">May 2023</Text>
      <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
        {mood_entries.map((item, i) => (
          <CardDetails data={item} key={i}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default Entries;
