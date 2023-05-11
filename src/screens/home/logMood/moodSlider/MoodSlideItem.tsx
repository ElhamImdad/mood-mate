import { View, Text, Image } from "react-native";
import React from "react";
// import { FeelingModel } from "../../../../models/FeelingModel";

const MoodSlideItem = React.forwardRef(
  ({ children, ...props }: any, ref: any) => {
    let { item }: MoodSlideItemInterface = props;
    return (
      <View className="relative items-center px-4">
        <Image source={item.img} resizeMode="contain" className="h-2/3"/>
        <Text>{item.feelingName.toUpperCase()}</Text>
      </View>
    );
  }
);

export default MoodSlideItem;

export interface MoodSlideItemInterface {
  item: FeelingModel;
}

export interface FeelingModel {
    id?: number;
    img: any;
    feelingName?: string;
    SpecifyFeeling: {
      id: number,
      name: string,
    }[];
  }