import { View } from "react-native";
import React from "react";
import { Skeleton, FAB } from "@rneui/themed";
import colors from "../../utils/colors";

const Loader = () => {
  const repeatSkelton = Array.from(
    { length: 3 },
    (_, index) => index + 1
  );
  return (
    <>
    <View
          className="flex flex-1 flex-row justify-center items-center"
          
        >
      {repeatSkelton.map((idx) => (
        <View className="px-1" key={idx}>
          <Skeleton
            circle
            animation="pulse"
            height={20}
            width={20}
            skeletonStyle={{ backgroundColor: colors.white50 }}
          />
        </View>
      ))}
      </View>
    </>
  );
};

export default Loader;
