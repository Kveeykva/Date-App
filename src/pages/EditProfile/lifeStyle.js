import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./myBasicsStyles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LifeStyle = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.title}>Yaşam Tarzı</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Drink")}
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="beer"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Alkol Kullanımı</Text>

          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Smoke")}
          style={styles.myBasics}
        >
          <MaterialIcons
            name="smoking-rooms"
            size={20}
            color="black"
            style={styles.iconView}
          />
          <Text style={styles.myBasicsText}>Sigara Kullanımı</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Spor")}
          style={styles.myBasics}
        >
          <FontAwesome5
            style={styles.iconView}
            name="dumbbell"
            size={15}
            color="black"
          />
          <Text style={styles.myBasicsText}>Spor</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Pet")}
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="paw"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Evcil Hayvan</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("LookingFor")}
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="search"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Buradayım Çünkü..</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Politics")}
          style={styles.myBasics}
        >
          <MaterialIcons
            style={styles.iconView}
            name="how-to-vote"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Siyaset</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LifeStyle;
