import { View, Text, Image } from "react-native";
import React from "react";
// import { FeelingModel } from "../../../../models/FeelingModel";

const MoodSlideItem = React.forwardRef(
  ({ children, ...props }: any, ref: any) => {
    let { item }: MoodSlideItemInterface = props;
    return (
      <View className="items-center justify-cente">
        <Image source={item.img} resizeMode="contain" />
        <Text>{item.name.toUpperCase()}</Text>
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
    name: string;
  }