import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
const IconButton = (props) => {
  const { name, onPress, color, size, style } = props;
  return (
    <TouchableOpacity
      hitSlop={{ top: 35, bottom: 35, left: 50, right: 50 }}
      onPress={onPress}
      style={style}
    >
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
export default IconButton;
