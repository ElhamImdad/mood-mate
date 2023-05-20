import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setNotificationHandler } from "expo-notifications";
import { I18nManager } from 'react-native';
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/AppNavigator";
import { store } from "./src/store/store";
import {
  scheduleNotifications,
  registerForPushNotifications,
  registerNotificationHandlers,
} from "./src/services/notification/PushNotification";


setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);
    registerForPushNotifications();
    scheduleNotifications();
    registerNotificationHandlers();
    retrieveLastSelectedMoodData()
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaProvider>
  );
}
// Retrieve data from local storage
const retrieveLastSelectedMoodData = async () => {
  try {
    const value = await AsyncStorage.getItem('lastSelectedMood');
    if (value !== null) {
      console.log('Last Selected Mood Data:', value);
    } else {
      console.log('Data not found in local storage.');
    }
  } catch (error) {
    console.log('Error retrieving data:', error);
  }
};

