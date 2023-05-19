import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import CardDetails from "../../components/card/CardDetails";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Skeleton } from "@rneui/themed";
import { fetchFeelings } from "../../store/features/feelings/feelingSlice";
import colors from "../../utils/colors";
import ErrorState from "../../components/error-state/ErrorState";

const Entries = () => {
  const feelingsList = useAppSelector((state) => state.fetchfeelings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeelings());
  }, []);
  const repeatSkelton = Array.from({ length: 3 }, (_, index) => index + 1);
  return (
    <View className="flex-1">
      <Text className="text-black800 text-xl font-extrabold">May 2023</Text>

      {feelingsList.loading &&
        repeatSkelton.map((idx) => (
          <View
            className="flex flex-1 flex-col justify-center items-center"
            key={idx}
          >
            <Skeleton
              animation="pulse"
              height={70}
              skeletonStyle={{ backgroundColor: colors.white }}
            />
          </View>
        ))}
      {!feelingsList.loading && feelingsList.error ? (
        <ErrorState label={feelingsList.error}/>
      ) : null}
      {!feelingsList.loading && feelingsList.feelingsList.length ? (
        <ScrollView className="mt-5" showsVerticalScrollIndicator={false}>
          {feelingsList.feelingsList.map((item, i) => (
            <CardDetails data={item} key={i} />
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
};

export default Entries;
