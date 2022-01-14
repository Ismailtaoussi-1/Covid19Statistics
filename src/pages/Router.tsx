import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Main-Page/MainPage';
import CountyList from './Countries list/listing';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} options={{ title: 'Main page' }} />
        <Stack.Screen name="Countries" component={CountyList} options={{ title: 'Countries List' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;