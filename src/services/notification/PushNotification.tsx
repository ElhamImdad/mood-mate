import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

export const scheduleNotifications = () => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Hi, how are you?",
      body: "Take a break and add today's entry.",
    },
    trigger: {
      hour: 7, // Morning notification time
      minute: 16,
      repeats: true,
    },
  });

  Notifications.scheduleNotificationAsync({
    content: {
      title: "Tell me about your day",
      body: "How have you been?",
    },
    trigger: {
      hour: 19, // Evening notification time
      minute: 0,
      repeats: true,
    },
  });
};

export const registerForPushNotifications = async () => {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Push token:", token);
  } else {
    alert("Must use physical device for Push Notifications");
  }
};
