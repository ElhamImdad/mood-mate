import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/home/Home';
import MusicScreen from '../screens/home/inspirations/music/Music';
import BooksScreen from '../screens/home/inspirations/books/Books';
import VideosScreen from '../screens/home/inspirations/videos/Videos';
import FavoriteScreen from '../screens/home/inspirations/favorite/Favorite';


const HomeStack = createNativeStackNavigator();
export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} 
      options={() => ({
          headerShown: false,
          tabBarLabel: 'Home',
        })}/>
      <HomeStack.Screen name="Music" component={MusicScreen}/>
      <HomeStack.Screen name="Books" component={BooksScreen}/>
      <HomeStack.Screen name="Videos" component={VideosScreen}/>
      <HomeStack.Screen name="Favorite" component={FavoriteScreen}/>
    </HomeStack.Navigator>
  )
}