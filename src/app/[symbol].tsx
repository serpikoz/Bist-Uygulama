import { View, Text } from "@/src/components/Themed";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import StockListItem from "../components/StockListItem";
import Graph from "../components/Graph";
import { useQuery, gql } from "@apollo/client";
import { ActivityIndicator, Pressable } from "react-native";
import { MonoText } from "../components/StyledText";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    <View style={{ padding: 10, flex: 1 }}>
      <Stack.Screen
        options={{ title: hisse.symbol, headerBackTitle: "Hisseler" }}
      />
      <StockListItem hisse={hisse} />
      <Graph symbol={hisse.symbol} />
      <View style={{ alignItems: "center" }}>
        <Text>Güncel Fiyat</Text>
        <MonoText style={{ fontSize: 28 }}>{hisse.close?.toFixed(1)}</MonoText>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 40,

          marginTop: 70,
          justifyContent: "center",
        }}
      >
        <Link
          href="/StockExchange/ExchangeScreen"
          style={{ textDecorationLine: "none" }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 3,
              borderColor: "blue",
              borderRadius: 4,

              backgroundColor: "#03045e",
            }}
          >
            <Text
              style={{
                paddingHorizontal: 40,
                paddingVertical: 10,
                color: "#00b4d8",
              }}
            >
              AL
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          href="/StockExchange/ExchangeScreen"
          style={{ textDecorationLine: "none" }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 3,
              borderColor: "#ef233c",
              borderRadius: 4,

              backgroundColor: "#c1121f",
            }}
          >
            <Text
              style={{
                paddingHorizontal: 40,
                paddingVertical: 10,
                color: "#e85d04",
              }}
            >
              SAT
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default HisseDetay;
