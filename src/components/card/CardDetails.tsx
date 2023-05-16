import { View, Text, Image } from "react-native";
import React from "react";
import { ListItem, Divider } from "@rneui/themed";
import { EntriesFeelingModel } from "../../models/FeelingModel";
import { SubstringFirstLetters } from "../../utils/Utils";
import { FEELING } from "../../utils/Constant";

export const CardDetails = ({ data }: { data: EntriesFeelingModel }) => {
  const getEmogi = () => {
    const feelingEmogi = FEELING?.find(item => item.id == data.id);
    return feelingEmogi.emoji
  }

  
  return (
    <>
      <ListItem
        pad={12}
        containerStyle={{ borderRadius: 20, marginBottom: 20 }}
      >
        <View className="flex items-center justify-between flex-row">
          <View className="flex items-center justify-center pr-3 space-y-2">
            <Text className="text-sm font-bold text-black800">{data.day}</Text>
            <Text className="text-sm font-bold text-black800">
              {SubstringFirstLetters(data.month, 3)}
            </Text>
          </View>
          <Divider orientation="vertical" width={1} />
        </View>
        <ListItem.Content className="flex flex-row items-center justify-start">
          <View>
            <Text className="text-base font-bold text-black800">
              {data.feelingName.toUpperCase()}
            </Text>
            <View className="flex flex-row pt-1">
              {data.specificFeeling?.map((feeling, idx) => (
                <View className="flex flex-row" key={idx}>
                  <Text className="text-xs font-medium text-gray400">
                    {feeling.name}
                  </Text>
                  {data.specificFeeling.length - 1 !== idx && (
                    <Text className="text-xs font-medium text-gray400">, </Text>
                  )}
                </View>
              ))}
            </View>
          </View>
        </ListItem.Content>
        <View >
          {
           <Image className="h-10 w-10"  source={getEmogi()} resizeMode="contain" />
          }
            {/* <Image source={item.emoji} resizeMode="contain" /> */}
      
        </View>
      </ListItem>
    </>
  );
};

export default CardDetails;
