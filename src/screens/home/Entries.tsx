import { View, Text } from "react-native";
import React from "react";
import { ListItem, Divider } from "@rneui/themed";

const Entries = () => {
  return (
    <View>
      <Text className="text-black800 text-2xl font-extrabold">May 2023</Text>
      <View className="my-4">
        <ListItem pad={12} containerStyle={{borderRadius:20}}>
          <View className="flex items-center justify-between flex-row">
            <View className="flex items-center justify-center pr-3 space-y-2">
              <Text>01</Text>
              <Text>May</Text>
            </View>
            <Divider orientation="vertical" width={1} />
          </View>
          <ListItem.Content className="flex flex-row items-center justify-start">
            <View>
              <Text>AWESOME</Text>
              <Text>Self-confidence, Powerful, Self-confidence</Text>
            </View>
          </ListItem.Content>
          <View>
            <ListItem.Chevron />
          </View>
        </ListItem>
      </View>
    </View>
  );
};

export default Entries;
