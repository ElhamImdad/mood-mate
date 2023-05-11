import { View, Text, FlatList, Animated, Dimensions } from "react-native";
import React from 'react'
import { FeelingModel } from '../../screens/home/logMood/moodSlider/MoodSlideItem'
import cn from "classnames"

const {width} = Dimensions.get('screen');

const Pagination = ({ data, index }: { data: FeelingModel[], index?: number }) => {
  return (
    <View className='absolute bottom-12 flex flex-row w-full items-center justify-center '>
      {data.map((_, idx) => {        
        return <Animated.View key={idx} className={cn('w-1.5 h-1.5 rounded-full bg-gray300 mx-0.5', {'bg-gray400 w-2 h-2' : idx === index})} />
      })}
    </View>
  )
}

export default Pagination