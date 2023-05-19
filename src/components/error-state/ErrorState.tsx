import { View, Image, Text } from "react-native";
import React from "react";

const ErrorState = ({ label }: { label?: string}) => {
  return (
    <View className="flex flex-1 flex-col justify-center items-center space-y-5">
      <Image
        className="h-28 w-28"
        source={require("../../../assets/images/error.png")}
        resizeMode="contain"
      />
      <Text className="text-error text-base">Error: {label}</Text>
    </View>
  );
};

export default ErrorState;
