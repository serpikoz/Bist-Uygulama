import { View, Text } from "@/src/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import StockListItem from "../components/StockListItem";
import Graph from "../components/Graph";
import { useQuery, gql } from "@apollo/client";
import { ActivityIndicator } from "react-native";

const query = gql`
  query MyQuery($symbol: String) {
    quote(symbol: $symbol) {
      name
      symbol
      close
      percent_change
    }
  }
`;

const HisseDetay = () => {
  const { symbol } = useLocalSearchParams();

  const { data, loading, error } = useQuery(query, {
    variables: { symbol },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{symbol} Hissesi bulunamadı... </Text>;
  }

  const hisse = data.quote;

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen
        options={{ title: hisse.symbol, headerBackTitle: "Hisseler" }}
      />
      <StockListItem hisse={hisse} />
      <Graph symbol={hisse.symbol} />
    </View>
  );
};

export default HisseDetay;
