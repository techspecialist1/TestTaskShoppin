import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LensSearch, Search, VoiceSearch} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="VoiceSearch" component={VoiceSearch} />
        <Stack.Screen name="LensSearch" component={LensSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
