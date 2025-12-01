import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function UserType() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Who are you?</Text>
      <Button title="Buyer" onPress={() => router.push("/(auth)/register")} />
      <Button title="Vendor" onPress={() => router.push("/(auth)/register")} />
    </View>
  );
}
