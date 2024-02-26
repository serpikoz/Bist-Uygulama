import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  Touchable,
  TouchableOpacity,
  Pressable,
  PixelRatio,
} from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Stack } from "expo-router";
import { useRef, useState, useEffect } from "react";

import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
  chartTypes,
} from "react-native-gifted-charts";
import { VictoryPie } from "victory";
import { COLORS, SIZES, FONTS } from "@/src/constants";
import Colors from "@/src/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import iconSet from "@expo/vector-icons/build/FontAwesome5";
import React from "react";

import { runTiming, useFont, useValue } from "@shopify/react-native-skia";
import { MonoText } from "@/src/components/StyledText";

import Swipe from "../SwipeHome/Swipe";

const RADIUS = PixelRatio.roundToNearestPixel(130);
const STROKE_WIDTH = 12;

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const now = new Date().toLocaleDateString("tr-TR", options);

export default function TabOneScreen({ navigation }) {
  const [viewMode, setViewMode] = React.useState("chart");
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [showMoreToggle, setShowMoreToggle] = React.useState(false);
  function Header() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
        }}
      >
        <View>
          <Text style={{ fontSize: 26 }}>Güncel Durum</Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>Özet</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            alignItems: "center",
            top: 20,
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
            <Text style={{ lineHeight: 20, fontSize: 16 }}>{now}</Text>
            <Text style={{ color: COLORS.darkgray, top: 5, fontSize: 15 }}>
              Geçen Aydan %50 Kar <Text style={{ fontSize: 20 }}>⤳</Text>
            </Text>
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

        {/* Buttons */}
      </View>
    );
  }

  // function Chart() {
  //   const percentageComplete = 1;
  //   const animationState = useValue(0);
  //   const font = useFont(require("../../../assets/fonts/Roboto-Light.ttf"), 60);
  //   const smallerFont = useFont(
  //     require("../../../assets/fonts/Roboto-Light.ttf"),
  //     25
  //   );
  //   const [animationKey, setAnimationKey] = useState(0); // State'i tanımla

  //   useEffect(() => {
  //     const animationChart = () => {
  //       animationState.current = 0;
  //       runTiming(animationState, 1, {
  //         duration: 2700,
  //         easing: Easing.inOut(Easing.cubic),
  //       });
  //     };

  //     animationChart();

  //     return () => {
  //       animationState.current = 1;
  //     };
  //   }, [navigation]);

  //   const restartAnimation = () => {
  //     setAnimationKey(animationKey + 1);
  //   };

  //   if (!font || !smallerFont) {
  //     return <View />;
  //   }
  //   return (
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <View style={styles.donutChartContainer}>
  //         <DonutChart
  //           key={animationKey} // Key'i state ile değiştir
  //           radius={RADIUS}
  //           strokeWidth={STROKE_WIDTH}
  //           percentageComplete={animationState}
  //           targetPercentage={percentageComplete}
  //           font={font}
  //           smallerFont={smallerFont}
  //         />
  //       </View>
  //       <View
  //         style={{
  //           position: "absolute",
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <Text style={{ marginBottom: 2, fontSize: 24, fontWeight: "bold" }}>
  //           TOPLAM KAZANÇ
  //         </Text>
  //         <Text style={{ marginTop: 2, fontSize: 28, fontWeight: "bold" }}>
  //           <MonoText>75521</MonoText> Ø
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      {/* **************** if kullanıcı giriş yapmadıysa  ************/}

      <Header />
      <CategoryHeaderSection />
      {/* <Chart /> */}
      <Swipe />
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
  donutChartContainer: {
    height: RADIUS * 2,
    width: RADIUS * 2,
  },
});
