import { View, Text, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { FEELING } from "../../../../utils/Constant";
import MoodSlideItem from "./MoodSlideItem";
import Pagination from "../../../../components/pagination/Pagination";
import DeepFeelingItem, { DeepFeelingItemInterface } from "./DeepFeelingItem";


const MoodSlider = () => {
  const feeling = FEELING;
  const [indexIconVisible, setIndexIconVisible] = useState(0);
  const [selectedDeepFeelingId, setSelectedDeepFeelingId] = useState<number>();

  //To specify the visible element
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log('viewableItems', viewableItems);
    setIndexIconVisible(Math.round(viewableItems[0].index));
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

  const renderDeepFeelingItem = ({item}: {item: DeepFeelingItemInterface}) => {
    console.log("item selected", item.id);
    
    return (
      <DeepFeelingItem
        item={item}
        onPress={() => setSelectedDeepFeelingId(item.id)}
        bgColor={item.id === selectedDeepFeelingId? "darkSky": "white"}
        textColor={item.id === selectedDeepFeelingId? "white": "black800"}
      />
    );
  };

  return (
    <View className="">
      <View className="px-14 pt-16 m-0">
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
      <Text className="text-lg font-bold text-black800 text-center">{feeling[indexIconVisible].feelingName.toUpperCase()}</Text>
      </View>
      <View className="py-10">
        <Text className="text-lg font-bold text-black800">
          Specify your feeling
        </Text>
        <FlatList
          data={feeling[indexIconVisible].SpecifyFeeling}
          renderItem={renderDeepFeelingItem}
          horizontal
          extraData={selectedDeepFeelingId}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          // onViewableItemsChanged={handleOnViewableItemsChanged}
          // viewabilityConfig={viewabilityConfig}
        />
      </View>
    </View>
  );
};

export default MoodSlider;

