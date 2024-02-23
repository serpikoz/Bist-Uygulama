import { StyleSheet, Image } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { MonoText } from "@/src/components/StyledText";
import { Text, View } from "@/src/components/Themed";

const image = require("../../../assets/images/Saly-31.png");

const isBuy = router?.back?.isBuy;
const hisseData = router?.back?.hisse;

const ExchangeScreen = () => {
  return (
    <View
      style={{
        flex: 1,

        alignItems: "center",
      }}
    >
      <View>
        <MonoText>
          {isBuy ? "Al" : "Sat"}
          {hisseData?.name}
        </MonoText>
        <MonoText>
          1{hisseData?.symbol}
          {" ="}
          {hisseData?.currentPrice}
        </MonoText>
      </View>
      <View style={styles.image}>
        <Image source={image} />
      </View>
      <Text>ExchangeScreen</Text>
    </View>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  image: {
    marginTop: 45,

    resizeMode: "contain",
  },
});
