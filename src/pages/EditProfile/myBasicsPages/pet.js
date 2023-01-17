import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";

const PetScreen = (props) => {
  const [pet, setPet] = useState();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Evcil hayvanın var mı?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setPet("Cat")}
              style={styles.buttonView}
            >
              <Text>Kedi</Text>
              <RadioButton
                value="Cat"
                status={pet === "Cat" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Cat")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("Dog")}
              style={styles.buttonView}
            >
              <Text>Köpek</Text>
              <RadioButton
                value="Dog"
                status={pet === "Dog" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Dog")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("Bird")}
              style={styles.buttonView}
            >
              <Text>Kuş</Text>
              <RadioButton
                value="Bird"
                status={pet === "Bird" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Bird")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("Fish")}
              style={styles.buttonView}
            >
              <Text>Balık</Text>
              <RadioButton
                value="Fish"
                status={pet === "Fish" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Fish")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("Don't Like")}
              style={styles.buttonView}
            >
              <Text>Hoşlanmam</Text>
              <RadioButton
                value="Don't Like"
                status={pet === "Don't Like" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Don't Like")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("More")}
              style={styles.buttonView}
            >
              <Text>Birden Fazla Evcil Hayvanım Var</Text>
              <RadioButton
                value="More"
                status={pet === "More" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("More")}
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
export default PetScreen;
