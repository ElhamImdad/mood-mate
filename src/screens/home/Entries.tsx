import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import CardDetails from "../../components/card/CardDetails";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Skeleton } from "@rneui/themed";
import { fetchFeelings } from "../../store/features/feelings/feelingSlice";
import colors from "../../utils/colors";
import ErrorState from "../../components/error-state/ErrorState";
import EmptyState from "../../components/empty-state/EmptyState";
import Loader from "../../components/loader/Loader";

const Entries = () => {
  const feelingsList = useAppSelector((state) => state.fetchfeelings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeelings());
  }, []);

  // const events = [
  //   { name: 'Birthday', date: new Date('2022-04-23') },
  //   { name: 'Shopping', date: new Date('2022-04-17') },
  //   { name: 'Meeting', date: new Date('2022-04-27') },
  // ];
  // events.sort((a, b) => a.date.getTime() - b.date.getTime());
  // console.log(events);
  

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
