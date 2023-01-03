import React, { useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./editProfileStyles";

function EditProfile(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>deneme31</Text>
    </SafeAreaView>
  );
}

export default EditProfile;
