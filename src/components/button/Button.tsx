import React from "react";
import cn from "classnames";
import { View, TouchableHighlight, Text } from "react-native";
import { Button } from "@rneui/themed";
import colors from "../../utils/colors";
import { Type } from "typescript";

const Button1 = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let {
    disabled,
    type,
    radius,
    textColor,
    bgColor,
    borderColor,
    px,
    py,
    pr_title,
    pl_title,
    mx,
    my,
    onPress,
  }: ButtonProps = props;

  return (
    <>
      <Button
        onPress={onPress}
        radius={radius ? radius : "lg"}
        type={type ? type : "solid"}
        disabled={disabled}
        titleStyle={{
          color: `${
            (!textColor && type !== "solid") || (!bgColor && type !== "solid")
              ? colors.darkSky
              : textColor === "white" || bgColor === "darkSky"
              ? colors.white
              : textColor === "gray"
              ? colors.gray400
              : colors.black800
          }`,
          paddingRight: pr_title ? pr_title : 0,
          paddingLeft: pl_title ? pl_title : 0,
        }}
        buttonStyle={{
          backgroundColor: `${
            type === "outline" || type === "clear"
              ? "transparent"
              : !textColor && !bgColor && type === "solid"
              ? colors.darkSky
              : bgColor === "black"
              ? colors.black800
              : bgColor === "gray"
              ? colors.gray400
              : bgColor === "transparent"
              ? "transparent"
              : bgColor === "darkSky"
              ? colors.darkSky
              : colors.darkSky
          }`,

          borderColor: `${
            !borderColor && type !== "outline" && type !== "clear"
              ? "transparent"
              : borderColor === "black"
              ? colors.black800
              : borderColor === "gray"
              ? colors.gray400
              : borderColor === "darkSky"
              ? colors.darkSky
              : colors.darkSky
          }`,
          borderWidth: 1,
          paddingVertical: py ? py : 10,
          paddingHorizontal: px ? px : 20,
        }}
        containerStyle={{
          marginHorizontal: mx ? mx : 0,
          marginVertical: my ? my : 0,
        }}
      >
        {children}
      </Button>
    </>
  );
});

export default Button1;

interface ButtonProps {
  px?: number;
  py?: number;
  pr_title?: number;
  pl_title?: number;
  mx?: number;
  my?: number;
  type?: "solid" | "clear" | "outline";
  radius?: "xs" | "sm" | "md" | "lg" | number;
  textColor?: "white" | "darkSky" | "gray";
  bgColor?: "transparent" | "black" | "white" | "gray" | "darkSky";
  borderColor?: "darkSky" | "gray" | "black" | "darkSky";
  disabled?: boolean;
  onPress: () => void;
}
