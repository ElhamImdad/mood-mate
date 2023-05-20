import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfiguration";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  RootTabParamList,
  RootTabScreenProps,
} from "../models/AppNavigationModel";
import { TabBarIcon } from "../utils/Utils";
import Stats from "../screens/stats/Stats";
import Settings from "../screens/settings/Settings";
import { HomeNavigator } from "./HomeNavigator";
import { retrieveLastSelectedMoodData } from "../utils/MoodBehavior";
import { useAppDispatch } from "../store/store";
import { fetchColors } from "../store/features/colors-scheme/colorSchemeSlice";
import ColorContextProvider from "../context/color-context/ColorContextProvider";

export default function AppNavigator() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchColors())
  },[])
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <ColorContextProvider>
        <BottomTabNavigator />
      </ColorContextProvider>
    </NavigationContainer>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();


function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        tabBarActiveTintColor: "#4C9FC1",
      }}
    >
      <BottomTab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={({ navigation }: RootTabScreenProps<"HomeNavigator">) => ({
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Stats"
        component={Stats}
        listeners={{
          tabPress: (e) => {},
        }}
        options={({ navigation }: RootTabScreenProps<"Stats">) => ({
          tabBarLabel: "Stats",
          headerTitle: "May 2023",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="chart-line" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={({ navigation }: RootTabScreenProps<"Settings">) => ({
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="account-settings" color={color} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}
