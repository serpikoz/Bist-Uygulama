import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Stack } from "expo-router";
import StockListItem from "@/src/components/StockListItem";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Ana Sayfa" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
