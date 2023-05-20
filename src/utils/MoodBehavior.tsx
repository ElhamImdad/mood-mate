import AsyncStorage from "@react-native-async-storage/async-storage";

// Retrieve data from local storage
export const retrieveLastSelectedMoodData = async () => {
  // try {
  const value = await AsyncStorage.getItem("lastSelectedMood");
  if (value !== null) {
    console.log("Last Selected Mood Data:", value);
    const feeling_ = JSON.parse(value);
    return feeling_.feelingID;
  } else {
    console.log("Data not found in local storage.");
    return -1;
  }
  // } catch (error) {
  //   console.log('Error retrieving data:', error);
  // }
};
