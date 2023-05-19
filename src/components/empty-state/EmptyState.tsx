import { View, Text, Image } from 'react-native'
import React from 'react'

const EmptyState = ({ label }: { label?: string}) => {
    return (
      <View className="flex flex-1 flex-col justify-center items-center space-y-5">
        <Image
          className="h-28 w-28"
          source={require("../../../assets/images/empty-state.jpg")}
          resizeMode="contain"
        />
        <Text className="text-error text-base">{label}</Text>
      </View>
    );
  };

export default EmptyState