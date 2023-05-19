import { Text, ScrollView } from "react-native";
import React from "react";
import Card from "../../components/card/Card";
import { getDaysInMonth, filterMonthAndYear } from "../../utils/Utils";
import { useAppSelector } from "../../store/store";
import LineChart from "./LineChart";
import { FEELING } from "../../utils/Constant";
import { EntriesFeelingModel } from "../../models/FeelingModel";
import ErrorState from "../../components/error-state/ErrorState";

const Stats = () => {
  const feelings = FEELING;
  const feelingsData = useAppSelector((state) => state.fetchfeelings);

  const filterYear = 2023;
  const filterMonth = 5;
  // const feelingsDataInMonth = filterMonthAndYear(
  //   feelingsData.feelingsList,
  //   filterMonth,
  //   filterYear
  // );
  const feelingsDataInMonth: EntriesFeelingModel[] =
    feelingsData.feelingsList.filter((item) => {
      return (
        Number.parseInt(item.month) === filterMonth &&
        Number.parseInt(item.year) === filterYear
      );
    });

  const daysInMonth = getDaysInMonth(filterYear, filterMonth);

  return (
    <>
      {!feelingsData.loading && feelingsData.error ? (
        <ErrorState label={feelingsData.error} />
      ) : null}
      {feelingsData.loading && <Text>Loading...</Text>}

      {!feelingsData.loading && feelingsData.feelingsList.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
        <Card space="relative my-4 mx-3">
        <Text className="text-black800 text-xl font-extrabold pb-2">
          Mood Chart
        </Text>
        <LineChart
          feelings={feelings}
          daysInMonth={10}
          feelingsData={feelingsDataInMonth}
        />
      </Card>
      </ScrollView>
      ) : null}
      
    </>
  );
};

export default Stats;
