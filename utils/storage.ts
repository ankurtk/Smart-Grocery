import AsyncStorage from "@react-native-async-storage/async-storage";


const GROCERY_KEY = '@grocery_items';

export const saveGroceryItems = async (items: any[]) => {
  try {
    const jsonValue = JSON.stringify(items);
    await AsyncStorage.setItem(GROCERY_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving grocery items:', e);
  }
};

export const loadGroceryItems = async (): Promise<any[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(GROCERY_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error loading grocery items:', e);
    return [];
  }
};
