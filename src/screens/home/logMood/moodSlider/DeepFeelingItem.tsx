import { View, Text, Pressable } from "react-native";
import React from "react";
import cn from "classnames";
import { FeelingModel } from './MoodSlideItem';

const DeepFeelingItem = ({item, onPress, bgColor, textColor}: {item: DeepFeelingItemInterface, onPress?: ()=>void, bgColor?: string, textColor?: string}) => {
  console.log(bgColor)
  
  return (
    <Pressable className={cn("rounded-md py-2 px-2.5 mr-2 my-3 ", { " bg-white ":bgColor==="white", "bg-darkSky":bgColor==="darkSky"})} onPress={onPress}>
      <Text className={cn("text-sm text-black800 font-medium ", { " text-white ":textColor==="white", "text-black800":textColor==="black800" })}>{item.name}</Text>
    </Pressable>
  );
};

export default DeepFeelingItem;

export interface DeepFeelingItemInterface {
  id: number;
  name: string;
}
