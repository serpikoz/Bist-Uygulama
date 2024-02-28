import { StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Text, View } from "@/src/components/Themed";

const image = require("../../../assets/images/Saly-1.png");
const google = require("../../../assets/google-button.png");
import { signInWithRedirect } from "aws-amplify/auth";
import { Link } from "expo-router";
import SignIn from "../Auth/SignIn";

import SignUp from "../Auth/SignUp";

const WelcomeScreen = () => {
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
          <Pressable>
            <Link href={"/Auth/SignUp"}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  paddingVertical: 15,
                  paddingHorizontal: 95,
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  Kayıt Ol
                </Text>
              </View>
            </Link>
          </Pressable>

          <View style={{ top: 10 }}>
            <Pressable>
              <Link href={"/Auth/SignIn"}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    paddingVertical: 15,
                    paddingHorizontal: 95,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ fontSize: 17 }}>Giriş Yap</Text>
                </View>
              </Link>
            </Pressable>
          </View>
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
