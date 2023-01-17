import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./myBasicsStyles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const MyBasics = (props) => {
  const gender = useSelector((state) => state.user);
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.title}>Temel Bilgiler</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Gender")}
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="body"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Cinsiyet</Text>
          <Text style={styles.rightText}>{gender}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Zodiac")}
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="aperture"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Burç</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Education")}
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="school"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Eğitim</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Work")}
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="business"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>İş</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Location")}
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="location"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Konum</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("HomeTown")}
          style={styles.myBasics}
        >
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
