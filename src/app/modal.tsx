import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { MonoText } from "../components/StyledText";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      {/* Use a light status bar on iOS to account for the black space above the modal */}

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      <Text style={styles.headerfirst}>Borsa Guru Nedir ?</Text>
      <View style={{ borderBottomWidth: 3, borderColor: "#47315a" }}>
        <Text style={styles.first}>
          Borsa dünyasına adım atmak isteyenler için tasarlanmış bu uygulama,
          gerçek para kullanmadan hisse senetlerinin değerlerindeki artış ve
          azalışı izlemenize olanak tanıyor.
        </Text>
      </View>
      <Text style={styles.headerfirst}>Neden Biz ?</Text>
      <View style={{ borderBottomWidth: 3, borderColor: "#47315a" }}>
        <Text style={styles.two}>
          <MonoText style={{ fontWeight: "bold" }}>
            💡Öğrenme Fırsatı:{" "}
          </MonoText>
          Borsa dünyasını keşfetmek isteyenler için mükemmel bir öğrenme
          platformu sunuyoruz. Uygulamamızı kullanarak, finansal piyasalar
          hakkında daha fazla bilgi edinebilir ve yatırım stratejilerinizi
          geliştirebilirsiniz
        </Text>
        <Text style={styles.two}>
          <MonoText style={{ fontWeight: "bold" }}>👍 Risk Yok: </MonoText>
          Uygulamamızda, gerçek para kullanmadan sanal bir borsa deneyimi
          yaşarsınız.Bu sayede, finansal kararlar alırken risk almadan deneyim
          kazanabilirsiniz.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerfirst: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 20,
  },
  first: {
    marginTop: 8,
    fontSize: 16,
    padding: 10,
    textAlign: "center",
    lineHeight: 20,
    borderBottomWidth: 5,
    borderBottomColor: "#fff",
  },

  two: {
    fontSize: 16,
    padding: 10,
    lineHeight: 20,
    borderBottomWidth: 5,
    borderBottomColor: "#fff",
    textAlign: "left",
  },
});
