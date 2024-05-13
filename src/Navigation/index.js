import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//Screens
import Home from '../Home/Home';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import ForgotPassword from '../Auth/ForgotPassword';
import BootSplash from 'react-native-bootsplash';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator /> // [1] 
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return ( // [2]
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}> 
      <MyStack />
    </NavigationContainer>
  );
}

//REFERENCES:
// [1] 	"Stack Navigator | React Navigation" React Navigation. Accessed: Apr. 18, 2024. [Online]. Available: https://reactnavigation.org/docs/stack-navigator/
// [2] 	"NavigationContainer | React Navigation" ReactNavigation. Accessed: Apr. 18, 2024. [Online]. Available: https://reactnavigation.org/docs/navigation-container/
