import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LinkingConfiguration from './LinkingConfiguration';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from './types';
import { AntDesign } from '@expo/vector-icons';
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
        // tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
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
          title: 'Stats',
          tabBarIcon: ({ color }) => <TabBarIcon name="linechart" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Calendar"
        component={Calendar}
        options={({ navigation }: RootTabScreenProps<'Calendar'>) => ({
          title: 'Calendar',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={25} style={{ marginBottom: -3 }} {...props} />;
}