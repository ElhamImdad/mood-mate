import { View, Image } from "react-native";
import React from "react";

const MoodSlideItem = React.forwardRef(
  ({ children, ...props }: any, ref: any) => {
    let { item }: MoodSlideItemInterface = props;
    return (
      <View className="relative items-center px-4">
        <Image source={item.img} resizeMode="contain"/>
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