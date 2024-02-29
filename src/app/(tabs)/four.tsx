import React, { useState } from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Stack, useNavigation } from "expo-router";
import { signOut } from "aws-amplify/auth";
import { Auth } from "aws-amplify";

const image = require("../../../assets/images/Saly-16.png");
const image1 = require("../../../assets/images/Saly-17.png");
export default function TabFourScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    id: "1",
    name: "Kadir",
    email: "dasdas@bgaf.com",
    netWorth: 123546,
  });

  const signOut = async () => {
    try {
      // Çıkış işlemi gerçekleştiriliyor...
      // Başarılı çıkış sonrası yönlendirme yapılıyor

      await signOut();

      navigation.navigate("WelcomeScreen/WelcomeScreen");
      console.log(user, "bAŞARILI");
    } catch (error) {
      console.log("Çıkış işleminde bir hata oluştu: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Profil" }} />
      <Image style={styles.image} source={image} />
      <View style={styles.userContainer}>
        <View style={styles.left}>
          <Image style={styles.userImage} source={image1} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.value}>{user.netWorth} Ø</Text>
        </View>
      </View>

      <Pressable
        onPress={signOut}
        style={{ marginTop: "auto", marginBottom: 15 }}
      >
        <View style={{ borderWidth: 1, borderRadius: 5 }}>
          <Text
            style={{ paddingVertical: 4, paddingHorizontal: 4, fontSize: 14 }}
          >
            Çıkış Yap
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 175,
    resizeMode: "contain",
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginVertical: 10,

    width: "95%",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 65,
    height: 65,
    borderRadius: 90,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
});
