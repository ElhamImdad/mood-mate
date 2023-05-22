import { View, Text, Pressable } from "react-native";
import React from "react";
import { subMonths, addMonths, format } from "date-fns";
import { Icon } from "../../components/icon/Icon";
import colors from "../../utils/colors";

const MonthPicker: React.FC<MonthPickerProps> = ({
  date,
  onChange,
  minDate,
  maxDate,
}) => {
  const isMin = () => {
    const newDate = subMonths(date, 1);
    return ((newDate.getMonth() >= minDate.getMonth() && newDate.getFullYear() === minDate.getFullYear()) || (newDate.getFullYear() > minDate.getFullYear()))?
     true:false
  }

  const isMax = () => {
    const newDate = addMonths(date, 1);
    return ((newDate.getMonth() <= maxDate.getMonth() && newDate.getFullYear() === maxDate.getFullYear()) || (newDate.getFullYear() < maxDate.getFullYear()))?
     true:false
  }
  
  const handlePrev = () => {
    if (isMin()) {
      onChange(subMonths(date, 1));
    } 
  };

  const handleNext = () => {
    if (isMax()) {
      onChange(addMonths(date, 1));
    }
  };

  return (
    <View className="flex flex-row justify-between items-center px-7 pb-2 pt-12">
      <Pressable onPress={handlePrev} disabled={!isMin()}>
        <Icon name="arrow-left-circle-outline" color={isMin()? colors.black800 : colors.gray400} />
      </Pressable>
      <Text className="text-black800 text-lg font-semibold">
        {format(date, "MMMM yyyy")}
      </Text>
      <Pressable onPress={handleNext} disabled={!isMax()}>
        <Icon name="arrow-right-circle-outline" color={isMax()? colors.black800 : colors.gray400}  />
      </Pressable>
    </View>
  );
};

export default MonthPicker;

type MonthPickerProps = {
  date: Date;
  onChange: (newDate: Date) => void;
  minDate: Date;
  maxDate: Date;
};
