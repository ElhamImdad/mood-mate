import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import CardDetails from "../../components/card/CardDetails";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Skeleton } from "@rneui/themed";
import { fetchFeelings } from "../../store/features/feelings/feelingSlice";
import { WIDTH } from "../../utils/Constant";
import colors from "../../utils/colors";

const Entries = () => {
  const feelingsList = useAppSelector((state) => state.fetchfeelings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeelings());
  }, []);
  const repeatSkelton = Array(3).fill(0);
  return (
    <View className="flex-1">
      <Text className="text-black800 text-xl font-extrabold">May 2023</Text>

      {feelingsList.loading &&
        repeatSkelton.map(() => (
          <View className="flex flex-1 flex-col justify-center items-center">
            <Skeleton
              animation="pulse"
              height={70}
              skeletonStyle={{ backgroundColor: "white" }}
            />
          </View>
        ))}
      {!feelingsList.loading && feelingsList.error ? (
        <View className="flex flex-1 flex-col justify-center items-center space-y-5">
          <Image
            className="h-28 w-28"
            source={require("../../../assets/images/error.png")}
            resizeMode="contain"
          />
          <Text className="text-error text-base">
            Error: {feelingsList.error}
          </Text>
        </View>
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
