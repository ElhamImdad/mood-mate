import { Text } from "react-native";
import React from "react";
import Card from "../../components/card/Card";
import { getDaysInMonth, filterMonthAndYear } from "../../utils/Utils";
import { useAppSelector } from "../../store/store";
import LineChart from "./LineChart";
import { FEELING } from "../../utils/Constant";
import { EntriesFeelingModel } from "../../models/FeelingModel";


const Stats = () => {
  const feelings = FEELING
  const feelingsData = useAppSelector((state) => state.fetchfeelings);

  const filterYear = 2023;
  const filterMonth = 5;
  // const feelingsDataInMonth = filterMonthAndYear(
  //   feelingsData.feelingsList,
  //   filterMonth,
  //   filterYear
  // );
  const feelingsDataInMonth: EntriesFeelingModel[] = feelingsData.feelingsList.filter((item) => {
      return (Number.parseInt(item.month) === filterMonth && Number.parseInt(item.year) === filterYear)
    
    })

  const daysInMonth = getDaysInMonth(filterYear, filterMonth);
  console.log("dayes in month", feelingsDataInMonth.length);

  return (
    <Card space="relative m-4">
      <Text className="text-black800 text-xl font-extrabold pb-2">Mood Chart</Text>
      <LineChart feelings={feelings} daysInMonth={10} feelingsData={feelingsDataInMonth}/>
    </Card>
  );
};

export default Stats;
