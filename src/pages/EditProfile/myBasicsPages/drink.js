import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";

const DrinkScreen = (props) => {
  const [drink, setDrink] = useState();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Ne sıklıkla alkol içersin?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setDrink("Never")}
              style={styles.buttonView}
            >
              <Text>Asla</Text>
              <RadioButton
                value="Never"
                status={drink === "Never" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("Never")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDrink("Frequently")}
              style={styles.buttonView}
            >
              <Text>Sık Sık</Text>
              <RadioButton
                value="Frequently"
                status={drink === "Frequently" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("Frequently")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDrink("Rarely")}
              style={styles.buttonView}
            >
              <Text>Nadiren</Text>
              <RadioButton
                value="Rarely"
                status={drink === "Rarely" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("Rarely")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDrink("SpecialDays")}
              style={styles.buttonView}
            >
              <Text>Özel Günlerde</Text>
              <RadioButton
                value="SpecialDays"
                status={drink === "SpecialDays" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("SpecialDays")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setDrink("MostNights")}
              style={styles.buttonView}
            >
              <Text>Çoğu Gece</Text>
              <RadioButton
                value="MostNights"
                status={drink === "MostNights" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setDrink("MostNights")}
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
export default DrinkScreen;
