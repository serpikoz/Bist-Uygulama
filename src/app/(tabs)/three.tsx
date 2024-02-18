import { StyleSheet, FlatList, ActivityIndicator, Image } from "react-native";

import { Text, View } from "@/src/components/Themed";
import { Stack } from "expo-router";
import PortfolioHisseler from "@/src/components/PortfolioHisseler";

const image = require("../../../assets/images/Saly-10.png");

const portfolioHisseler = [
  {
    id: "1",
    name: "Sanal TL",
    symbol: "TL",
    amount: 200.75,
    valueTL: 200.75,
  },
  {
    id: "2",
    name: "THYAO",
    symbol: "TL",
    amount: 1.15,
    valueTL: 280.75,
  },
  {
    id: "3",
    name: "BIMAS",
    symbol: "TL",
    amount: 5,
    valueTL: 150.8,
  },
  {
    id: "4",
    name: "KRDMD",
    symbol: "KR",
    amount: 8,
    valueTL: 320.5,
  },
  {
    id: "5",
    name: "PETKM",
    symbol: "PT",
    amount: 10,
    valueTL: 420.2,
  },
  {
    id: "6",
    name: "THYAO",
    symbol: "THY",
    amount: 15,
    valueTL: 550.0,
  },
  {
    id: "7",
    name: "GARAN",
    symbol: "GR",
    amount: 20,
    valueTL: 780.3,
  },
  {
    id: "8",
    name: "ASELS",
    symbol: "AS",
    amount: 12,
    valueTL: 480.6,
  },
  {
    id: "9",
    name: "TUPRS",
    symbol: "TU",
    amount: 7,
    valueTL: 265.9,
  },
];

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Portfolyom" }} />

      <FlatList
        style={{ width: "100%" }}
        data={portfolioHisseler}
        renderItem={({ item }) => (
          <PortfolioHisseler portfolioHisseler={item} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        ListHeaderComponent={() => (
          <>
            <View style={styles.imageView}>
              <Image style={styles.image} source={image} />
            </View>

            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Bakiyem</Text>
              <Text style={styles.balance}>200.75 ₺</Text>
            </View>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  balanceContainer: {
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  imageView: { alignItems: "center" },

  image: { height: 175, resizeMode: "contain" },
  label: { fontSize: 18, fontWeight: "bold", color: "#777777" },
  balance: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
