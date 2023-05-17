import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import {
  scheduleNotifications,
  registerForPushNotifications,
  registerNotificationHandlers,
} from "./src/services/notification/PushNotification";
import { setNotificationHandler } from "expo-notifications";

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    registerForPushNotifications();
    scheduleNotifications();
    registerNotificationHandlers();
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
