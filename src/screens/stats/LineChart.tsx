import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { WIDTH } from "../../utils/Constant";
import colors from "../../utils/colors";
import { FeelingModel, EntriesFeelingModel } from "../../models/FeelingModel";

// const feelingsData = [
//   { day: 1, feeling: "Not bad", value: 3 },
//   { day: 5, feeling: "Good", value: 4 },
//   { day: 3, feeling: "Not bad", value: 3 },
//   { day: 4, feeling: "Bad", value: 2 },
//   { day: 9, feeling: "Awesome", value: 5 },
//   // Add more objects for each day
// ];

const LineChartComponent = ({
  feelings,
  daysInMonth,
  feelingsData,
}: {
  feelings: FeelingModel[];
  daysInMonth: number;
  feelingsData: EntriesFeelingModel[];
}) => {
  const daysInFeelingData = feelingsData.map((item) => {
    return Number.parseInt(item.day);
  });
  const maxDay = Math.max(...daysInFeelingData);
  const minDay = Math.min(...daysInFeelingData);
  const numDays = maxDay - minDay;
  
  const days = (): string[] => {
    if (numDays < 16)
      return Array.from({ length: (maxDay - minDay) / 1 + 1 }, (_, i) =>
        (minDay + i * 1).toString()
      );
    else if (numDays < 20)
      return Array.from({ length: (maxDay - minDay) / 2 + 1 }, (_, i) =>
        (minDay + i * 2).toString()
      );
    else
      return Array.from({ length: (daysInMonth - 1) / 3 + 1 }, (_, i) =>
        (1 + i * 3).toString()
      );
  };

  // const days = Array.from({ length: daysInMonth }, (_, index) =>
  //   (index + 1).toString()
  // );

  const hideXlabelIndex = (): number[] => {
    if (numDays < 11) {
      return [];
    } else if (numDays < 20) {
      return Array.from(
        { length: (daysInMonth - 1) / 2 + 1 },
        (_, i) => 1 + i * 2
      );
    }else 
    return [1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23,25,26,28,29,31]
  };
  // const feelings = ["Awful", "Bad", "Not bad", "Good", "Awesome"];

  // const points = Array.from({ length: days().length }, (i, _index) => {
  //   const isItemExists = feelingsData.find(
  //     (value) => {Number.parseInt(value.day) === _index +1}
  //   );
  //   return isItemExists ? isItemExists.feelingId : null;
  // });
  console.log("days ->>>>> ", days());
  
  const points = days().map((dayStr, _index) => {
    const isItemExists = feelingsData.find(
      (value) => (Number.parseInt(value.day)) === (Number.parseInt(dayStr)) 
    );
    
    return isItemExists ? isItemExists.feelingId : null;
    
    
  });
  console.log("points -----------> ",points);

  // const getColorForDataPoint = (
  //   dataPointValue: number,
  //   dataPointIndex: number
  // ): string => {
  //   console.log("dataPoint ---->", dataPointValue);
  //   console.log("dataPointIndex --->", dataPointIndex);
  //   const dataPoint = feelingsData[dataPointIndex];
  //   if (dataPoint) {
  //     // Customize the color based on the feeling or any other condition
  //     if (dataPoint.feeling === "Awesome") {
  //       return "#00ff00"; // Green color for Happy
  //     } else if (dataPoint.feeling === "Not bad") {
  //       return "#0000ff"; // Blue color for Sad
  //     } else if (dataPoint.feeling === "Good") {
  //       return "#ff0000"; // Red color for Angry
  //     }
  //   }
  //   return "#8B008B"; // Default color
  // };

  const chartConfig = {
    backgroundColor: colors.white,
    backgroundGradientFrom: colors.white,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.white,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    fillShadowGradientFrom: colors.white,
    fillShadowGradientTo: colors.white,
    fillShadowGradient: colors.white,
    fillShadowGradientOpacity: 0,
    color: (opacity = 1) => colors.darkSky, //`rgba(76, 159, 193, ${opacity})`
    labelColor: (opacity = 1) => colors.gray400,
    style: { borderRadius: 16 },
    propsForBackgroundLines: { stroke: colors.gray200 },
    useShadowColorFromDataset: false,
    propsForLabels: { fontSize: 11, fontWeight: 700 },
  };

  const formatY = (value: string): string => {
    console.log("value -> ", value);
    
    if (value === "0") return "";
    return feelings[
      Math.min(Number.parseInt(value)-1 , feelings.length - 1)
    ].feelingName.toUpperCase();
  };

  // const formatY = (value: string): string => {
  //   console.log("value -> ", value);
  //   let feelingObg = feelings.find((feeling) => feeling.feelingId+1 === (Number.parseInt(value)))
  //   if (value === "0") return "";
  //   return feelingObg.feelingName
  // };

  const chartData = {
    labels: days(),
    datasets: [
      {
        data: points,
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={chartData}
        width={WIDTH - 70}
        height={220}
        withVerticalLines={false}
        withDots={false}
        yAxisLabel=""
        chartConfig={chartConfig}
        segments={5}
        style={{ marginVertical: 8 }}
        // fromZero
        yLabelsOffset={1}
        formatYLabel={(value) => formatY(value)}
        hidePointsAtIndex={hideXlabelIndex()}
        // getDotColor={(dataPoint, dataPointIndex) => getColorForDataPoint(dataPoint, dataPointIndex)}
      />
    </View>
  );
};

export default LineChartComponent;
