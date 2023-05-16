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
import { setActiveFeeling } from "../../../../store/features/feelings/feelingUtilsSlice";
import CheckBox from "../../../../components/checkBox/CheckBox";

const MoodSlider = ({ formikProps }) => {
  const feelingBase = FEELING;
  const dispatch = useAppDispatch();
  const feeling = useAppSelector((state) => state.feelingUtils.feeling);

  const [indexIconVisible, setIndexIconVisible] = useState(0);

  //To specify the visible element...
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    const id: number = viewableItems[0]?.item.id;
    const feelingName: string = viewableItems[0]?.item.feelingName;
    const emogi: any = viewableItems[0]?.item.emoji;
    const specificFeeling: SpecificFeelingModel[] =
      viewableItems[0]?.item.SpecifyFeeling;
    let feelingItem: FeelingModel = {
      id: id,
      feelingName: feelingName,
      emoji: emogi,
      specificFeeling: specificFeeling,
    };

    dispatch(setActiveFeeling(feelingItem));
    formikProps.setFieldValue("feelingID", id);

    setIndexIconVisible(Math.round(viewableItems[0]?.index));
  }).current;

  //The percentage of the data shown on the screen at slide...
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  //if the slider change, then reset the selected deep feeling...
  useEffect(() => {
    formikProps.setFieldValue("specificFeelingsOption", []);
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
