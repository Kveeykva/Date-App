import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";

const BoostPremium = (props) => {
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
          Boost Üyelik fırsatlarından
        </Text>{" "}
        yararlanmak için satın al.
      </Text>
      <Image
        style={styles.image}
        source={require("../../../assets/boost.png")}
      />
      <Button
        customStyle={styles.button}
        text="Boost Üyelik Satın Al"
        onPress={() => navigation.navigate("Payment")}
      />
    </View>
  );
};
export default BoostPremium;
