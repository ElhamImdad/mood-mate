import React from 'react';
import { platform } from '../../utils/Constant';
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

const handleNotificationReceived = (notification: Notifications.Notification) => {
  // Handle the received notification when the app is in the foreground
  console.log('Notification received:', notification);
};

export const registerNotificationHandlers = () => {
    const notificationListener = Notifications.addNotificationReceivedListener(handleNotificationReceived);
    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification received: ', response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };

};

export const scheduleNotifications = () => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Hi, how are you?",
      body: "Take a break and add today's entry.",
    },
    trigger: {
      hour: 10, // Morning notification time
      minute: 0,
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

  if (platform === "android") {
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
    // token = (await Notifications.getExpoPushTokenAsync()).data;
    if (platform === 'android') {
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else if (platform === 'ios') {
      token = (await Notifications.getExpoPushTokenAsync()).data;
    }

    console.log("Push token:", token);
  } else {
    alert("Must use physical device for Push Notifications");
  }
};
