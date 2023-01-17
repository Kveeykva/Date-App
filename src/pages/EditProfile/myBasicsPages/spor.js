import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";

const SporScreen = (props) => {
  const [spor, setSpor] = useState();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Ne sıklıkla spor yaparsın?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setSpor("Active")}
              style={styles.buttonView}
            >
              <Text>Aktif</Text>
              <RadioButton
                value="Active"
                status={spor === "Active" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSpor("Active")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSpor("Sometimes")}
              style={styles.buttonView}
            >
              <Text>Arada Sırada</Text>
              <RadioButton
                value="Sometimes"
                status={spor === "Sometimes" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSpor("Sometimes")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSpor("Never")}
              style={styles.buttonView}
            >
              <Text>Asla</Text>
              <RadioButton
                value="Never"
                status={spor === "Never" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setSpor("Never")}
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
export default SporScreen;
