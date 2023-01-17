import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";
import { setAttribute } from "../../../redux/Slices/accountSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PoliticsScreen = (props) => {
  const dispatch = useDispatch();
  const { value } = props.route.params;
  const navigation = useNavigation();
  const [politics, setPolitics] = useState(value);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Siyasi görüşün nedir?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setPolitics("Apolitik")}
              style={styles.buttonView}
            >
              <Text>Apolitik</Text>
              <RadioButton
                value="Apolitical"
                status={politics === "Apolitik" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPolitics("Apolitik")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPolitics("Muhafazakâr")}
              style={styles.buttonView}
            >
              <Text>Muhafazakâr</Text>
              <RadioButton
                value="Conservative"
                status={politics === "Muhafazakâr" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPolitics("Muhafazakâr")}
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
              onPress={() => setPolitics("Demokrat")}
              style={styles.buttonView}
            >
              <Text>Demokrat</Text>
              <RadioButton
                value="SocialDemocrat"
                status={politics === "Demokrat" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPolitics("Demokrat")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPolitics("Milliyetçi")}
              style={styles.buttonView}
            >
              <Text>Milliyetçi</Text>
              <RadioButton
                value="Nationalist"
                status={politics === "Milliyetçi" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPolitics("Milliyetçi")}
              />
            </TouchableOpacity>
            <View>
              <Button
                onPress={() => {
                  dispatch(setAttribute({ politics: politics }));
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
export default PoliticsScreen;
