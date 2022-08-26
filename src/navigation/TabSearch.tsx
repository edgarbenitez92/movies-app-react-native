import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens/SearchScreen';
import { RootStackParamsSearch } from '../types/rootStackParamsSeearch.type';

const Stack = createStackNavigator<RootStackParamsSearch>();

export const TabSearch = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}