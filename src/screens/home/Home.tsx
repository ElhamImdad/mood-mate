import { View, Text } from "react-native";
import React, { useState } from "react";
import Inspirations from "./Inspirations";
import Button1 from "../../components/button/Button";
import { Icon } from "../../utils/Utils";
import colors from "../../../colors";
import Entries from "./Entries";
import LogMood from "./logMood/LogMood";
import { Button, Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";
import LogMoodModal from "./logMood/LogMoodModal";

const Home = () => {
  // const [logMoodVisible, setLogMoodVisible] = useState(false);
  const [moodModalVisible, setMoodModalVisible] = useState(false);

  const toggleLogMood = (): void => {
     setMoodModalVisible(!moodModalVisible);
  };
  return (
    <View className="pt-16 px-6 h-full">
      <Inspirations />
      <Entries />
      <View className="flex justify-end ">
        <LogMoodModal moodModalVisible={moodModalVisible} onRequestClose={toggleLogMood}/>
        {/* <Pressable
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable> */}
        <Button1
          type="solid"
          textColor="white"
          mx={48}
          my={20}
          pr_title={6}
          onPress={toggleLogMood}
        >
          Log your mood
          <Icon name="plus" color={colors.white} />
        </Button1>
        {/* <LogMood isVisible={logMoodVisible} onBackdropPress={toggleLogMood} /> */}
      </View>
    </View>
  );
};

export default Home;
