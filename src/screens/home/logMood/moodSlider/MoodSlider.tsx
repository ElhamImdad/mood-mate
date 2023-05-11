import { View, Text, FlatList, Pressable } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { FEELING } from "../../../../utils/Constant";
import MoodSlideItem from "./MoodSlideItem";
import Pagination from "../../../../components/pagination/Pagination";
import cn from "classnames";

const MoodSlider = () => {
  let feeling = FEELING;

  const [indexIconVisible, setIndexIconVisible] = useState(0);
  const [deepFeelingData, setDeepFeelingData] = useState<
    DeepFeelingItemInterface[]
  >(feeling[indexIconVisible].SpecifyFeeling);

  //To specify the visible element...
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log('viewableItems', viewableItems);
    setIndexIconVisible(Math.round(viewableItems[0].index));
  }).current;

  //The percentage of the data shown on the screen at slide...
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const onPressFeelingHandler = (item, indexIconVisible) => {
    let renderData = [...deepFeelingData];
    console.log(
      "I am passed----- ",
      indexIconVisible,
      " Feeling --> ",
      item.name
    );
    for (let data of renderData) {
      if (data.id == item.id) {
        data.selected = !data.selected;
        break;
      }
    }
    setDeepFeelingData(renderData);
    console.log(deepFeelingData);
  };

  //if the slider change, then reset the selected deep feeling...  
  useEffect(() => {
    feeling[indexIconVisible].SpecifyFeeling.map((data)=>(data.selected=false))
    setDeepFeelingData(feeling[indexIconVisible].SpecifyFeeling)    
  }, [indexIconVisible]);

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
        <Text className="text-lg font-bold text-black800 text-center">
          {feeling[indexIconVisible].feelingName.toUpperCase()}
        </Text>
      </View>
      <View className="py-10">
        <Text className="text-lg font-bold text-black800">
          Specify your feeling
        </Text>
        <FlatList
          data={deepFeelingData}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              className={cn("rounded-md py-2 px-2.5 mr-2 my-3 ", {
                " bg-white ": item.selected != true,
                "bg-darkSky": item.selected == true,
              })}
              onPress={() => onPressFeelingHandler(item, indexIconVisible)}
            >
              <Text
                className={cn("text-sm text-black800 font-medium ", {
                  " text-white ": item.selected == true,
                  "text-black800": item.selected != true,
                })}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default MoodSlider;
interface DeepFeelingItemInterface {
  id: number;
  name: string;
  selected?: boolean;
}
