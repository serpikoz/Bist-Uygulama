import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  Touchable,
  TouchableOpacity,
  Pressable,
} from "react-native";
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
import iconSet from "@expo/vector-icons/build/FontAwesome5";

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
          <Text style={{ color: COLORS.darkgray, fontSize: 16, marginTop: 5 }}>
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
              height: 50,
              width: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TabBarIcon name="calendar-o" color="gray" />
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

  function CategoryHeaderSection() {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: SIZES.padding,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Title */}

        <View>
          <Text style={{ color: COLORS.lightBlue, fontSize: 18 }}>
            HİSSELER
          </Text>
          <Text style={{ color: COLORS.lightGray, fontSize: 14 }}>Toplam</Text>
        </View>

        {/* Buttons */}

        <View style={{ flexDirection: "row" }}>
          <Pressable>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.secondary,
                height: 40,
                width: 40,
                borderRadius: 25,
              }}
            >
              <TabBarIcon name="bar-chart" color="black" />
            </View>
          </Pressable>
          <Pressable>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.secondary,
                height: 40,
                width: 40,
                borderRadius: 25,
              }}
            >
              <TabBarIcon name="bars" color="black" />
            </View>
          </Pressable>
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
      <CategoryHeaderSection />
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
