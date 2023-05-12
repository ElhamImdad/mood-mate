import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";

const Note = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let { toggleClose }: NoteModalInterface = props;

  return (
    <View className="bg-white rounded-3xl">
      
      <Pressable className="items-center" onTouchEnd={toggleClose}>
        <View className="bg-gray100 h-1.5 w-1/5 rounded-full mt-4" />
      </Pressable>
      
      <View className="p-10">
      <ScrollView >
        <Text className="text-lg font-bold text-black800 text-start">
          Add Note
        </Text>
        <Input size="h-24" space="my-5" 
        textColor="black"
       
        multiline={true}
        maxLength={300}
        />
        
        <Button
          type="solid"
          textColor="white"
          mx={48}
          my={20}
          onPress={toggleClose}
        >
          Save
        </Button>
        </ScrollView>
      </View>
     
    </View>
  );
});

export default Note;

interface NoteModalInterface {
  toggleClose?: () => void;
}
