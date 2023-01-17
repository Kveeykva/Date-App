import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";

const PoliticsScreen = (props) => {
  const [politics, setPolitics] = useState();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Siyasi görüşün nedir?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setPolitics("Apolitical")}
              style={styles.buttonView}
            >
              <Text>Apolitik</Text>
              <RadioButton
                value="Apolitical"
                status={politics === "Apolitical" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPolitics("Apolitical")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPolitics("Conservative")}
              style={styles.buttonView}
            >
              <Text>Muhafazakâr</Text>
              <RadioButton
                value="Conservative"
                status={politics === "Conservative" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPolitics("Conservative")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPolitics("Liberal")}
              style={styles.buttonView}
            >
              <Text>Liberal</Text>
              <RadioButton
                value="Liberal"
                status={politics === "Liberal" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPolitics("Liberal")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPolitics("SocialDemocrat")}
              style={styles.buttonView}
            >
              <Text>Demokrat</Text>
              <RadioButton
                value="SocialDemocrat"
                status={politics === "SocialDemocrat" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPolitics("SocialDemocrat")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPolitics("Nationalist")}
              style={styles.buttonView}
            >
              <Text>Milliyetçi</Text>
              <RadioButton
                value="Nationalist"
                status={politics === "Nationalist" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPolitics("Nationalist")}
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
export default PoliticsScreen;
