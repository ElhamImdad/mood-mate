import { View, Text } from "react-native";
import React from "react";
import Card from "../../components/card/Card";
import { LineChart } from "react-native-chart-kit";
import { WIDTH } from "../../utils/Constant";

const Stats = () => {
  return (
    <Card space="m-4">
      <Text className="text-black800 text-2xl font-extrabold">Mood Chart</Text>
      <LineChart
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 99, 43],
                  },
                ],
              }}
              width={WIDTH -70}
              height={220}
              yAxisLabel={'Rs'}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}

      
      />
    </Card>
  );
};

export default Stats;
