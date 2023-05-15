import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Type } from "typescript";
import { CheckBox as CustomCheckbox, Icon } from "@rneui/themed";
import { useField } from "formik";
import { SpecificFeelingModel } from "../../models/FeelingModel";

const CheckBox = 

React.forwardRef(({ ...props }: any, ref: any) => {
  let {
    formikProps,
    // baseFieldName,
    fieldName,
    baseFielD,
    values,
    labels,
    // checked,
    // value,
    textColor,
    bgColor,
    borderColor,
  }: CheckBoxProps = props;

  const [field, meta, helpers] = useField(fieldName);
  // const [baseField, baseMeta, baseHelpers] = useField(baseFieldName);

  const renderCheckBox = (possibleValue, index) => {
    // if (field.value.length !== 0 ){
    //   let specificFeelingOptionID =  values?.map((item) => item["id"])
    //   if (!specificFeelingOptionID.includes(field.value[0])){
    //     helpers.setValue([])
    //   }
    // }
    
    const pressCheckboxHandler = () => {
      const existingValueIndex = field.value.findIndex((v) => (v === possibleValue.id) );
      if (existingValueIndex === -1) {
        
        helpers.setValue([...field.value, possibleValue.id]);
        // baseHelpers.setValue(baseField.value, label)
      } else {
        helpers.setValue(field.value.filter((value, index) => index !== existingValueIndex));
        console.log('uncheck', field.value);
        
      }
    };

    return (
      <CustomCheckbox
        checked={field.value.includes(possibleValue.id)}
        onPress={pressCheckboxHandler}
        key={index}
        testID={`input-${fieldName}-${possibleValue.id}`}
        title={labels[index]}
        checkedColor={'blue'}
      />
    );
    
    
  }
  
  return (
    <ScrollView horizontal>
    <View className="rounded-md p-0">
      <ScrollView horizontal>{values?.map(renderCheckBox)}</ScrollView>
      {/* <CheckBox
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
      /> */}
    </View>
    </ScrollView>
  );
});

export default CheckBox;

interface CheckBoxProps {
  formikProps?: any;
  fieldName?: any;
  baseFielD?: number ;
  values?: SpecificFeelingModel[];
  labels?: any;
  // baseFieldName?: string;
  // checked: boolean;
  // value?: string | number;
  textColor?: "white" | "darkSky" | "gray";
  bgColor?: "transparent" | "black" | "white" | "gray" | "darkSky";
  borderColor?: "darkSky" | "gray" | "black" | "darkSky";
}
