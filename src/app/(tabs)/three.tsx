import { StyleSheet, FlatList, ActivityIndicator } from "react-native";

import { Text, View } from "@/src/components/Themed";
import { Stack } from "expo-router";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Portfolyom" }} />
      <Text>Deneme</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
