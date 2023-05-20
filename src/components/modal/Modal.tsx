import { Modal, View } from "react-native";
import React from "react";

const Modal_ = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let { visible, onRequestClose, pageStyle, animationType,  transparent}: ModalInterface = props;

  return (
    <View>
      <Modal
        presentationStyle={pageStyle}
        animationType={animationType}
        transparent={transparent}
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
  transparent?: boolean;
}
