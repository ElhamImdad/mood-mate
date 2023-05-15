import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import Button from "../../../components/button/Button";
import MoodSlider from "./moodSlider/MoodSlider";
import Modal from "../../../components/modal/Modal";
import Note from "./moodSlider/Note";
import { useAppSelector } from "../../../store/store";
import { Formik } from "formik";
import * as Yup from "yup";
import CheckBox from "../../../components/checkBox/CheckBox";
import { useAppDispatch } from "../../../store/store";
import { setSelectedSpecificFeeling } from "../../../store/features/feelingSlice";


interface FormValues {
  feeling: string; ////Id of specificFeelings selected
  specificFeelingsOption: number[]; //Id of specificFeelings selected
  note: string;
}

const LogMoodForm: React.FC<{}> = () => {
  const [noteModalVisible, setNoteModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const feeling = useAppSelector((state) => state.feeling.feeling);

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

  const selectFeeling = (item) => {
    dispatch(setSelectedSpecificFeeling({ selectedID: item.id }));
  };
  const initialValues: FormValues = {
    feeling: "",
    specificFeelingsOption: [],
    note: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={feelingsFormValidationSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });

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
                onPress={formikProps.handleSubmit}
              >
                Next
              </Button>
            )}

            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            <Modal
              visible={noteModalVisible}
              onRequestClose={toggleNoteModal}
              transparent={true}
              animationType="slide"
            >
              <View className="flex-1 flex-col justify-end">
                <KeyboardAvoidingView
                  enabled={true}
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  keyboardVerticalOffset={0}
                >
                  <Note toggleClose={toggleNoteModal} />
                </KeyboardAvoidingView>
              </View>
            </Modal>
            {/* </TouchableWithoutFeedback> */}
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LogMoodForm;
