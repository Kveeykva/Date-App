import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Box = (props) => {
  const { text, title, customText, customTitle } = props;
  return (
    <View>
      <Text style={[styles.title, customTitle]}>{title}</Text>
      <Text style={[styles.text, customText]}>{text}</Text>
    </View>
  );
};
export default Box;
