/*
Inspiration: https://dribbble.com/shots/3894781-Urbanears-Headphones
Twitter: http://twitter.com/mironcatalin
GitHub: http://github.com/catalinmiron
Video Tutorial: https://youtu.be/cGTD4yYgEHc
Link to example: https://github.com/catalinmiron/react-native-headphones-carousel
*/

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  ImageRequireSource,
  Easing,
  PixelRatio,
} from "react-native";
import type { PagerViewOnPageScrollEventData } from "react-native-pager-view";
import PagerView from "react-native-pager-view";
import { DonutChart } from "../Charts/DonutCharts";
import {
  ColorType,
  center,
  runTiming,
  useFont,
  useValue,
} from "@shopify/react-native-skia";
import { MonoText } from "@/src/components/StyledText";
import { COLORS } from "@/src/constants";
import Colors from "@/src/constants/Colors";

const RADIUS = PixelRatio.roundToNearestPixel(130);
const STROKE_WIDTH = 12;

const data = [
  {
    type: "Toplam",

    heading: "Vibrant colors",
    description: "Four on-trend colorways to seamlessly suit your style.",
    key: "first",
    color: "#db9efa",
  },
  {
    type: "THYAO",

    heading: "Redefined sound",
    description: "A bold statement tuned to perfection.",
    key: "second",
    color: "#db9efa",
  },
  {
    type: "BIMAS",

    heading: "Great quality",
    description:
      "An Urbanears classic! Listen-all-day fit. Striking the perfect balance of effortless technology",
    key: "third",
    color: "#999",
  },
  {
    type: "IBM",

    heading: "From Sweden",
    description:
      "The “Plattan” in Plattan headphones is Swedish for “the slab.”",
    key: "fourth",
    color: "#a1e3a1",
  },
];
const { width, height } = Dimensions.get("window");
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 22;
const CIRCLE_SIZE = width * 0.6;

const Circle = ({
  scrollOffsetAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
}) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
      {data.map(({ color, type }, index) => {
        const inputRange = [0, 0.5, 0.99];
        const inputRangeOpacity = [0, 0.5, 0.99];
        const scale = scrollOffsetAnimatedValue.interpolate({
          inputRange,
          outputRange: [1, 0, 1],
          extrapolate: "clamp",
        });

        const opacity = scrollOffsetAnimatedValue.interpolate({
          inputRange: inputRangeOpacity,
          outputRange: [0.2, 0, 0.2],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: color,
                opacity,
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const Ticker = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, data.length];
  const translateY = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, data.length * -TICKER_HEIGHT],
  });
  return (
    <View style={styles.tickerContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map(({ type }, index) => {
          return (
            <Text key={index} style={styles.tickerText}>
              {type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Item = ({
  imageUri,
  heading,
  description,
  scrollOffsetAnimatedValue,
}: {
  imageUri: ImageRequireSource;
  description: string;
  heading: string;
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, 0.5, 0.99];
  const inputRangeOpacity = [0, 0.5, 0.99];
  const scale = scrollOffsetAnimatedValue.interpolate({
    inputRange,
    outputRange: [1, 0, 1],
  });

  const opacity = scrollOffsetAnimatedValue.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [1, 0, 1],
  });

  return (
    <View style={styles.itemStyle}>
      <Animated.Image
        source={imageUri}
        style={[
          styles.imageStyle,
          {
            transform: [{ scale }],
          },
        ]}
      />
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity,
            },
          ]}
        >
          {heading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            {
              opacity,
            },
          ]}
        >
          {description}
        </Animated.Text>
      </View>
    </View>
  );
};

const Pagination = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, data.length];
  const translateX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, data.length * DOT_SIZE],
  });

  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: "absolute",
            transform: [{ translateX: translateX }],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot, { backgroundColor: item.color }]}
            />
          </View>
        );
      })}
    </View>
  );
};

function Chart() {
  const percentageComplete = 1;
  const animationState = useValue(0);
  const font = useFont(require("../../../assets/fonts/Roboto-Light.ttf"), 60);
  const smallerFont = useFont(
    require("../../../assets/fonts/Roboto-Light.ttf"),
    25
  );
  const [animationKey, setAnimationKey] = useState(0); // State'i tanımla

  useEffect(() => {
    const animationChart = () => {
      animationState.current = 0;
      runTiming(animationState, 1, {
        duration: 2700,
        easing: Easing.inOut(Easing.cubic),
      });
    };

    animationChart();

    return () => {
      animationState.current = 1;
    };
  }, [navigator]);

  const restartAnimation = () => {
    setAnimationKey(animationKey + 1);
  };

  if (!font || !smallerFont) {
    return <View />;
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 167,
      }}
    >
      <View style={styles.donutChartContainer}>
        <DonutChart
          key={animationKey} // Key'i state ile değiştir
          radius={RADIUS}
          strokeWidth={STROKE_WIDTH}
          percentageComplete={animationState}
          targetPercentage={percentageComplete}
          font={font}
          smallerFont={smallerFont}
        />
      </View>
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "darkgreen",
            marginBottom: 8,
          }}
        >
          KAZANÇ
        </Text>
        <Text
          style={{
            alignContent: "center",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          <MonoText style={{ alignContent: "center", alignItems: "center" }}>
            2421Ø
          </MonoText>
        </Text>
        <Text style={{ top: 30, fontSize: 18 }}>← Kaydır →</Text>
      </View>
    </View>
  );
}

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export default function Swipe() {
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Circle scrollOffsetAnimatedValue={scrollOffsetAnimatedValue} />
      <Chart />
      <AnimatedPagerView
        initialPage={0}
        style={{ width: "100%", height: "100%" }}
        onPageScroll={Animated.event<PagerViewOnPageScrollEventData>(
          [
            {
              nativeEvent: {
                offset: scrollOffsetAnimatedValue,
                position: positionAnimatedValue,
              },
            },
          ],
          {
            listener: ({ nativeEvent: { offset, position } }) => {
              console.log(`Position: ${position} Offset: ${offset}`);
            },
            useNativeDriver: true,
          }
        )}
      >
        {data.map((item, index) => (
          <View collapsable={false} key={index}></View>
        ))}
      </AnimatedPagerView>

      <Pagination
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      />

      <Ticker
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: "contain",
    flex: 1,
  },
  textContainer: {
    alignItems: "flex-start",
    alignSelf: "flex-end",
    flex: 0.5,
  },
  heading: {
    color: "#444",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 5,
  },
  description: {
    color: "#ccc",
    fontWeight: "600",
    textAlign: "left",
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },

  pagination: {
    position: "absolute",
    right: 20,
    bottom: 20,
    flexDirection: "row",
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  donutChartContainer: {
    height: RADIUS * 2,
    width: RADIUS * 2,
  },
  tickerContainer: {
    position: "absolute",
    top: 40,
    left: 20,
    overflow: "hidden",
    height: TICKER_HEIGHT,
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: "uppercase",
    fontWeight: "800",
    color: Colors.dark ? "#fff" : "#000",
  },

  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: "absolute",
    top: "13.4%",
  },
});
