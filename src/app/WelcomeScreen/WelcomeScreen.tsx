import { StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Text, View } from "@/src/components/Themed";

const image = require("../../../assets/images/Saly-1.png");
const google = require("../../../assets/google-button.png");

const WelcomeScreen = () => {
  const signInGoogle = () => {};

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ marginTop: 5, justifyContent: "center", alignItems: "center" }}
      >
        <Image style={styles.image} source={image} />
        <Text style={styles.header1}>Borsa Guru'ya Hoşgeldiniz</Text>
        <Text style={styles.header2}>
          Size tanımlanmış olan 1000 Ø(=TL)* ile yatırımınıza başlayın
        </Text>
        <View style={{ top: 110 }}>
          <Pressable onPress={signInGoogle}>
            <Image style={styles.google} source={google} />
          </Pressable>
        </View>
      </View>

      <Text
        style={{
          fontSize: 7,
          textAlign: "center",
          marginTop: "auto",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>* </Text>1 Ø (Guru)
        <Text style={{ fontWeight: "bold" }}>Sanal</Text> bir para
        olup,kullanılma amacı tamamen uygulamadaki simülasyon içindir.
        <Text style={{ fontWeight: "bold" }}>Herhangi bir değeri yoktur.</Text>
      </Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    height: "40%",
    aspectRatio: 1,
    marginBottom: 10,
  },
  header1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },
  header2: {
    fontSize: 20,
    textAlign: "center",
    color: "#707070",
  },
  google: {
    width: 300,
    height: 90,
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 10,
    resizeMode: "contain",
  },
});
