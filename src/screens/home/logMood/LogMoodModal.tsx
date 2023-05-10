import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import React, { useState } from 'react'

const LoMoodModal = 
React.forwardRef(({ ...props }: any, ref: any) => {
  let {
    moodModalVisible,
    onRequestClose,
 }: LogMoodModalInterface = props
    
  return (
    <View>
      <Modal
   
        presentationStyle="pageSheet"

        animationType="slide"
        transparent={false}
        visible={moodModalVisible}
        onRequestClose={
          // Alert.alert('Modal has been closed.');
          onRequestClose
        }>
     <Text>fhepioen[f]</Text>
      </Modal>
  
    </View>
  )
});

export default LoMoodModal;

interface LogMoodModalInterface {
    moodModalVisible: boolean;
    onRequestClose?: any;
  }