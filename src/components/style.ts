import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.tint,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  symbol: {
    color: "#6b6b6b",
  },
  amount: {},
  valueTL: {
    fontWeight: "bold",
  },
});
