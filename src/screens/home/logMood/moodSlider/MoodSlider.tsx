import {
  View,
  Text,
  FlatList,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { FEELING } from "../../../../utils/Constant";
import MoodSlideItem from "./MoodSlideItem";
import Pagination from "../../../../components/pagination/Pagination";
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
      viewableItems[0]?.item.specificFeeling;
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

  //if the slider change, then reset the selected soecific feeling...
  useEffect(() => {
    formikProps.setFieldValue("specificFeelingsOption", []);
  }, [indexIconVisible]);

  return (
    <>
      {feelingBase ? (
        <View className="grow flex flex-col flex-wrap justify-between py-10">
          <View className="px-14 space-y-6">
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

            <View>
              <Pagination data={feelingBase} index={indexIconVisible} />
            </View>
            <Text className="text-lg font-bold text-black800 text-center">
              {feelingBase[indexIconVisible]?.feelingName.toUpperCase()}
            </Text>
          </View>
          <View className="pt-10 justify-center">
            <Text className="text-lg font-bold text-black800">
              Specify your feeling
            </Text>

            <CheckBox
              fieldName="specificFeelingsOption"
              baseFieldID={feeling.feelingName}
              values={feeling.specificFeeling}
              labels={feeling.specificFeeling?.map((mood) => mood.name)}
            />
          </View>
        </View>
      ) : null}
    </>
  );
};

export default MoodSlider;
