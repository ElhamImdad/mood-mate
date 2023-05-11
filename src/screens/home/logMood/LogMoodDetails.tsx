import { View, Text } from "react-native";
import React from "react";
import Button from "../../../components/button/Button";
import MoodSlider from "./moodSlider/MoodSlider";

const LogMoodDetails = () => {
  return (
    <View className="my-10 bg-white">
      <View className="items-center justify-center">
        <Text className="text-xl font-extrabold text-black800">
          How are you?
        </Text>
        <MoodSlider/>
      </View>
      <View className="flex-1 justify-end">
        <Button
          type="solid"
          textColor="white"
          mx={48}
          my={20}
          pr_title={6}
          onPress={() => alert("next button toggled")}
        >
          Next
        </Button>
      </View>
    </View>
  );
};

export default LogMoodDetails;
