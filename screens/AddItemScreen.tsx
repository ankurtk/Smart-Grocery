import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type AddItemScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function AddItemScreen({ navigation }: AddItemScreenProps) {
  const [itemName, setItemName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSave = () => {
    // TODO: Add validation and save logic
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Item Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Milk"
        value={itemName}
        onChangeText={setItemName}
      />
      <Text>Expiry Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <Button title="Save Item" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 15,
  },
});