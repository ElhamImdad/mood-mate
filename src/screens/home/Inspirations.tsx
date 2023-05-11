import { View, Text, Alert } from "react-native";
import React from "react";
import Button1 from "../../components/button/Button";
import cn from "classnames";
import colors from "../../utils/colors";
import { Icon } from "../../utils/Utils";
import { INSPIRATION } from "../../utils/Constant";
import { ScrollView, TouchableOpacity  } from "react-native";

const Inspirations = () => {
  const inspiration = INSPIRATION;
  return (
    <View>
      <Text className="text-black800 text-base font-bold">Inspirations...</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="my-5 flex flex-nowrap flex-row space-x-4"
      >
        {inspiration.length === 0
          ? null
          : inspiration.map((inspirationItem, i) => (
              <TouchableOpacity  className="bg-white rounded-[20px] p-5" key={i} onPress={() => alert(inspirationItem.title)}>
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
              </TouchableOpacity >
            ))}
      </ScrollView>
    </View>
  );
};

export default Inspirations;
