import { StyleSheet, FlatList, ActivityIndicator, Image } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Stack } from "expo-router";

import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from "react-native-gifted-charts";
import { VictoryPie } from "victory";
import { COLORS, SIZES, FONTS } from "@/src/constants";
import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const image = require("../../../assets/images/Saly-1.png");

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabOneScreen() {
  function Header() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 26 }}>Güncel Durum</Text>
          <Text style={{ color: COLORS.darkgray, fontSize: 18, marginTop: 10 }}>
            Özet
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.lightGray,
              height: 50,
              width: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
              }}
            >
              <TabBarIcon name="calendar" color="gray" />
            </View>
          </View>

          <View style={{ marginLeft: SIZES.padding }}>
            <Text style={{ color: "white", lineHeight: 20, fontSize: 16 }}>
              18 Şubat 2024
            </Text>
            <Text style={{ color: COLORS.darkgray }}>Geçen Aydan %50 Kar </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* **************** if kullanıcı giriş yapmadıysa  ************/}
      {/* <Image style={styles.image} source={image} />
      <Text style={styles.header1}>Borsa Guru'ya Hoşgeldiniz</Text>
      <Text style={styles.header2}>
        Size tanımlanmış olan 1000 TL ile yatırımınıza başlayın
      </Text> */}
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
