import { View, Text, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { FEELING } from "../../../../utils/Constant";
import MoodSlideItem from "./MoodSlideItem";
import Pagination from "../../../../components/pagination/Pagination";

const MoodSlider = () => {
  const feeling = FEELING;
  const [indexIconVisible, setIndexIconVisible] = useState(0);

  //To specify the visible element
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log('viewableItems', viewableItems);
    setIndexIconVisible(viewableItems[0].index);
  }).current;

  //The percentage of the data shown on the screen at slide
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const deepFeeling = (name, id) =>{
    return(
      <View className="bg-white rounded-md py-1.5 px-2 mr-2 my-3">
        <Text className="text-sm text-black800 font-medium">{name}</Text>
      </View>
    )
  };

  return (
    <View className="">
      <FlatList
        data={feeling}
        renderItem={({ item }) => <MoodSlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={feeling} index={indexIconVisible} />
      <View>
        <Text className="text-lg font-bold text-black800">
          Specify your feeling
        </Text>
        <FlatList
          data={feeling[indexIconVisible].SpecifyFeeling}
          renderItem={({ item }) => deepFeeling(item.name, item.id)}
          horizontal
          // pagingEnabled
          // snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          // onViewableItemsChanged={handleOnViewableItemsChanged}
          // viewabilityConfig={viewabilityConfig}
        />
      </View>
    </View>
  );
};

export default MoodSlider;
