import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import {
  scheduleNotifications,
  registerForPushNotifications,
} from "./src/services/notification/PushNotification";

export default function App() {
  useEffect(() => {
    registerForPushNotifications();
    scheduleNotifications();
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigation />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaProvider>
  );
}