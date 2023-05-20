import { Text, ScrollView, View } from "react-native";
import React from "react";
import Card from "../../components/card/Card";
import { getDaysInMonth } from "../../utils/Utils";
import { useAppSelector } from "../../store/store";
import LineChart from "./LineChart";
import { FEELING } from "../../utils/Constant";
import { EntriesFeelingModel } from "../../models/FeelingModel";
import ErrorState from "../../components/error-state/ErrorState";
import Loader from "../../components/loader/Loader";

const Stats = () => {
  const feelings = FEELING;
  const feelingsData = useAppSelector((state) => state.fetchfeelings);

  // The default chart should display for the current month and year...
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(2023, 5);

  const feelingsDataInMonth: EntriesFeelingModel[] =
    feelingsData.feelingsList.filter((item) => {
      return (
        Number.parseInt(item.month) === 5 && Number.parseInt(item.year) === 2023
      );
    });

  return (
    <>
      {!feelingsData.loading && feelingsData.error ? (
        <ErrorState label={feelingsData.error} />
      ) : null}

      {feelingsData.loading && <Loader />}

      {!feelingsData.loading && feelingsData.feelingsList.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card space="relative my-4 mx-3">
            <Text className="text-black800 text-xl font-extrabold pb-2">
              Mood Chart
            </Text>
            {feelingsDataInMonth.length < 2 ? (
              <View className="justify-center items-center py-16">
                <Text className="text-base">
                  We need more data to draw this chart.
                </Text>
                <Text className="text-base ">Check back soon!</Text>
              </View>
            ) : (
              <LineChart
                feelings={feelings}
                daysInMonth={daysInMonth}
                feelingsData={feelingsDataInMonth}
              />
            )}
          </Card>
        </ScrollView>
      ) : null}
    </>
  );
};

export default Stats;
