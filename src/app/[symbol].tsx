import { View, Text } from "@/src/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import top5 from "@/assets/data/top5.json";
import React from "react";
import StockListItem from "../components/StockListItem";

const HisseDetay = () => {
  const { symbol } = useLocalSearchParams();

  const hisse = top5[symbol];

  if (!hisse) {
    return <Text>{symbol} Hissesi bulunamadı... </Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen
        options={{ title: hisse.symbol, headerBackTitle: "Hisseler" }}
      />
      <StockListItem hisse={hisse} />
    </View>
  );
};

export default HisseDetay;
