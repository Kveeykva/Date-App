import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";

const GoldPremium = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text
          onPress={() => {
            navigation.navigate("Profile");
          }}
          style={styles.goldText}
        >
          Gold Üyelik fırsatlarından
        </Text>{" "}
        yararlanmak için satın al.
      </Text>
      <Image
        style={styles.image}
        source={require("../../../assets/gold_uyelik.png")}
      />
      <Button
        customStyle={styles.button}
        text="Gold Üyelik Satın Al"
        onPress={() => navigation.navigate("Payment")}
      />
    </View>
  );
};
export default GoldPremium;
