import { View, Text, ScrollView } from "react-native";
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
      {feelingsList.loading && <Loader />}
      {!feelingsList.loading && feelingsList.error ? (
        <ErrorState label={feelingsList.error} />
      ) : null}
      {!feelingsList.loading ? (
        feelingsList.feelingsList.length ? (
          <ScrollView className="mt-5" showsVerticalScrollIndicator={false}>
            {Object.keys(feelingsList.feelingsPerMonth).map((monthKey) => {
              const dataForMonth = feelingsList.feelingsPerMonth[monthKey];
              const [year, month] = monthKey.split("-");
              const monthName = new Date(
                parseInt(year),
                parseInt(month)
              ).toLocaleString("default", { month: "short" });

              return (
                <View key={`@${month}-${year}`}>
                  <Text className="text-black800 text-xl font-extrabold pb-3 pt-5">{`${monthName} ${year}`}</Text>
                  {dataForMonth.map((feelingObj, idx) => (
                    <CardDetails data={feelingObj} key={`${month}-${idx}`} />
                  ))}
                </View>
              );
            })}
          </ScrollView>
        ) : (
          <EmptyState label={"Let's add the first entry!"} />
        )
      ) : null}
    </View>
  );
};

export default Entries;
