import { View, Text } from "react-native";
import React, { useEffect } from "react";
import CardDetails from "../../components/card/CardDetails";
import { ScrollView } from "react-native";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { fetchFeelings } from "../../store/features/feelings/feelingSlice";

const Entries = () => {
  const feelingsList = useAppSelector((state) => state.fetchfeelings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeelings())
  }, [])

  return (
    <View className="flex-1">
      <Text className="text-black800 text-2xl font-extrabold">May 2023</Text>
      {feelingsList.loading && <Text className="text-gray400">Loading...</Text>}
      {!feelingsList.loading && feelingsList.error ? (
        <Text className="text-error">Error: {feelingsList.error}</Text>
      ) : null}

      { !feelingsList.loading && feelingsList.feelingsList.length? (
        <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
          {feelingsList.feelingsList.map((item, i) => (
            <CardDetails data={item} key={i} />
          ))}
        </ScrollView>):null
      }
    </View>
  );
};

export default Entries;
