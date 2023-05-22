import { Text, ScrollView, View, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import Card from "../../components/card/Card";
import { getDaysInMonth } from "../../utils/Utils";
import { useAppSelector } from "../../store/store";
import LineChart from "./LineChart";
import { FEELING } from "../../utils/Constant";
import { EntriesFeelingModel } from "../../models/FeelingModel";
import ErrorState from "../../components/error-state/ErrorState";
import Loader from "../../components/loader/Loader";
import LastSelectedColorContext from "../../context/color-context/ColorContext";
import MonthPicker from "../../components/date-picker/MonthPicker";

const Stats = () => {
  const feelings = FEELING;
  const feelingsData = useAppSelector((state) => state.fetchfeelings);
  const { colorVal } = useContext(LastSelectedColorContext);
  const [date, setDate] = useState(new Date());
  const minDate = feelingsData.feelingsList[feelingsData.feelingsList.length-1]?.date
  const maxDate = feelingsData.feelingsList[0]?.date
  
  const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth() + 1);

  const feelingsDataInMonth: EntriesFeelingModel[] =
    feelingsData.feelingsList.filter((item) => {
      return (
        Number.parseInt(item.month) === date.getMonth() + 1 &&
        Number.parseInt(item.year) === date.getFullYear()
      );
    });

  return (
    <View className="flex-1" style={{ backgroundColor: colorVal }}>
      {!feelingsData.loading && feelingsData.error ? (
        <ErrorState label={feelingsData.error} />
      ) : null}

      {feelingsData.loading && <Loader />}

      {!feelingsData.loading && feelingsData.feelingsList.length ? (
        <>
          <MonthPicker date={date} onChange={(newDate) => setDate(newDate)} minDate={new Date(minDate)}
                  maxDate={new Date(maxDate)}/>
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
        </>
      ) : null}
    </View>
  );
};

export default Stats;

{
  /* <ScrollView showsVerticalScrollIndicator={false}>
  <Card space="relative my-4 mx-3">
    <Text className="text-black800 text-xl font-extrabold pb-2">
      Mood Chart
    </Text>
    {feelingsDataInMonth.length < 2 ? (
      <View className="justify-center items-center py-16">
        <Text className="text-base">We need more data to draw this chart.</Text>
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
</ScrollView>; */
}
