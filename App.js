import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import Jan from "./screens/Jan";



const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jan" component={Jan} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;