import { View, Text } from 'react-native'
import React from 'react'
import { LineChart as Linechart  } from 'react-native-chart-kit';
import  YAxis  from 'react-native-svg';
import { WIDTH } from '../../utils/Constant'; 

const LineChart = () => {
    
    // const data = {
    //   labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    //   dataset: [
    //     { value: 10, label: 'Label 1' },
    //     { value: 5, label: 'Label 2' },
    //     { value: 8, label: 'Label 3' },
    //     // Add more objects with value and label as per your data
    //   ],
    // };

    const yAxisData = [
        { value: 10, label: 'Label 1' },
        { value: 20, label: 'Label 2' },
        { value: 30, label: 'Label 3' },
        // Add more objects as needed
      ];

  const labels = yAxisData.map(item => item.label);
  const values = yAxisData.map(item => item.value);

  const minYValue = Math.min(...values);
  const maxYValue = Math.max(...values);

  return (
    <View>
      <Text>LineChart</Text>
      {/* <YAxis
        data={yAxisData}
        yAccessor={({ index }) => index}
        contentInset={{ top: 20, bottom: 20 }}
        svg={{
          fontSize: 12,
          fill: 'black',
          alignmentBaseline: 'baseline',
          baselineShift: '3',
        }}
        formatLabel={() => ''} // Empty formatLabel as we're using custom YAxisLabels component
      /> */}
      <Linechart
        data={{
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'], // Replace with actual month days
          datasets: [
            {
              data: values,
            },
          ],
        }}
        width={WIDTH-70}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        withInnerLines={false} // Disable default y-axis lines
        withOuterLines={false} // Disable default x-axis lines
        fromZero={minYValue > 0 ? false : true} // Adjust based on your data
      />

      
    </View>
  )
}

export default LineChart