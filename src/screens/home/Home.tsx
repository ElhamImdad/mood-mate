import { View, Text } from "react-native";
import React from "react";
import Inspirations from "./Inspirations";
import Button1 from "../../components/button/Button";
import { Icon } from "../../utils/Utils";
import colors from "../../../colors";
import Entries from "./Entries";

const Home = () => {
  return (
    <View className="pt-16 px-6 h-full">
      <Inspirations />
      <Entries/>
      <View className="flex justify-end ">
        <Button1 type="solid" textColor="white" mx={48} my={20} pr_title={6}>
          Log your mood
          <Icon name="plus" color={colors.white} />
        </Button1>
      </View>
    </View>
  );
};

export default Home;
