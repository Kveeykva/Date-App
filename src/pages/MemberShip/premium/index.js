import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";

const NormalPremium = (props) => {
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
          Premium'un fırsatlarından
        </Text>{" "}
        yararlanmak için satın al.
      </Text>
      <Image
        style={styles.image}
        source={require("../../../assets/premium.png")}
      />
      <Button
        customStyle={styles.button}
        text="Premium Üyelik Satın Al"
        onPress={() => navigation.navigate("Payment")}
      />
    </View>
  );
};
export default NormalPremium;
