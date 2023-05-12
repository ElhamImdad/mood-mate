import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { BottomSheet, ListItem } from "@rneui/themed";
import Button from "../../../components/button/Button";
import MoodSlider from "./moodSlider/MoodSlider";
import Modal from "../../../components/modal/Modal";
import Note from "./moodSlider/Note";

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
        {/* <Modal
          modalVisible={noteModalVisible}
          onRequestClose={toggleNoteModal}
         
          animationType="slide"
        >
          
        </Modal> */}

        <Button
          type="solid"
          textColor="white"
          mx={48}
          my={20}
          onPress={() => setNoteModalVisible(true)}
        >
          Next
        </Button>

        <BottomSheet modalProps={{}} isVisible={noteModalVisible} onBackdropPress={toggleNoteModal}>
          <Note toggleClose={toggleNoteModal}/>
          {/* <View className=" bg-white h-full rounded-3xl">
            <Pressable onPress={() => setIsVisible(false)}>
              <Note />
            </Pressable>
          </View> */}
        </BottomSheet>
      </View>
    </View>
  );
};

export default LogMoodDetails;
