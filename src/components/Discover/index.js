import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const Discover = (props) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.discoverText}>DISCOVER</Text>
        <View style={styles.locationContainer}>
          <FontAwesome name="map-marker" style={styles.Icon} />
          <Text style={styles.cityText}>Deneme, Şehir</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default Discover;
