import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";
import { setAttribute } from "../../../redux/Slices/accountSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SmokeScreen = (props) => {
  const dispatch = useDispatch();
  const { value } = props.route.params;
  const navigation = useNavigation();
  const [smoke, setSmoke] = useState(value);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Ne sıklıkla sigara içersin?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setSmoke("Sosyal İçici")}
              style={styles.buttonView}
            >
              <Text>Sosyal İçici</Text>
              <RadioButton
                value="Social"
                status={smoke === "Sosyal İçici" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSmoke("Sosyal İçici")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSmoke("Arada Sırada")}
              style={styles.buttonView}
            >
              <Text>Arada Sırada</Text>
              <RadioButton
                value="Regular"
                status={smoke === "Arada Sırada" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSmoke("Arada Sırada")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSmoke("Asla")}
              style={styles.buttonView}
            >
              <Text>Asla</Text>
              <RadioButton
                value="Never"
                status={smoke === "Asla" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSmoke("Asla")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSmoke("Bırakmaya Çalışıyor")}
              style={styles.buttonView}
            >
              <Text>Bırakmaya Çalışıyor</Text>
              <RadioButton
                value="TryToQuit"
                status={
                  smoke === "Bırakmaya Çalışıyor" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSmoke("Bırakmaya Çalışıyor")}
              />
            </TouchableOpacity>
            <View>
              <Button
                onPress={() => {
                  dispatch(setAttribute({ smoke: smoke }));
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
export default SmokeScreen;
