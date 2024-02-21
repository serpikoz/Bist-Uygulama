import { Text, View } from "./Themed";
import { StyleSheet, Pressable, Alert, Touchable } from "react-native";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { MonoText } from "./StyledText";
import { Link } from "expo-router";
import { useMutation, gql } from "@apollo/client";
import client from "../apollo/client";
import { TouchableOpacity } from "react-native-gesture-handler";

const CHECK_FAVORITE_QUERY = gql`
  query CheckFavorite($symbol: String!, $user_id: String!) {
    favoritesByUser_idAndSymbol(user_id: $user_id, symbol: $symbol) {
      id
    }
  }
`;

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

const isFavorite = async (symbol: string, userId: string) => {
  try {
    const { data } = await client.query({
      query: CHECK_FAVORITE_QUERY,
      variables: { symbol, user_id: userId },
    });
    return data.favoritesByUser_idAndSymbol.length > 0;
  } catch (error) {
    console.error("Favori kontrolü yapılırken bir hata oluştu:", error);
    return false;
  }
};

export default function StockListItem({ hisse }: StockListItem) {
  const [runMutation] = useMutation(mutation, {
    variables: {
      user_id: "vadim",
      symbol: hisse.symbol,
    },
  });

  const change = Number.parseFloat(hisse.percent_change);

  const onFavoritesPress = async () => {
    const isAlreadyFavorite = await isFavorite(hisse.symbol, "vadim");

    if (isAlreadyFavorite) {
      Alert.alert("Zaten favoriye eklenmiş!");
    } else {
      console.log("Yeni eklendi");
      runMutation();
    }
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
          <View style={{ position: "absolute", right: 70, top: 10 }}>
            <TouchableOpacity>
              <View
                style={{
                  padding: 2,
                  borderWidth: 2,
                  borderColor: "blue",
                  borderRadius: 4,
                }}
              >
                <Text style={{ paddingHorizontal: 4 }}>AL</Text>
              </View>
            </TouchableOpacity>
          </View>
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
