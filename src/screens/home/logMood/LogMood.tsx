import { View } from "react-native";
import React, { useState } from "react";
import Button from "../../../components/button/Button";
import { Icon } from "../../../utils/Utils";
import Modal from "../../../components/modal/Modal";
import colors from "../../../utils/colors";
import LogMoodDetails from "./LogMoodForm";
import { useAppSelector, useAppDispatch } from "../../../store/store"
import { togleFeelinfForm } from "../../../store/features/feelings/feelingUtilsSlice";

const LogMood = () => {
  const feelingFormVisible = useAppSelector((state) => state.feelingUtils.isFeelingFormVisible);
  const dispatch = useAppDispatch()

  return (
    <View className="flex justify-end">
      <Modal
        visible={feelingFormVisible}
        onRequestClose={() => dispatch(togleFeelinfForm())}
        pageStyle="pageSheet"
        animationType="slide"
        transparent={false}
      >
        <LogMoodDetails />
      </Modal>
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
  );
};

export default LogMood;
