import { View, Text } from 'react-native'
import React from 'react'
import cn from "classnames";

const Card = React.forwardRef(({ children, ...props }: any, ref: any) => {
    let {
      space,
    }: CardProps = props;

  return (
    <View className={cn("bg-white rounded-[20px] p-5 ", space)}>
      {children}
    </View>
  )
})

export default Card

interface CardProps {
    space?: string;
  }