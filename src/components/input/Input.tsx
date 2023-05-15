import React from "react";
import cn from "classnames";
import { View, Text, TextInput } from "react-native";
import colors from "../../utils/colors";
import { Type } from "typescript";

const Input = React.forwardRef(({ children, ...props }: any, ref: any) => {
  let {
    placeholder,
    // value,
    keyboardType,
    bgColor,
    textColor,
    borderColor,
    radius,
    size,
    space,
    multiline,
    maxLength,
    autoFocus,
    label,
    formikProps,
    fieldName,
    // onBlur,
    // onChangeText,
    onSubmitEditing,
  }: InputProps = props;

  return (
    <>
      <TextInput
        placeholder={placeholder? placeholder : ""}
        onChangeText={formikProps?.handleChange(fieldName)}
        onSubmitEditing={onSubmitEditing}
        onBlur={formikProps?.handleBlur(fieldName)}
        autoFocus={autoFocus}
        // value={value}
        maxLength={maxLength}
        keyboardType={
          keyboardType === "number-pad"
            ? "number-pad"
            : keyboardType === "decimal-pad"
            ? "decimal-pad"
            : keyboardType === "numeric"
            ? "numeric"
            : keyboardType === "email-address"
            ? "email-address"
            : keyboardType === "phone-pad"
            ? "phone-pad"
            : keyboardType === "url"
            ? "url"
            : "default"
        }
        multiline={!multiline?false:multiline}
        className={cn("p-5 border boreder-gray400 text-base hover:border-darkSxky", size, space, {
          //borderColoe
          "border-gray400": !borderColor || borderColor === "gray",
          "border-darkSky": borderColor === "darkSky",
          "border-black800": borderColor === "black",
          "border-white": borderColor === "white",
          "border-transparent": borderColor === "transparent",


          // colors
          "text-black800": !textColor && !bgColor,
          "text-darkSky": textColor === "darkSky",
          "text-gray400": textColor === "gray",

          //bg Color
          "bg-white": !bgColor && !textColor,
          " text-white": bgColor === "white",
          "bg-black800 text-white": bgColor === "black",
          "bg-darkSky text-white": bgColor === "darkSky",
          "bg-transparent": bgColor === "transparent",
          "bg-gray400": bgColor === "gray",

          // radius
          "rounded-3xl": !radius,
          rounded: radius === "rounded",
          "rounded-md": radius === "md",
          "rounded-lg": radius === "lg",
          "rounded-2xl": radius === "2xl",
        })}
      />
      <Text className="text-error">
        {formikProps?.touched[fieldName] && formikProps?.errors[fieldName]}
      </Text>
    </>
  );
});

export default Input;

interface InputProps {
  placeholder?: string;
  moreProps?: Type;
  // value?: string;
  bgColor?: "transparent" | "black" | "white" | "gray" | "darkSky";
  textColor?: "white" | "darkSky" | "gray";
  borderColor?: "transparent" | "black" | "white" | "gray" | "darkSky";
  radius?: "rounded" | "md" | "lg" | "2xl";
  size?: string;
  space?: string;
  keyboardType?:
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
    multiline?: boolean;
    maxLength?: number;
    autoFocus?: boolean;
    label?: string;
    formikProps?: any;
    fieldName?: any;
    // onBlur?: () => void;
    // onChangeText?: () => void;
    onSubmitEditing?: ()=> void;
}
