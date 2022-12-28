import React from "react";
import { View, Text } from "react-native";
import styles from "./contentStyles";

const BottomSheetContent = (props) => {
  const { text } = props;
  return (
    <View>
      <Text> {text} </Text>
    </View>
  );
};
export default BottomSheetContent;
