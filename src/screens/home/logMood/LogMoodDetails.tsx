import { View, Text, ScrollView } from "react-native";
import React from "react";
import Button from "../../../components/button/Button";
import MoodSlider from "./moodSlider/MoodSlider";

const LogMoodDetails = () => {
  return (
    // <ScrollView>
    <View className="py-10 px-5 bg-white50">
      {/* <View className="items-center"> */}
        <Text className="text-xl font-extrabold text-black800 text-center">
          How are you?
        </Text>
        <MoodSlider/>
      {/* </View> */}
      <View className="flex justify-end">
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
    //  </ScrollView>
  );
};

export default LogMoodDetails;
