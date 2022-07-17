import *as React from "react"
import {View, Text, StyleSheet} from "react-native"
import HomeScreen from "./screens/homeScreen"
import DailyPicScreen from "./screens/dailyPic"
import SpaceCraftsScreen from "./screens/spaceCrafts"
import StarMapScreen from "./screens/starMap"
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
const Stack = createStackNavigator()



export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "home" component = {HomeScreen}/>
          <Stack.Screen name = "space crafts" component = {SpaceCraftsScreen}/>
          <Stack.Screen name = "daily pics" component = {DailyPicScreen}/>
          <Stack.Screen name = "Star Map" component = {StarMapScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}