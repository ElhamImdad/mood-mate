import { View, Text, FlatList, Animated } from "react-native";
import React, {useRef, useState} from "react";
import { FEELING } from "../../../../utils/Constant";
import MoodSlideItem from "./MoodSlideItem";
import Pagination from "../../../../components/pagination/Pagination"

const MoodSlider = () => {
  const feeling = FEELING;
  // const scrollX = useRef(new Animated.Value(0)).current;
  const [indexIconVisible, setIndexIconVisible] = useState(0);
  //map the Animated value with scrollX
  // const handleOnScroll = event => {
  //   Animated.event(
  //     [
  //       {
  //         nativeEvent: {
  //           contentOffset: {
  //             x: scrollX,
  //           },
  //         },
  //       },
  //     ],
  //     {
  //       useNativeDriver: false,
  //     },
  //   )(event);
  // };

  //To specify the visible element
  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndexIconVisible(viewableItems[0].index);
  }).current;

  //The percentage of the data shown on the screen at slide
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View className="">
      <FlatList
        data={feeling}
        renderItem={({ item }) => <MoodSlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        // onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={feeling} index={indexIconVisible}/>
    </View>
  );
};

export default MoodSlider;
