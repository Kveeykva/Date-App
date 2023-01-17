import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";

const SmokeScreen = (props) => {
  const [education, setEducation] = useState();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Ne sıklıkla sigara içersin?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setEducation("Social")}
              style={styles.buttonView}
            >
              <Text>Sosyal İçici</Text>
              <RadioButton
                value="Social"
                status={education === "Social" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("Social")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("Regular")}
              style={styles.buttonView}
            >
              <Text>Arada Sırada</Text>
              <RadioButton
                value="Regular"
                status={education === "Regular" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("UniversRegularityStudent")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("Never")}
              style={styles.buttonView}
            >
              <Text>Asla</Text>
              <RadioButton
                value="Never"
                status={education === "Never" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("Never")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("TryToQuit")}
              style={styles.buttonView}
            >
              <Text>Bırakmaya Çalışıyor</Text>
              <RadioButton
                value="TryToQuit"
                status={education === "TryToQuit" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("TryToQuit")}
              />
            </TouchableOpacity>
            <View>
              <Button text="Kaydet ve çık" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default SmokeScreen;
