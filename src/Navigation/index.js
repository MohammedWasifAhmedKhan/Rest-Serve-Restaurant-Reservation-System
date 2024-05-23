// Importing React library.
import React from 'react';
// Importing createStackNavigator function from react-navigation/stack.
import {createStackNavigator} from '@react-navigation/stack';
// Importing NavigationContainer component from react-navigation/native.
import {NavigationContainer} from '@react-navigation/native';

//Screens
// Importing Home screen component.
import Home from '../Home/Home';
// Importing Login screen component.
import Login from '../Auth/Login';
// Importing Register screen component.
import Register from '../Auth/Register';
// Importing ForgotPassword screen component.
import ForgotPassword from '../Auth/ForgotPassword';
// Importing BootSplash component.
import BootSplash from 'react-native-bootsplash';
// Creating a stack navigator.
const Stack = createStackNavigator();
// Declaring MyStack component.
function MyStack() {
  return (
    
    <Stack.Navigator  
      screenOptions={{
         // Hiding header for all screens. Then rendering Logn screen, Register screen, ForgotPassword screen, and Home screen
        headerShown: false,
      }}>
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
// Declaring Routes component.
export default function Routes() {
  return ( 
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <MyStack />
    </NavigationContainer>
  );
}

//REFERENCES:
// [1] 	"Stack Navigator | React Navigation" React Navigation. Accessed: Apr. 18, 2024. [Online]. Available: https://reactnavigation.org/docs/stack-navigator/
// [2] 	"NavigationContainer | React Navigation" ReactNavigation. Accessed: Apr. 18, 2024. [Online]. Available: https://reactnavigation.org/docs/navigation-container/
