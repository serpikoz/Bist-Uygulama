import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Touchable,
  Pressable,
} from "react-native";
import { MonoText } from "@/src/components/StyledText";
import { View, Text } from "@/src/components/Themed";

const image = require("../../../assets/images/Saly-31.png");

const ExchangeScreen = () => {
  const [hisseAdet, setHisseAdet] = useState("");
  const [hisseGuruValue, setHisseGuruValue] = useState("");
  const [thyFiyat, setThyFiyat] = useState(275); // THY fiyatı burada tutulacak
  const [guruAdet, setGuruAdet] = useState(""); // Kullanıcının girdiği Guru miktarını tutacak state

  const hisseFiyat = 175;

  useEffect(() => {
    const amount = parseFloat(hisseAdet);
    if (!amount) {
      setHisseAdet("0");
      return;
    }

    setHisseGuruValue((amount * hisseFiyat).toString());
  }, [hisseAdet]);

  useEffect(() => {
    const amount = parseFloat(guruAdet); // Kullanıcının girdiği Guru miktarını al
    if (!amount) {
      setHisseAdet(""); // Eğer giriş geçersizse hisse adetini sıfırla
      return;
    }

    // THYAO hissesi için hesaplama yap
    setHisseAdet((amount / thyFiyat).toString());
  }, [guruAdet, thyFiyat]);

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <Text style={styles.title}>Hisse Al</Text>
        <View>
          <Text style={styles.subtitle}>
            THYAO Güncel Fiyatı: <MonoText>{thyFiyat} ₺</MonoText>
          </Text>
        </View>

        <Text style={styles.subtitletwo}>Bakiyem:5000 Ø </Text>
        <Image source={image} style={styles.image} />
        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="0"
              style={styles.textInput}
              value={hisseAdet}
              onChangeText={setHisseAdet}
              editable={false}
            />

            <Text>THYAO</Text>
          </View>
          <Text style={{ fontSize: 32 }}>=</Text>

          <Pressable style={styles.inputContainer}>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              style={styles.textInput}
              value={guruAdet}
              onChangeText={setGuruAdet}
            />
            <Text>GURU</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "flex-end",
            top: -15,
            marginHorizontal: 10,
          }}
        >
          <MonoText style={{ fontSize: 9 }}>
            1 ₺ (TL) <Text style={{ fontSize: 12 }}>=</Text> 1 Ø (Guru) *
          </MonoText>
        </View>
      </View>
      <View style={{ top: "auto", padding: 17, alignItems: "center" }}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Emir Ver</Text>
        </Pressable>
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
    </Pressable>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  subtitletwo: {
    fontSize: 18,
    color: "#5f5f5f",
  },
  image: {
    resizeMode: "contain",
    height: 220,
    aspectRatio: "auto",
    width: 210,
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#b1b1b1",
    padding: 15,
    flex: 1,
    margin: 20,
  },
  textInput: {
    flex: 1,
    color: "gray",
  },
  button: {
    backgroundColor: "#00b4d8",
    marginTop: "auto",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
