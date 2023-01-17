import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./myBasicsStyles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { selectAccount } from "../../redux/Slices/accountSlice";

const MyBasics = (props) => {
  const account = useSelector(selectAccount);
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.title}>Temel Bilgiler</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.gender,
              type: "GENDER",
              headerTitle: "Cinsiyet",
            })
          }
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="body"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Cinsiyet</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.gender}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.zodiac,
              type: "ZODIAC",
              headerTitle: "Burç",
            })
          }
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="aperture"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Burç</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.zodiac}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.education,
              type: "EDUCATION",
              headerTitle: "Eğitim",
            })
          }
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="school"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Eğitim</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.education}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.work,
              type: "WORK",
              headerTitle: "İş",
            })
          }
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="business"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>İş</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.work}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.location,
              type: "LOCATION",
              headerTitle: "Konum",
            })
          }
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="location"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Konum</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.location}</Text>
          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfileAttributes", {
              value: account.userDetail?.hometown,
              type: "HOMETOWN",
              headerTitle: "Memleket",
            })
          }
          style={styles.myBasics}
        >
          <Ionicons
            style={styles.iconView}
            name="home"
            size={20}
            color="black"
          />
          <Text style={styles.myBasicsText}>Memleket</Text>
          <Text style={styles.rightTexts}>{account.userDetail?.hometown}</Text>

          <Text style={styles.rightText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MyBasics;
