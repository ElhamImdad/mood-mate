import { View, Image } from "react-native";
import React from "react";
import { FeelingModel } from "../../../../models/FeelingModel";

const MoodSlideItem = React.forwardRef(
  ({ children, ...props }: any, ref: any) => {
    let { item }: MoodSlideItemInterface = props;
    return (
      <View className="relative items-center px-4">
        <Image source={item.emoji} resizeMode="contain"/>
      </View>
    );
  }
);

export default MoodSlideItem;

interface MoodSlideItemInterface {
  item: FeelingModel;
}