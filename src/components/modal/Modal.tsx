import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";

const Modal_ = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let { visible, onRequestClose, pageStyle, animationType }: ModalInterface = props;

  return (
    <View>
      <Modal
        presentationStyle={pageStyle}
        animationType={animationType}
        transparent={false}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        {children}
      </Modal>
    </View>
  );
});

export default Modal_;

interface ModalInterface {
  visible: boolean;
  onRequestClose?: ()=> void;
  pageStyle?: "fullScreen" | "pageSheet" | "formSheet" | "overFullScreen";
  animationType: "none" | "slide" | "fade";
}
