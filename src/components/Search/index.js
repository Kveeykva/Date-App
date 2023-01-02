import React, { useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const Search = (props) => {
  const { onPress } = props;
  return (
    <View>
      <TouchableOpacity
        style={styles.searchContainer}
        hitSlop={{ top: 35, bottom: 35, left: 50, right: 50 }}
        onPress={onPress}
      >
        <FontAwesome name="search" style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
