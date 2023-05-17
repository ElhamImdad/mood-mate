import { View, Text } from "react-native";
import React from "react";
import Card from "../../components/card/Card";
// import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import { WIDTH } from "../../utils/Constant";
import { getDaysInMonth, filterMonthAndYear } from "../../utils/Utils";
import { useAppSelector } from "../../store/store";
import LineChart from "./LineChart";

function* yLabel() {
  yield* ["None", "Low", "Med", "High"];
}
const Stats = () => {
  const feelingsList = useAppSelector((state) => state.fetchfeelings);

  const filterYear = 2023;
  const filterMonth = 5;
  const feelingsListInMonth = filterMonthAndYear(
    feelingsList.feelingsList,
    filterMonth,
    filterYear
  );

  const daysInMonth = getDaysInMonth(filterYear, filterMonth);
  console.log(daysInMonth);

  const date = new Date();
  const currentYear = date.getFullYear();
  // console.log(currentYear);

  const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based
  // console.log(currentMonth);

  // 👇️ Current Month
  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
  // console.log(daysInCurrentMonth); // 👉️ 31


  const yLabelIterator = yLabel();
  const emogiName = ["Elham", "amal", "areej", "turki"];
  const y_label = (index) => {
    return emogiName.map((data, idx) => {
      if (idx === index) return data;
    });
  };


  return (
    <Card space="relative m-4">
      <Text className="text-black800 text-2xl font-extrabold">Mood Chart</Text>
      <LineChart />
    </Card>
  );
};

export default Stats;
