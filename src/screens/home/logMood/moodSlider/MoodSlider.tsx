import {
  View,
  Text,
  FlatList,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { FEELING } from "../../../../utils/Constant";
import MoodSlideItem from "./MoodSlideItem";
import Pagination from "../../../../components/pagination/Pagination";
import cn from "classnames";
import {
  SpecificFeelingModel,
  FeelingModel,
} from "../../../../models/FeelingModel";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import {
  resetActiveFeeling,
  setActiveFeeling,
  setSelectedSpecificFeeling,
} from "../../../../store/features/feelingSlice";
import CheckBox from "../../../../components/checkBox/CheckBox";

const MoodSlider = ({formikProps}) => {
  const feelingBase = FEELING;
  const dispatch = useAppDispatch();
  const feeling = useAppSelector((state) => state.feeling.feeling);

  const [indexIconVisible, setIndexIconVisible] = useState(0);
  // const [deepFeelingData, setDeepFeelingData] = useState<
  //   DeepFeelingItemInterface[]
  // >(feelingBase[indexIconVisible]?.SpecifyFeeling);

  //To specify the visible element...
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log('viewableItems', viewableItems);
    const id: number = viewableItems[0]?.item.id;
    const feelingName: string = viewableItems[0]?.item.feelingName;
    const specificFeeling: SpecificFeelingModel[] =
      viewableItems[0]?.item.SpecifyFeeling;
    let feelingItem: FeelingModel = {
      id: id,
      feelingName: feelingName,
      specificFeeling: specificFeeling,
    };

    dispatch(setActiveFeeling(feelingItem));

    setIndexIconVisible(Math.round(viewableItems[0]?.index));
  }).current;

  //The percentage of the data shown on the screen at slide...
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  // const onPressFeelingHandler = (item, indexIconVisible) => {
  //   let selectedItem: SpecificFeelingModel = {
  //     id: item.id,
  //     name: item.name,
  //     selected: item.selected,
  //   };
  //   // dispatch(setSelectedSpecificFeeling(selectedItem));
  //   let renderData = [...deepFeelingData];

  //   for (let data of renderData) {
  //     if (data.id == item.id) {
  //       data.selected = !data.selected;
  //       break;
  //     }
  //   }

  //   setDeepFeelingData(renderData);
  // };

  //if the slider change, then reset the selected deep feeling...
  useEffect(() => {
    // feeling.specificFeeling?.map((item) => (item.selected = false));

    formikProps.setFieldValue("specificFeelingsOption", [])


    // dispatch(resetActiveFeeling());
    // feelingBase[indexIconVisible]?.SpecifyFeeling.map(
    //   (data) => (data.selected = false)
    // );
    // setDeepFeelingData(feelingBase[indexIconVisible]?.SpecifyFeeling);
  }, [indexIconVisible]);

  return (
    <View className="">
      {feelingBase ? (
        <>
          <View className="px-14 pt-16 m-0">
            <FlatList
              data={feelingBase}
              renderItem={({ item }) => <MoodSlideItem item={item} />}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={handleOnViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
            />
            <Pagination data={feelingBase} index={indexIconVisible} />
            <Text className="text-lg font-bold text-black800 text-center">
              {feelingBase[indexIconVisible]?.feelingName.toUpperCase()}
            </Text>
          </View>
          <View className="py-10">
            <Text className="text-lg font-bold text-black800">
              Specify your feeling
            </Text>

            
            <CheckBox
            fieldName="specificFeelingsOption"
            // baseFieldName="feeling"
            baseFieldID={feeling.feelingName}
            values={feeling.specificFeeling}
            labels={feeling.specificFeeling?.map((mood) => mood.name)}
          />
          
                      

          </View>
        </>
      ) : null}
    </View>
  );
};

export default MoodSlider;

{/* <FlatList
              data={feeling.specificFeeling}
              keyExtractor={(childItem) => childItem.id.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Pressable
                  className={cn("rounded-md py-2 px-2.5 mr-2 my-3 ", {
                    " bg-white ": item.selected != true,
                    "bg-darkSky": item.selected == true,
                  })}
                  key={item.id}
                  // dispatch(setSelectedSpecificFeeling({ selectedID: item.id }))
                  onPress={() => setFieldValue("specificFeelingsOption", item.id)}
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
            /> */}