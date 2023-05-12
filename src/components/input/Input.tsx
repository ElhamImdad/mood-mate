import React from "react";
import cn from "classnames";
import { View, TouchableHighlight, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import colors from "../../utils/colors";

const Input = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let {

    onChangeText,

  }: InputProps = props;

  return (
    <>
      <Input
      placeholder="Comment"
      leftIcon={{ type: 'font-awesome', name: 'comment' }}
      onChangeText={value => ""}
      />
    </>
  );
});

export default Input;

interface InputProps {

    onChangeText: () => void;
}
