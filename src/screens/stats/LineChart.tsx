import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import YAxis from "react-native-svg";
import { WIDTH } from "../../utils/Constant";

const feelingsData = [
  { day: 1, feeling: "Not bad" },
  { day: 5, feeling: "Good" },
  { day: 10, feeling: "Not bad" },
  { day: 13, feeling: "Awesome" },
  // Add more objects for each day
];

const LineChartComponent: React.FC = () => {
  const daysInMonth = 10; // Replace with the actual number of days in the month

  const xLabels = Array.from({ length: daysInMonth }, (_, index) =>
    (index + 1).toString()
  );
  const yData = Array.from({ length: daysInMonth }, (_, index) => {
    const dataPoint = feelingsData.find((item) => item.day === index + 1);
    return dataPoint ? dataPoint.feeling : "";
  });
  console.log("x label ==> ", xLabels);

  console.log("y label ==> ", yData);

  function* yLabel() {
    yield* ["Awesome", "Good", "Not bad", "Bad", "Awful"];
  }
  const customYAxisLabels = ["Awful", "Bad", "Not bad", "Good", "Awesome"];
  
  // const chartData = {
  //   labels: xLabels,
  //   datasets: [{ data: yData.map((_, index) => index + 1) }],
  // };
  const chartData = {
    labels: xLabels,
    datasets: [
      {
        data: yData.map((feelingName, index) => {
          if (feelingName !== "") {
            customYAxisLabels.map((staticYLabel, idx) => {
              if (feelingName === staticYLabel) {
                console.log(staticYLabel, " ---- index ----", idx);
                return idx + 1;
              }
            });
          }
          return index + 1;
        }),
      },
    ],
  };
  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: { borderRadius: 16 },
    // propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726" },
  };

  const yLabels = customYAxisLabels.map((_, index) => index + 1);
  return (
    <View>
      <LineChart
        data={chartData}
        width={WIDTH - 70}
        height={220}
        yAxisLabel=""
        chartConfig={chartConfig}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
        fromZero
        yLabelsOffset={10}
        verticalLabelRotation={30}
       
        formatYLabel={(value) =>
          customYAxisLabels[
            Math.min(Number.parseInt(value), customYAxisLabels.length - 1)
          ]
        }
      />
    </View>
  );
};

export default LineChartComponent;
