import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setAttribute } from "../../../redux/Slices/accountSlice";

const DrinkScreen = (props) => {
  const dispatch = useDispatch();
  const { value } = props.route.params;
  const [drink, setDrink] = useState(value);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Ne sıklıkla alkol içersin?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setDrink("Asla")}
              style={styles.buttonView}
            >
              <Text>Asla</Text>
              <RadioButton
                value="Never"
                status={drink === "Asla" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("Asla")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDrink("Sıklıkla")}
              style={styles.buttonView}
            >
              <Text>Sık Sık</Text>
              <RadioButton
                value="Frequently"
                status={drink === "Sıklıkla" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("Sıklıkla")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDrink("Nadiren")}
              style={styles.buttonView}
            >
              <Text>Nadiren</Text>
              <RadioButton
                value="Rarely"
                status={drink === "Nadiren" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("Nadiren")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDrink("Özel Günlerde")}
              style={styles.buttonView}
            >
              <Text>Özel Günlerde</Text>
              <RadioButton
                value="SpecialDays"
                status={drink === "Özel Günlerde" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("Özel Günlerde")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDrink("Çoğu Gece")}
              style={styles.buttonView}
            >
              <Text>Çoğu Gece</Text>
              <RadioButton
                value="MostNights"
                status={drink === "Çoğu Gece" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("Çoğu Gece")}
              />
            </TouchableOpacity>

            <View>
              <Button
                onPress={() => {
                  dispatch(setAttribute({ drink: drink }));
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
export default DrinkScreen;
