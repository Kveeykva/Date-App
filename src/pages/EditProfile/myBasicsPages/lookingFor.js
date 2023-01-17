import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";

const LookingForScreen = (props) => {
  const [looking, setLooking] = useState();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Ne için buradasın?</Text>
          <Text>Ne aradığını seç daha uygun eşleşmeler yakala...</Text>

          <View>
            <TouchableOpacity
              onPress={() => setLooking("LongDated")}
              style={styles.buttonView}
            >
              <Text>Uzun Süreli İlişki</Text>
              <RadioButton
                value="LongDated"
                status={looking === "LongDated" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("LongDated")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLooking("ShortDated")}
              style={styles.buttonView}
            >
              <Text>Kısa Süreli İlişki</Text>
              <RadioButton
                value="ShortDated"
                status={looking === "ShortDated" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("ShortDated")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLooking("JustForFun")}
              style={styles.buttonView}
            >
              <Text>Sadece Eğlence</Text>
              <RadioButton
                value="JustForFun"
                status={looking === "JustForFun" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("JustForFun")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLooking("Friendship")}
              style={styles.buttonView}
            >
              <Text>Arkadaşlık</Text>
              <RadioButton
                value="Friendship"
                status={looking === "Friendship" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("Friendship")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLooking("NotSure")}
              style={styles.buttonView}
            >
              <Text>Henüz Karar Vermedim</Text>
              <RadioButton
                value="NotSure"
                status={looking === "NotSure" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setLooking("NotSure")}
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
export default LookingForScreen;
