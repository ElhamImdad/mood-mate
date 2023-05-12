import { View, Text, Pressable } from "react-native";
import React from "react";
import Button from "../../../../components/button/Button";

const Note = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let { toggleClose }: NoteModalInterface = props;

  return (
    <View className="bg-white h-full rounded-3xl ">
      <Pressable className="items-center" onTouchEnd={toggleClose}>
        <View className="bg-gray100 h-1.5 w-1/5 rounded-full mt-4" />
      </Pressable>
      
      <View className="p-10">
        <Text className="text-lg font-bold text-black800 text-start">
          Add Note
        </Text>
        
        <Button
          type="solid"
          textColor="white"
          mx={48}
          my={20}
          onPress={toggleClose}
        >
          Save
        </Button>
      </View>
    </View>
  );
});

export default Note;

interface NoteModalInterface {
  toggleClose?: () => void;
}
