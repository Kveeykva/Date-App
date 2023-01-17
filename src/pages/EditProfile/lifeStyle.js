import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./myBasicsStyles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { selectAccount } from "../../redux/Slices/accountSlice";

const LifeStyle = (props) => {
  const navigation = useNavigation();
  const account = useSelector(selectAccount);

  return (
    <View>
      <Text style={styles.title}>Yaşam Tarzı</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.drink,
              type: "DRINK",
              headerTitle: "Alkol Kullanımı",
            })
          }
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="beer"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Alkol Kullanımı</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.drink}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.smoke,
              type: "SMOKE",
              headerTitle: "Sigara Kullanımı",
            })
          }
          style={styles.myBasics}
        >
          <MaterialIcons
            name="smoking-rooms"
            size={20}
            color="black"
            style={styles.iconView}
          />
          <Text style={styles.myBasicsText}>Sigara Kullanımı</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.smoke}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.spor,
              type: "SPOR",
              headerTitle: "Spor",
            })
          }
          style={styles.myBasics}
        >
          <FontAwesome5
            style={styles.iconView}
            name="dumbbell"
            size={15}
            color="black"
          />
          <Text style={styles.myBasicsText}>Spor</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.spor}</Text>

          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.pet,
              type: "PET",
              headerTitle: "Evcil Hayvan",
            })
          }
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="paw"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Evcil Hayvan</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.pet}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.looking,
              type: "LOOKING_FOR",
              headerTitle: "Buradayım Çünkü..",
            })
          }
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="search"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Buradayım Çünkü..</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.looking}</Text>

          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.politics,
              type: "POLITICS",
              headerTitle: "Siyasi Görüş",
            })
          }
          style={styles.myBasics}
        >
          <MaterialIcons
            style={styles.iconView}
            name="how-to-vote"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Siyaset</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.politics}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LifeStyle;
