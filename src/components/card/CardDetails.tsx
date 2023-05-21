import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { ListItem, Divider } from "@rneui/themed";
import { EntriesFeelingModel } from "../../models/FeelingModel";
import { getMonthName } from "../../utils/Utils";
import { FEELING } from "../../utils/Constant";
import colors from "../../utils/colors";

export const CardDetails = ({ data }: { data: EntriesFeelingModel }) => {
  const getEmogi = () => {
    const feelingEmogi = FEELING?.find((item) => item.id == data.feelingId);
    return feelingEmogi.emoji;
  };
  return (
    <>
      <ListItem
        pad={12}
        containerStyle={{
          borderRadius: 20,
          marginBottom: 12,
          backgroundColor: colors.white,
        }}
      >
        <View className="flex items-center justify-between flex-row">
          <View className="flex items-center justify-center space-y-2">
            <Text className="text-sm font-bold text-black800">{data.day}</Text>
            <Text className="text-sm font-bold text-black800">
              {getMonthName(Number.parseInt(data.month))}
            </Text>
          </View>
          <Divider
            orientation="vertical"
            width={1}
            style={{ paddingEnd: 12 }}
          />
        </View>
        <ListItem.Content className="flex flex-row items-center justify-start">
          <View className="">
            <Text className="text-md font-bold text-black800 text-start">
              {data.feelingName.toUpperCase()}
            </Text>
            <View className="flex flex-row flex-wrap pt-1">
              {data.specificFeeling?.map((feeling, idx) => (
                <View className="flex flex-row" key={idx}>
                  <Text className="text-sm font-medium text-gray400 text-start">
                    {feeling.name}
                  </Text>
                  {data.specificFeeling.length - 1 !== idx && (
                    <Text className="text-sm font-medium text-gray400 text-start">
                      ,{" "}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        </ListItem.Content>
        <View>
          {
            <Image
              className="h-10 w-10"
              source={getEmogi()}
              resizeMode="contain"
            />
          }
        </View>
      </ListItem>
    </>
  );
};

export default CardDetails;
