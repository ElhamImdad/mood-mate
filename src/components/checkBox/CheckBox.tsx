import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { useField } from "formik";
import { SpecificFeelingModel } from "../../models/FeelingModel";
import cn from "classnames";

const CheckBox = React.forwardRef(({ ...props }: any, ref: any) => {
  let {
    formikProps,
    fieldName,
    // baseFielD,
    values,
    labels,
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
      }
    };

    const isCheck = field.value.includes(possibleValue.id);
    return (
      <View key={index}
      testID={`input-${fieldName}-${possibleValue.id}`}>
        <Pressable
          className={cn("rounded-md py-2 px-2.5 mr-2 my-3 ", {
            " bg-white ": isCheck != true,
            "bg-darkSky": isCheck == true,
          })}
          
          onPress={pressCheckboxHandler}
        >
          <Text
            className={cn("text-sm text-black800 font-medium ", {
              " text-white ": isCheck == true,
              "text-black800": isCheck != true,
            })}
          >
            {labels[index]}
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {values?.map(renderCheckBox)}
    </ScrollView>
  );
});

export default CheckBox;

interface CheckBoxProps {
  formikProps?: any;
  fieldName?: any;
  // baseFielD?: number ;
  values?: SpecificFeelingModel[];
  labels?: any;
}

{
  /* <CustomCheckbox
        center
        checked={isCheck}
        onPress={pressCheckboxHandler}
        key={index}
        testID={`input-${fieldName}-${possibleValue.id}`}
        checkedIcon={
          <Text className="text-sm text-black800 font-medium text-white">
            {labels[index]}
          </Text>
        }
        uncheckedIcon={
          <Text className="text-sm text-black800 font-medium text-black800">
            {labels[index]}
          </Text>
        }
        containerStyle={{
          backgroundColor: isCheck ? colors.darkSky : colors.white,
          borderRadius: 6,
        }}
      /> */
}
