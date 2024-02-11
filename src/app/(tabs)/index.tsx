import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Stack } from "expo-router";
import StockListItem from "@/src/components/StockListItem";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query MyQuery($symbol: String) {
    quotes(symbol: $symbol) {
      value {
        name
        symbol
        percent_change
        close
      }
    }
  }
`;

export default function TabOneScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { symbol: "THYAO,IBM,MSFT,GE,GM,DOOR" },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Hata oluştu!</Text>;
  }
  const hisseler = data.quotes.map((q) => q.value);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Hisseler" }} />
      <FlatList
        data={hisseler}
        renderItem={({ item }) => <StockListItem hisse={item} />}
        contentContainerStyle={{ gap: 20, padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
