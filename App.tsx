import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddItemScreen from './screens/AddItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Grocery List" component={HomeScreen} />
        <Stack.Screen name="Add Item" component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
