import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";
import { setAttribute } from "../../../redux/Slices/accountSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SporScreen = (props) => {
  const dispatch = useDispatch();
  const { value } = props.route.params;
  const navigation = useNavigation();
  const [spor, setSpor] = useState(value);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Ne sıklıkla spor yaparsın?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setSpor("Aktif")}
              style={styles.buttonView}
            >
              <Text>Aktif</Text>
              <RadioButton
                value="Active"
                status={spor === "Aktif" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSpor("Aktif")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSpor("Arada Sırada")}
              style={styles.buttonView}
            >
              <Text>Arada Sırada</Text>
              <RadioButton
                value="Sometimes"
                status={spor === "Arada Sırada" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSpor("Arada Sırada")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSpor("Yapmıyor")}
              style={styles.buttonView}
            >
              <Text>Yapmıyorum</Text>
              <RadioButton
                value="Never"
                status={spor === "Yapmıyor" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSpor("Yapmıyor")}
              />
            </TouchableOpacity>

            <View>
              <Button
                onPress={() => {
                  dispatch(setAttribute({ spor: spor }));
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
export default SporScreen;
