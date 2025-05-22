import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { loadGroceryItems, saveGroceryItems } from '../utils/storage';

export default function AddItemScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleSave = async () => {
    const existing = await loadGroceryItems();
    const updated = [...existing, { name, expiry }];
    await saveGroceryItems(updated);
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Item Name:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="e.g., Milk"
        value={name}
        onChangeText={setName}
      />
      <Text>Expiry Date:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
        placeholder="YYYY-MM-DD"
        value={expiry}
        onChangeText={setExpiry}
      />
      <Button title="Save Item" onPress={handleSave} disabled={!name || !expiry} />
    </View>
  );
}
