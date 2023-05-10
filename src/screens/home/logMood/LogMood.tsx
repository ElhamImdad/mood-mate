import { View, Text } from 'react-native'
import React from 'react'
import {
    Dialog,
    } from '@rneui/themed';

const LogMood =
React.forwardRef(({ ...props }: any, ref: any) => {
  let {
    isVisible,
    onBackdropPress,
 }: LogMoodInterface = props
  return (
    <Dialog
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}

    >
      <Dialog.Title title="Dialog Title"/>
      <Text>Dialog body text. Add relevant information here.</Text>
      <Dialog.Actions>
        <Dialog.Button title="ACTION 1" onPress={() => console.log('Primary Action Clicked!')}/>
        <Dialog.Button title="ACTION 2" onPress={() => console.log('Secondary Action Clicked!')}/>
      </Dialog.Actions>
    </Dialog>
  )
});

export default LogMood;

interface LogMoodInterface {
    isVisible: boolean;
    onBackdropPress?: any;
  }