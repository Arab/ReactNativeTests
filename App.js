/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './Components/HomePage';
import MonthsList from './Components/MonthsList';
import MonthDetails from './Components/MonthDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Months" component={MonthsList} />
        <Stack.Screen
          name="MonthDetails"
          component={MonthDetails}
          options={({route}) => ({title: route.params.month})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
