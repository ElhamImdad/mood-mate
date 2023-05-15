import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Type } from "typescript";
import { CheckBox as CustomCheckbox, Icon } from "@rneui/themed";
import { useField } from "formik";
import { SpecificFeelingModel } from "../../models/FeelingModel";
import colors from "../../utils/colors";

const CheckBox = React.forwardRef(({ ...props }: any, ref: any) => {
  let {
    formikProps,
    fieldName,
    // baseFielD,
    values,
    labels,
    // checked,
    // value,
    textColor,
    bgColor,
    borderColor,
  }: CheckBoxProps = props;

  const [field, meta, helpers] = useField(fieldName);

  const renderCheckBox = (possibleValue, index) => {
    const pressCheckboxHandler = () => {
      const existingValueIndex = field.value.findIndex(
        (v) => v === possibleValue.id
      );
      if (existingValueIndex === -1) {
        helpers.setValue([...field.value, possibleValue.id]);
      } else {
        helpers.setValue(
          field.value.filter((value, index) => index !== existingValueIndex)
        );
        console.log("uncheck", field.value);
      }
    };

    const isCheck = field.value.includes(possibleValue.id);
    return (
      <CustomCheckbox
        checked={isCheck}
        onPress={pressCheckboxHandler}
        key={index}
        testID={`input-${fieldName}-${possibleValue.id}`}
        checkedIcon={<Text className="text-white">{labels[index]}</Text>}
        uncheckedIcon={<Text className="text-black800">{labels[index]}</Text>}
        checkedColor={"blue"}
        containerStyle={{
          backgroundColor: isCheck ? colors.darkSky : colors.white,
          borderRadius: 6,
        }}
      />
    );
  };

  return <ScrollView horizontal showsHorizontalScrollIndicator={false}
  className="flex flex-nowrap flex-row" >{values?.map(renderCheckBox)}</ScrollView>;
});

export default CheckBox;

interface CheckBoxProps {
  formikProps?: any;
  fieldName?: any;
  // baseFielD?: number ;
  values?: SpecificFeelingModel[];
  labels?: any;
  // baseFieldName?: string;
  // checked: boolean;
  // value?: string | number;
  textColor?: "white" | "darkSky" | "gray";
  bgColor?: "transparent" | "black" | "white" | "gray" | "darkSky";
  borderColor?: "darkSky" | "gray" | "black" | "darkSky";
}

/* <CheckBox
        center
        // key={id}
        checked={false}
        // checkedIcon={<Text className="text-white">{option.name}</Text>}
        // uncheckedIcon={<Text className="text-black800">{option.name}</Text>}
        // onPress={() =>
        //   formikProps.setFieldValue(
        //     fieldName,
        //     formikProps.value.filter((i) => i !== option)
        //   )
        // }
        containerStyle={{ backgroundColor: "red", borderRadius: 6, margin: 0 }}
      /> */
