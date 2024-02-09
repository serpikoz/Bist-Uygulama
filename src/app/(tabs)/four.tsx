import { StyleSheet, FlatList, ActivityIndicator } from "react-native";

import { Text, View } from "@/src/components/Themed";
import { Stack } from "expo-router";

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Profil" }} />
      <Text>Deneme</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
