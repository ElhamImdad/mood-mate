import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { BottomSheet, ListItem } from "@rneui/themed";
import Button from "../../../components/button/Button";
import MoodSlider from "./moodSlider/MoodSlider";
import Modal from "../../../components/modal/Modal";
import Note from "./moodSlider/Note";

const { height } = Dimensions.get("window");
const LogMoodDetails = () => {
  const [noteModalVisible, setNoteModalVisible] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  const toggleNoteModal = (): void => {
    setNoteModalVisible(!noteModalVisible);
  };
  return (
    <View className="py-14 px-5 bg-white50 h-screen">
      <Text className="text-xl font-extrabold text-black800 text-center">
        How are you?
      </Text>
      <MoodSlider />
      <View className="flex-1 justify-end bottom-16">
        <Button
          type="solid"
          textColor="white"
          mx={48}
          my={20}
          onPress={() => setNoteModalVisible(true)}
        >
          Next
        </Button>

        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <Modal
          visible={noteModalVisible}
          onRequestClose={toggleNoteModal}
          transparent={true}
          animationType="slide"
        >
          <View className="flex-1 flex-col justify-end">
            <KeyboardAvoidingView
              enabled={true}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={0}
            >
              <Note toggleClose={toggleNoteModal} />
            </KeyboardAvoidingView>
          </View>
        </Modal>
        {/* </TouchableWithoutFeedback> */}
      </View>
    </View>
  );
};

export default LogMoodDetails;
