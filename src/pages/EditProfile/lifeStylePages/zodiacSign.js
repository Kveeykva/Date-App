import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";

const ZodiacSignScreen = (props) => {
  const [zodiac, setZodiac] = useState();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Burcunu Seç</Text>

          <View>
            <TouchableOpacity
              onPress={() => setZodiac("Koç")}
              style={styles.buttonView}
            >
              <Text>Koç</Text>
              <RadioButton
                value="aries"
                status={zodiac === "Koç" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Koç")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Boğa")}
              style={styles.buttonView}
            >
              <Text>Boğa</Text>
              <RadioButton
                value="taurus"
                status={zodiac === "Boğa" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Boğa")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("İkizler")}
              style={styles.buttonView}
            >
              <Text>İkizler</Text>
              <RadioButton
                value="gemini"
                status={zodiac === "İkizler" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("İkizler")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Yengeç")}
              style={styles.buttonView}
            >
              <Text>Yengeç</Text>
              <RadioButton
                value="cancer"
                status={zodiac === "Yengeç" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Yengeç")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Aslan")}
              style={styles.buttonView}
            >
              <Text>Aslan</Text>
              <RadioButton
                value="leo"
                status={zodiac === "Aslan" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Aslan")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Başak")}
              style={styles.buttonView}
            >
              <Text>Başak</Text>
              <RadioButton
                value="virgo"
                status={zodiac === "Başak" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Başak")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Terazi")}
              style={styles.buttonView}
            >
              <Text>Terazi</Text>
              <RadioButton
                value="libra"
                status={zodiac === "Terazi" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Terazi")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Akrep")}
              style={styles.buttonView}
            >
              <Text>Akrep</Text>
              <RadioButton
                value="scorpio"
                status={zodiac === "Akrep" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Akrep")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Yay")}
              style={styles.buttonView}
            >
              <Text>Yay</Text>
              <RadioButton
                value="pisces"
                status={zodiac === "Yay" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Yay")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Oğlak")}
              style={styles.buttonView}
            >
              <Text>Oğlak</Text>
              <RadioButton
                value="aries"
                status={zodiac === "Oğlak" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Oğlak")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Kova")}
              style={styles.buttonView}
            >
              <Text>Kova</Text>
              <RadioButton
                value="aries"
                status={zodiac === "Kova" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Kova")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setZodiac("Balık")}
              style={styles.buttonView}
            >
              <Text>Balık</Text>
              <RadioButton
                value="aries"
                status={zodiac === "Balık" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setZodiac("Balık")}
              />
            </TouchableOpacity>
            <View></View>
            <View>
              <Button text="Kaydet ve çık" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ZodiacSignScreen;
