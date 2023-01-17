import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setAttribute } from "../../../redux/Slices/accountSlice";

const LookingForScreen = (props) => {
  const dispatch = useDispatch();
  const { value } = props.route.params;
  const [looking, setLooking] = useState(value);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Ne için buradasın?</Text>
          <Text>Ne aradığını seç daha uygun eşleşmeler yakala...</Text>

          <View>
            <TouchableOpacity
              onPress={() => setLooking("Uzun Süreli İlişki")}
              style={styles.buttonView}
            >
              <Text>Uzun Süreli İlişki</Text>
              <RadioButton
                value="LongDated"
                status={
                  looking === "Uzun Süreli İlişki" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("Uzun Süreli İlişki")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLooking("Kısa Süreli İlişki")}
              style={styles.buttonView}
            >
              <Text>Kısa Süreli İlişki</Text>
              <RadioButton
                value="ShortDated"
                status={
                  looking === "Kısa Süreli İlişki" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("Kısa Süreli İlişki")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLooking("Sadece Eğlence")}
              style={styles.buttonView}
            >
              <Text>Sadece Eğlence</Text>
              <RadioButton
                value="JustForFun"
                status={looking === "Sadece Eğlence" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("Sadece Eğlence")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLooking("Arkadaşlık")}
              style={styles.buttonView}
            >
              <Text>Arkadaşlık</Text>
              <RadioButton
                value="Friendship"
                status={looking === "Arkadaşlık" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("Arkadaşlık")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLooking("Henüz Karar Vermedim")}
              style={styles.buttonView}
            >
              <Text>Henüz Karar Vermedim</Text>
              <RadioButton
                value="NotSure"
                status={
                  looking === "Henüz Karar Vermedim" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("Henüz Karar Vermedim")}
              />
            </TouchableOpacity>
            <View>
              <Button
                onPress={() => {
                  dispatch(setAttribute({ looking: looking }));
                  navigation.goBack();
                }}
                text="Kaydet ve çık"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default LookingForScreen;
