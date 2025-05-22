import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { loadGroceryItems } from "../utils/storage";
import { getExpiryStatus } from "../utils/Dateutils";

export default function HomeScreen({ navigation }: any) {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const storedItems = await loadGroceryItems();
      setItems(storedItems);
    };

    const unsubscribe = navigation.addListener("focus", fetchItems);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Your Grocery List</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => {
          const status = getExpiryStatus(item.expiry);
          const bgColor =
            status === "green"
              ? "#d4edda"
              : status === "yellow"
              ? "#fff3cd"
              : "#f8d7da";

          return (
            <View
              style={{
                backgroundColor: bgColor,
                padding: 12,
                marginBottom: 8,
                borderRadius: 6,
              }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16 }}>{item.name}</Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  Expires: {item.expiry}
                </Text>
                <Text style={{ color: "red" }}>🗑️</Text>
              </View>
            </View>
          );
        }}
      />
      <Button
        title="Add New Item"
        onPress={() => navigation.navigate("Add Item")}
      />
    </View>
  );
}
