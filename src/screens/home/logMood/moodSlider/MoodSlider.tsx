import {
  View,
  Text,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { FEELING } from "../../../../utils/Constant";
import MoodSlideItem from "./MoodSlideItem";
import Pagination from "../../../../components/pagination/Pagination";
import cn from "classnames";
// import { RootState } from "../../../../redux/reducers/rootReducer";
// import { useSelector, useDispatch } from 'react-redux';
// import { setFeeling } from "../../../../redux/actions/feeling.actions"
import { SpecificFeelingModel, FeelingModel } from "../../../../models/FeelingModel"
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { setFeeling } from "../../../../store/features/feelingSlice"

const MoodSlider = () => {
  let feeling2 = FEELING;
  const dispatch = useAppDispatch();
  const feeling = useAppSelector((state) => state.feeling.feeling)
  // const { feelings } = useSelector((state: RootState) => state.feeling)


  const [indexIconVisible, setIndexIconVisible] = useState(0);
  const [deepFeelingData, setDeepFeelingData] = useState<
    DeepFeelingItemInterface[]
  >(feeling2[indexIconVisible].SpecifyFeeling);

  //To specify the visible element...
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    console.log('viewableItems', viewableItems);
    const id: number = viewableItems[0].item.id;
    const feelingName: string = viewableItems[0].item.feelingName;
    const specificFeeling: SpecificFeelingModel[]  =  viewableItems[0].item.SpecifyFeeling;
    
    
    dispatch(setFeeling({id: id, feelingName: feelingName, specificFeeling: specificFeeling}));
    console.log("name --> ", feelingName);
    console.log("Data From Store ===>>> ", feeling);
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
    // dispatch(setFeeling(feeling[indexIconVisible].SpecifyFeeling))
    feeling2[indexIconVisible].SpecifyFeeling.map(
      (data) => (data.selected = false)
    );
    setDeepFeelingData(feeling2[indexIconVisible].SpecifyFeeling);
  }, [indexIconVisible]);

  return (
        <View className="">
          <View className="px-14 pt-16 m-0">
            <FlatList
              data={feeling2}
              renderItem={({ item }) => <MoodSlideItem item={item} />}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={handleOnViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
            />
            <Pagination data={feeling2} index={indexIconVisible} />
            <Text className="text-lg font-bold text-black800 text-center">
              {feeling2[indexIconVisible].feelingName.toUpperCase()}
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
