import { StyleSheet, FlatList, ActivityIndicator, Image } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Stack } from "expo-router";
import StockListItem from "@/src/components/StockListItem";

const image = require("../../../assets/images/Saly-1.png");

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Ana Sayfa" }} />

      <Image style={styles.image} source={image} />
      <Text style={styles.header1}>Borsa Guru'ya Hoşgeldiniz</Text>
      <Text style={styles.header2}>
        Size tanımlanmış olan 1000 TL ile yatırımınıza başlayın
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    height: "40%",
    aspectRatio: 1,
  },
  header1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  header2: {
    fontSize: 20,
    textAlign: "center",
    color: "#707070",
  },
});
