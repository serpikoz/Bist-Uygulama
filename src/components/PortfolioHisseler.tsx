import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import { MonoText } from "./StyledText";

export interface PortfolioHisselerProps {
  portfolioHisseler: {
    name: string;
    symbol: string;
    amount: number;
    valueTL: number;
  };
}

const PortfolioHisseler = (props: PortfolioHisselerProps) => {
  const {
    portfolioHisseler: { name, symbol, amount, valueTL },
  } = props;

  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <View style={{ rowGap: 5 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>

      <View style={{ alignItems: "flex-end", rowGap: 5 }}>
        <MonoText style={styles.valueTL}>{valueTL} ₺</MonoText>
        <MonoText style={styles.symbol}>
          {amount} {symbol}
        </MonoText>
      </View>
    </View>
  );
};

export default PortfolioHisseler;
