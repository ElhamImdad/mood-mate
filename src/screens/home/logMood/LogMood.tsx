import { View } from "react-native";
import React, { useState } from "react";
import Button from "../../../components/button/Button";
import { Icon } from "../../../utils/Utils";
import Modal from "../../../components/modal/Modal";
import colors from "../../../utils/colors";
import LogMoodDetails from "./LogMoodDetails";

const LogMood = () => {
  const [moodModalVisible, setMoodModalVisible] = useState(false);

  const toggleLogMood = (): void => {
    setMoodModalVisible(!moodModalVisible);
  };
  return (
    <View className="flex justify-end">
      <Modal
        moodModalVisible={moodModalVisible}
        onRequestClose={toggleLogMood}
        pageStyle="pageSheet"
        animationType="slide"
      >
        <LogMoodDetails />
      </Modal>
      <Button
        type="solid"
        textColor="white"
        mx={48}
        my={20}
        pr_title={6}
        onPress={toggleLogMood}
      >
        Log your mood
        <Icon name="plus" color={colors.white} />
      </Button>
    </View>
  );
};

export default LogMood;
