import { View, Text, Image } from 'react-native'
import React from 'react'

const EmptyState = ({ label }: { label?: string}) => {
    return (
      <View className="flex flex-1 flex-col justify-center items-center space-y-6">
        <Image
          className={`h-60 w-60`}
          source={require("../../../assets/images/empty-state.png")}
          resizeMode="contain"
        />
        <Text className="text-black800 text-lg font-bold">{label}</Text>
      </View>
    );
  };

export default EmptyState