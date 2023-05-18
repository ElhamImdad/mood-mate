import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { WIDTH } from "../../utils/Constant";

const feelingsData = [
  { day: 1, feeling: "Not bad", value: 3 },
  { day: 5, feeling: "Good", value: 4 },
  { day: 3, feeling: "Not bad", value: 3 },
  { day: 4, feeling: "Bad", value: 7 },
  { day: 9, feeling: "Awesome", value: 5 },
  // Add more objects for each day
];

const LineChartComponent: React.FC = () => {
  const daysInMonth = 10; // Replace with the actual number of days in the month

  const days = Array.from({ length: daysInMonth }, (_, index) =>
    (index + 1).toString()
  );

  const feelings = ["Awful", "Bad", "Not bad", "Good", "Awesome", "Cry"];

  const points = Array.from({ length: daysInMonth }, (i, _index) => {
    const isItemExists = feelingsData.find((value) => value.day === _index + 1);

    return isItemExists ? isItemExists.value : null;
  });

  // console.log("x label ==> ", days);

  console.log("point ==> ", points);

  // const chartData2 = {
  //   labels: xLabels,
  //   datasets: [
  //     {
  //       data: yData.map((feelingName, index) => {
  //         if (feelingName !== "") {
  //           customYAxisLabels.map((staticYLabel, idx) => {
  //             if (feelingName === staticYLabel) {
  //               console.log(staticYLabel, " ---- index ----", idx);
  //               return idx + 1;
  //             }
  //           });
  //         }else
  //         return index + 1;
  //       }),
  //     },
  //   ],
  // };
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

  const formatY = (value: string): string => {
    console.log(" value", value);
    return feelings[ Math.min(Number.parseInt(value)-1,feelings.length - 1)]
  }
  // Math.min(Number.parseInt(value)-1,feelings.length - 1)
  const result = points.map((point, index) => {
    if ( point != null) {
      feelings.map((feeling, idx) => {
        if (point == idx + 1) {
          console.log(
            "feeling idx >",
            idx + 1,
            " point > ",
            point,
            "feeling >>> ",
            feeling
          );

          return idx + 1;
        }
      });
    } else return null;
  })
  console.log("result ", result);
  
  const chartData = {
    labels: days,
    datasets: [
      {
        data: points
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={chartData}
        width={WIDTH - 70}
        height={220}
        yAxisLabel=""
        chartConfig={chartConfig}
        bezier
        style={{ marginVertical: 60}}
       fromZero
       
        yLabelsOffset={10}
        verticalLabelRotation={30}
        formatYLabel={(value) => formatY(value)
        }
      />
    </View>
  );
};

export default LineChartComponent;
