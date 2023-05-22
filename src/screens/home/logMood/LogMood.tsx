import { View } from "react-native";
import React from "react";
import Button from "../../../components/button/Button";
import { Icon } from "../../../components/icon/Icon";
import Modal from "../../../components/modal/Modal";
import colors from "../../../utils/colors";
import LogMoodForm from "./LogMoodForm";
import { useAppSelector, useAppDispatch } from "../../../store/store"
import { togleFeelinfForm } from "../../../store/features/feelings/feelingUtilsSlice";

const LogMood = () => {
  const feelingFormVisible = useAppSelector((state) => state.feelingUtils.isFeelingFormVisible);
  const dispatch = useAppDispatch()

  return (
    <View className="">
      <Modal
        visible={feelingFormVisible}
        onRequestClose={() => dispatch(togleFeelinfForm())}
        pageStyle="pageSheet"
        animationType="slide"
        transparent={false}
      >
        <LogMoodForm />
      </Modal>
      <View>
      <Button
        type="solid"
        textColor="white"
        mx={48}
        my={20}
        pr_title={6}
        onPress={() => dispatch(togleFeelinfForm())}
      >
        Log your mood
        <Icon name="plus" color={colors.white} />
      </Button>
      </View>
    </View>
  );
};

export default LogMood;
