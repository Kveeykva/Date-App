import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./myBasicsStyles";
import Button from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";

const MyBasics = (props) => {
  return (
    <View>
      <Text style={styles.title}>Temel Bilgiler</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.myBasics}>
          <Ionicons
            style={styles.iconView}
            name="body"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Cinsiyet</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.myBasics}>
          <Ionicons
            style={styles.iconView}
            name="aperture"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Burç</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.myBasics}>
          <Ionicons
            style={styles.iconView}
            name="school"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Eğitim</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.myBasics}>
          <Ionicons
            style={styles.iconView}
            name="business"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>İş</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.myBasics}>
          <Ionicons
            style={styles.iconView}
            name="location"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Konum</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.myBasics}>
          <Ionicons
            style={styles.iconView}
            name="home"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Memleket</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MyBasics;
