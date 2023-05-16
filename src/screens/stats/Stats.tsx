import { View, Text } from "react-native";
import React from "react";
import Card from "../../components/card/Card";
import { LineChart, BarChart } from "react-native-chart-kit";
import { WIDTH } from "../../utils/Constant";
import { getDaysInMonth, filterMonthAndYear } from "../../utils/Utils";
import { useAppSelector } from "../../store/store";

const Stats = () => {
  const feelingsList = useAppSelector((state) => state.fetchfeelings);

  const filterYear = 2023;
  const filterMonth = 5;
  const feelingInMonth = filterMonthAndYear(feelingsList.feelingsList, filterMonth, filterYear)

  const daysInMonth = getDaysInMonth(filterYear, filterMonth);
  console.log(daysInMonth);



  const date = new Date();
  const currentYear = date.getFullYear();
  console.log(currentYear);
  
  const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based
  console.log(currentMonth);
  
  
  // 👇️ Current Month
  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
  console.log(daysInCurrentMonth); // 👉️ 31
  

  return (
    <Card space="relative m-4">
      <Text className="text-black800 text-2xl font-extrabold">Mood Chart</Text>
      <LineChart
    data={{
      labels: ["January", "February", "March",],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={WIDTH} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
    </Card>
  );
};

export default Stats;
