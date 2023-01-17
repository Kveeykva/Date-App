import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";
import { setAttribute } from "../../../redux/Slices/accountSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PetScreen = (props) => {
  const dispatch = useDispatch();
  const { value } = props.route.params;
  const navigation = useNavigation();
  const [pet, setPet] = useState(value);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Evcil hayvanın var mı?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setPet("Kedi")}
              style={styles.buttonView}
            >
              <Text>Kedi</Text>
              <RadioButton
                value="Cat"
                status={pet === "Kedi" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Kedi")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("Köpek")}
              style={styles.buttonView}
            >
              <Text>Köpek</Text>
              <RadioButton
                value="Köpek"
                status={pet === "Köpek" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Köpek")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("Kuş")}
              style={styles.buttonView}
            >
              <Text>Kuş</Text>
              <RadioButton
                value="Bird"
                status={pet === "Kuş" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Kuş")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("Balık")}
              style={styles.buttonView}
            >
              <Text>Balık</Text>
              <RadioButton
                value="Fish"
                status={pet === "Balık" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Balık")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("Hoşlanmam")}
              style={styles.buttonView}
            >
              <Text>Hoşlanmam</Text>
              <RadioButton
                value="Don't Like"
                status={pet === "Hoşlanmam" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Hoşlanmam")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPet("Birden Fazla Evcil Hayvanım Var")}
              style={styles.buttonView}
            >
              <Text>Birden Fazla Evcil Hayvanım Var</Text>
              <RadioButton
                value="More"
                status={
                  pet === "Birden Fazla Evcil Hayvanım Var"
                    ? "checked"
                    : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setPet("Birden Fazla Evcil Hayvanım Var")}
              />
            </TouchableOpacity>
            <View>
              <Button
                onPress={() => {
                  dispatch(setAttribute({ pet: pet }));
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
export default PetScreen;
