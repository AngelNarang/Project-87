import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import DailyPicScreen from "./screens/DailyPic";
import StarMapScreen from "./screens/StarMap";
import SpaceCraftScreen from "./screens/SpaceCraft";
const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
 <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
   <Stack.Screen name ="Home" component={HomeScreen}/> 
   <Stack.Screen name ="DailyPic" component={DailyPicScreen}/> 
   <Stack.Screen name ="StarMap" component={StarMapScreen}/> 
  <Stack.Screen name ="SpaceCraft" component={SpaceCraftScreen}/> 

 </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
