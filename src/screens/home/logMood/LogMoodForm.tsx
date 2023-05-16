import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import Button from "../../../components/button/Button";
import MoodSlider from "./moodSlider/MoodSlider";
import Modal from "../../../components/modal/Modal";
import Note from "./moodSlider/Note";
import { useAppSelector } from "../../../store/store";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../store/store";
import { togleFeelinfForm } from "../../../store/features/feelings/feelingUtilsSlice";
interface FormValues {
  feelingID: number; ////Id of specificFeelings selected
  specificFeelingsOption: number[]; //Id of specificFeelings selected
  note: string;
}

const LogMoodForm: React.FC<{}> = () => {
  const [noteModalVisible, setNoteModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const feeling = useAppSelector((state) => state.feelingUtils.feeling);

  const toggleNoteModal = (): void => {
    setNoteModalVisible(!noteModalVisible);
  };

  const nextFeelingHandler = (): void => {
    setNoteModalVisible(true);
  };

  // let specificFeelingOptionID =  feeling.specificFeeling?.map((item) => item["id"])
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
      onSubmit={(values, actions) => {
        dispatch(togleFeelinfForm())
        console.log({ values });

        alert(JSON.stringify(values, null, 2));

        actions.setSubmitting(false);
      }}
    >
      {(formikProps) => (
        <View className="py-14 px-5 bg-white50 h-screen">
          <Text className="text-xl font-extrabold text-black800 text-center">
            How are you?
          </Text>
          <MoodSlider formikProps={formikProps} />  
  
          <View className="flex-1 justify-end bottom-16">
            {formikProps.isSubmitting ? (
              <Text></Text>
            ) : (
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
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  keyboardVerticalOffset={0}
                >
                  <Note formikProps={formikProps} submitForm={formikProps.handleSubmit} toggleClose={toggleNoteModal} />
                </KeyboardAvoidingView>
              </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LogMoodForm;
