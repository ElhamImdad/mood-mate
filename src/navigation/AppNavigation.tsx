import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LinkingConfiguration from './LinkingConfiguration';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from './types';
import { TabBarIcon } from "../utils/Utils";
import Home from '../screens/home/Home';
import Stats from '../screens/stats/Stats';
import Calendar from '../screens/calendar/Calendar';


export default function AppNavigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <BottomTabNavigator/>
    </NavigationContainer>
  )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator(){
  return(
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#4C9FC1",
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Stats"
        component={Stats}
        listeners={{
          tabPress: e => {
          },
        }}
        options={({ navigation }: RootTabScreenProps<'Stats'>) => ({
          tabBarLabel: 'Stats',
          headerTitle: "May 2023",
          tabBarIcon: ({ color }) => <TabBarIcon name="chart-line" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Calendar"
        component={Calendar}
        options={({ navigation }: RootTabScreenProps<'Calendar'>) => ({
          title: 'Calendar',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-month" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  )
}

