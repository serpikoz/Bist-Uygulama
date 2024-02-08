import { Text, View } from "./Themed";
import { StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { MonoText } from "./StyledText";
import { Link } from "expo-router";
import { useMutation, gql } from "@apollo/client";

const mutation = gql`
  mutation MyMutation($symbol: String!, $user_id: String!) {
    insertFavorites(symbol: $symbol, user_id: $user_id) {
      id
      symbol
      user_id
    }
  }
`;

type Hisse = {
  name: string;
  symbol: string;
  percent_change: string;
  close: string;
};

type StockListItem = {
  hisse: Hisse;
};

export default function StockListItem({ hisse }: StockListItem) {
  const [runMutation] = useMutation(mutation, {
    variables: {
      user_id: "vadim",
      symbol: hisse.symbol,
    },
  });

  const change = Number.parseFloat(hisse.percent_change);

  const onFavoritesPress = () => {
    runMutation();
  };

  return (
    <Link href={`/${hisse.symbol}`} asChild>
      <Pressable style={styles.container}>
        {/* {Left Container} */}
        <View style={{ flex: 1, gap: 5 }}>
          <Text style={styles.symbol}>
            {hisse.symbol}{" "}
            <AntDesign
              onPress={onFavoritesPress}
              name="staro"
              size={18}
              color="gray"
            />
          </Text>
          <Text style={{ color: "gray" }}>{hisse.name}</Text>
        </View>
        {/* {Right Container} */}

        <View style={{ alignItems: "flex-end" }}>
          <MonoText>{Number.parseFloat(hisse.close).toFixed(1)} ₺</MonoText>
          <MonoText style={{ color: change > 0 ? "green" : "red" }}>
            {change > 0 ? "+" : ""}
            {change.toFixed(1)}%
          </MonoText>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  symbol: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});
