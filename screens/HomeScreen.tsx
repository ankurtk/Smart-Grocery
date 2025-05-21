import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Grocery List</Text>
      <Button title="Add New Item" onPress={() => navigation.navigate('Add Item')} />
    </View>
  );
}