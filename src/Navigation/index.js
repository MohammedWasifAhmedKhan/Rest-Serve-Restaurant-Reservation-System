import React from 'react'; // Importing React library.

import {createStackNavigator} from '@react-navigation/stack'; // Importing createStackNavigator function from react-navigation/stack.
import {NavigationContainer} from '@react-navigation/native'; // Importing NavigationContainer component from react-navigation/native.

// Screens
import Home from '../Home/Home'; // Importing Home screen component.
import Login from '../Auth/Login'; // Importing Login screen component.
import Register from '../Auth/Register'; // Importing Register screen component.
import ForgotPassword from '../Auth/ForgotPassword'; // Importing ForgotPassword screen component.
import BootSplash from 'react-native-bootsplash'; // Importing BootSplash component.

const Stack = createStackNavigator(); // Creating a stack navigator.

function MyStack() { // Declaring MyStack component.
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hiding header for all screens.
      }}>
      <Stack.Screen name="Login" component={Login} /> {/* Rendering Login screen. */}
      <Stack.Screen name="Register" component={Register} /> {/* Rendering Register screen. */}
      <Stack.Screen name="Home" component={Home} /> {/* Rendering Home screen. */}
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> {/* Rendering ForgotPassword screen. */}
    </Stack.Navigator>
  );
}

export default function Routes() { // Declaring Routes component.
  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}> {/* Rendering NavigationContainer with onReady callback to hide BootSplash. */}
      <MyStack /> {/* Rendering MyStack component inside NavigationContainer. */}
    </NavigationContainer>
  );
}
