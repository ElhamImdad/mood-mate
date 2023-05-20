import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import CardDetails from "../../components/card/CardDetails";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { fetchFeelings } from "../../store/features/feelings/feelingSlice";
import ErrorState from "../../components/error-state/ErrorState";
import EmptyState from "../../components/empty-state/EmptyState";
import Loader from "../../components/loader/Loader";

const Entries = () => {
  const feelingsList = useAppSelector((state) => state.fetchfeelings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeelings());
  }, []);
  

  return (
    <View className="flex-1">
      <Text className="text-black800 text-xl font-extrabold">May 2023</Text>

      {feelingsList.loading && <Loader />}
      {!feelingsList.loading && feelingsList.error ? (
        <ErrorState label={feelingsList.error} />
      ) : null}
      {!feelingsList.loading ? (
        feelingsList.feelingsList.length ? (
          <ScrollView className="mt-5" showsVerticalScrollIndicator={false}>
            {feelingsList.feelingsList.map((item, i) => (
              <CardDetails data={item} key={i} />
            ))}
          </ScrollView>
        ) : (
          <EmptyState label={"Let's add the first entry!"} />
        )
      ) : null}
    </View>
  );
};

export default Entries;
