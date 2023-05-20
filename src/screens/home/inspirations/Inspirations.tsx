import { View, Text, Alert } from "react-native";
import React from "react";
import colors from "../../../utils/colors";
import { Icon } from "../../../utils/Utils";
import { INSPIRATION } from "../../../utils/Constant";
import { ScrollView, TouchableOpacity } from "react-native";
import Card from "../../../components/card/Card";

const Inspirations = ({navigation}) => {
  const inspiration = INSPIRATION;
  return (
    <View>
      <Text className="text-black800 text-base font-bold">Inspirations...</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="mt-5 flex flex-nowrap flex-row space-x-4"
      >
        {inspiration.length === 0
          ? null
          : inspiration.map((inspirationItem, i) => (
              <TouchableOpacity
                key={i}
                onPress={()=>navigation.navigate(inspirationItem.title,{msg:"From Home Screen"})}
              >
                <Card>
                  <Icon
                    name={
                      i == 0
                        ? "music"
                        : i == 1
                        ? "play-circle-outline"
                        : i == 2
                        ? "book-open-variant"
                        : "hand-heart-outline"
                    }
                    color={colors.black800}
                  />
                </Card>
              </TouchableOpacity>
            ))}
      </ScrollView>
    </View>
  );
};

export default Inspirations;
