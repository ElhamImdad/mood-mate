import { View, Text } from 'react-native'
import React from 'react'
import cn from 'classnames'
import { ListItem, Divider } from "@rneui/themed";
export const CardDetails = ({ data, size }:
  {
    data: CardDetailsInterface, size?: 'lg';
  }) => {
  return (
    <>
      <ListItem pad={12} containerStyle={{borderRadius:20, marginBottom:20}}>
          <View className="flex items-center justify-between flex-row">
            <View className="flex items-center justify-center pr-3 space-y-2">
              <Text>{data.day}</Text>
              <Text>{data.month}</Text>
            </View>
            <Divider orientation="vertical" width={1} />
          </View>
          <ListItem.Content className="flex flex-row items-center justify-start">
            <View>
              <Text>{data.feelingName.toUpperCase()}</Text>
              {/* <Text>{data.SpecifyFeeling}</Text> */}
            </View>
          </ListItem.Content>
          <View>
            <ListItem.Chevron />
          </View>
        </ListItem>
    </>
  );
};

export default CardDetails;

interface CardDetailsInterface {
    id?: number;
    day: string,
    month: string,
    feelingName?: string,
    SpecifyFeeling: {
      id: number,
      name: string,
    }[],
    note?: string,
  }

