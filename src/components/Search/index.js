import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import BottomSheet from "../BottomSheet";

const Search = (props) => {
  const { onPress } = props;
  return (
    <SafeAreaView>
      <View>
        <Pressable>
          <FontAwesome
            onPress={onPress}
            name="search"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Search;
