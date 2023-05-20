import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import cn from "classnames";
import Button from "../../../components/button/Button";
import MoodSlider from "./moodSlider/MoodSlider";
import Modal from "../../../components/modal/Modal";
import Note from "./moodSlider/Note";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../store/store";
import { togleFeelinfForm } from "../../../store/features/feelings/feelingUtilsSlice";
import { platform } from "../../../utils/Constant";
import { Icon } from "../../../utils/Utils";
import colors from "../../../utils/colors";
interface FormValues {
  feelingID: number; //id for the feeling (emogi)
  specificFeelingsOption: number[]; // id for each specific feeling...
  note: string;
}

const LogMoodForm: React.FC<{}> = () => {
  const [noteModalVisible, setNoteModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const toggleNoteModal = (): void => {
    setNoteModalVisible(!noteModalVisible);
  };

  const nextFeelingHandler = (): void => {
    setNoteModalVisible(true);
  };

  const handleSubmitForm = async (values, actions) => {
    dispatch(togleFeelinfForm());
    actions.setSubmitting(false);
    try {
      await AsyncStorage.setItem("lastSelectedMood", JSON.stringify(values));
      console.log("Form data saved successfully!", { values });
    } catch (error) {
      console.log("Error saving form data:", error);
    }
  };

  const feelingsFormValidationSchema = Yup.object({
    specificFeelingsOption: Yup.array(Yup.number()),
    note: Yup.string(),
  });

  const initialValues: FormValues = {
    feelingID: -1,
    specificFeelingsOption: [],
    note: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={feelingsFormValidationSchema}
      onSubmit={handleSubmitForm}
    >
      {(formikProps) => (
        <View className="bg-white50 flex-1 py-5 px-5">
          <Pressable
            className="flex justify-start"
            onPress={() => {
              dispatch(togleFeelinfForm());
            }}
          >
            <Icon name="close-circle-outline" color={colors.gray500} />
          </Pressable>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "center",
              paddingVertical: 30,
            }}
          >
            <View className={cn("  flex-1 flex flex-col justify-center")}>
              <View className="grow-0">
                <Text className="text-xl font-extrabold text-black800 text-center">
                  How are you?
                </Text>
              </View>
              <View className="grow">
                <View className="flex flex-col flex-1">
                  <MoodSlider formikProps={formikProps} />
                  <View className="flex-1 flex-none">
                    {!formikProps.isSubmitting && (
                      <Button
                        type="solid"
                        textColor="white"
                        mx={48}
                        my={20}
                        onPress={nextFeelingHandler}
                      >
                        Next
                      </Button>
                    )}

                    <Modal
                      visible={noteModalVisible}
                      onRequestClose={toggleNoteModal}
                      transparent={true}
                      animationType="slide"
                    >
                      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View className="flex-1 flex-col justify-end">
                          <KeyboardAvoidingView
                            enabled={true}
                            behavior={platform === "ios" ? "padding" : "height"}
                            keyboardVerticalOffset={0}
                          >
                            <Note
                              formikProps={formikProps}
                              submitForm={formikProps.handleSubmit}
                              toggleClose={toggleNoteModal}
                            />
                          </KeyboardAvoidingView>
                        </View>
                      </TouchableWithoutFeedback>
                    </Modal>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default LogMoodForm;
