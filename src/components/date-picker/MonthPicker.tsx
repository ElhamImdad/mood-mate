import { View, Text, Pressable } from "react-native";
import React from "react";
import { subMonths, addMonths, format } from "date-fns";
import { Icon } from "../../components/icon/Icon";
import colors from "../../utils/colors";

const MonthPicker: React.FC<MonthPickerProps> = ({ date, onChange }) => {
  const handlePrev = () => {
    const newDate = subMonths(date, 1);
    onChange(newDate);
  };

  const handleNext = () => {
    const newDate = addMonths(date, 1);
    onChange(newDate);
  };

  return (
    <View className="flex flex-row justify-between items-center px-7 pb-2 pt-12">
      <Pressable onPress={handlePrev}>
        <Icon name="arrow-left-circle-outline" color={colors.black800} />
      </Pressable>
      <Text className="text-black800 text-lg font-semibold">
        {format(date, "MMMM yyyy")}
      </Text>
      <Pressable onPress={handleNext}>
        <Icon name="arrow-right-circle-outline" color={colors.black800} />
      </Pressable>
    </View>
  );
};

export default MonthPicker;

type MonthPickerProps = {
  date: Date;
  onChange: (newDate: Date) => void;
};
