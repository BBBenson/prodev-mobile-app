import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-brown-900">Coffee Shop Home</Text>
      <Text className="text-base text-gray-500 mt-2">Welcome to the Coffee Shop App</Text>
    </View>
  );
}
