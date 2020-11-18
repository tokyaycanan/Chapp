import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartPageScreen from '../screens/StartPage';
import KayitScreen from '../screens/Kayit';
import LoginScreen from '../screens/Login';
import KayitNextScreen from '../screens/KayitNext';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start Page">
            
        <Stack.Screen name="StartPage"  component={StartPageScreen} />
        <Stack.Screen name="Kayit" component={KayitScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="KayitNext" component={KayitNextScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigationContainer;