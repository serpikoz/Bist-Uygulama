import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { MonoText } from "../components/StyledText";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Use a light status bar on iOS to account for the black space above the modal */}

        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

        {/* Borsa Guru Nedir  */}

        <View style={{ borderBottomWidth: 3, borderColor: "#47315a" }}>
          <Text style={styles.headerfirst}>Borsa Guru Nedir ?</Text>
          <Text style={styles.first}>
            Borsa dünyasına adım atmak isteyenler için tasarlanmış bu uygulama,
            gerçek para kullanmadan hisse senetlerinin değerlerindeki artış ve
            azalışı izlemenize olanak tanıyor.
          </Text>
        </View>

        {/* Neden Biz */}

        <View style={{ borderBottomWidth: 3, borderColor: "#47315a" }}>
          <Text style={styles.headerfirst}>Neden Biz ?</Text>
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
            <MonoText style={{ fontWeight: "bold" }}>👍Risk Yok: </MonoText>
            Uygulamamızda, gerçek para kullanmadan sanal bir borsa deneyimi
            yaşarsınız.Bu sayede, finansal kararlar alırken risk almadan deneyim
            kazanabilirsiniz.
          </Text>
        </View>

        {/* Kayıt Olma Yeri */}

        <View>
          <Text style={styles.headerfirst}>Nasıl Kullanılır ?</Text>
          <Text style={styles.two}>
            <MonoText style={{ fontWeight: "bold" }}>1-Kayıt Olun: </MonoText>
            Borsa dünyasını keşfetmek isteyenler için mükemmel bir öğrenme
            platformu sunuyoruz. Uygulamamızı kullanarak, finansal piyasalar
            hakkında daha fazla bilgi edinebilir ve yatırım stratejilerinizi
            geliştirebilirsiniz
          </Text>
          <Text style={styles.two}>
            <MonoText style={{ fontWeight: "bold" }}>
              2-Sanal Bakiye Alın:{" "}
            </MonoText>
            Uygulamamızda, gerçek para kullanmadan sanal bir borsa deneyimi
            yaşarsınız.Bu sayede, finansal kararlar alırken risk almadan deneyim
            kazanabilirsiniz.
          </Text>
          <Text style={styles.two}>
            <MonoText style={{ fontWeight: "bold" }}>
              3-Hisse Senetleri Satın Alın:{" "}
            </MonoText>
            Uygulamamızda, gerçek para kullanmadan sanal bir borsa deneyimi
            yaşarsınız.Bu sayede, finansal kararlar alırken risk almadan deneyim
            kazanabilirsiniz.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 3,
    marginVertical: -25,
  },

  headerfirst: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  first: {
    marginTop: 8,
    fontSize: 16,
    padding: 8,
    textAlign: "center",
    lineHeight: 20,
    borderBottomWidth: 5,
    borderBottomColor: "#fff",
  },

  two: {
    fontSize: 16,
    padding: 8,
    lineHeight: 20,
    borderBottomWidth: 5,
    borderBottomColor: "#fff",
    textAlign: "left",
  },
});
