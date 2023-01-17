import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";
import { accountSlice, setAttribute } from "../../../redux/Slices/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const GenderScreen = (props) => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inlineContainer}>
        <Text style={styles.title}>Cinsiyetini Seç</Text>
        <Text>
          Cinsiyet belirlemek sizi diğer üyelere göre ön plana çıkarır.
          Cinsiyetinizi değiştirmek istediğinizde, bunu daha sonra
          değiştirebilirsiniz.
        </Text>
        <View>
          <TouchableOpacity
            onPress={() => setGender("Erkek")}
            style={styles.buttonView}
          >
            <Text>Erkek</Text>
            <RadioButton
              value="man"
              status={gender === "Erkek" ? "checked" : "unchecked"}
              color={colors.primary}
              uncheckedColor={colors.grey}
              onPress={() => setGender("Erkek")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender("Kadın")}
            style={styles.buttonView}
          >
            <Text>Kadın</Text>
            <RadioButton
              value="woman"
              status={gender === "Kadın" ? "checked" : "unchecked"}
              color={colors.primary}
              uncheckedColor={colors.grey}
              onPress={() => setGender("Kadın")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender("Diğer")}
            style={styles.buttonView}
          >
            <Text>Diğer</Text>
            <RadioButton
              value="other"
              status={gender === "Diğer" ? "checked" : "unchecked"}
              color={colors.primary}
              uncheckedColor={colors.grey}
              onPress={() => setGender("Diğer")}
            />
          </TouchableOpacity>
          <View style={styles.genderSwipeView}>
            <View style={styles.swipeView}>
              <Text>Cinsiyetimi profilde göster</Text>
              <Switch
                value={isSwitchOn}
                color={colors.primary}
                onValueChange={onToggleSwitch}
              />
            </View>
            <View style={styles.currentGender}>
              <Text>Güncel Cinsiyet:</Text>
              <Text>{gender}</Text>
            </View>
          </View>

          <View>
            <Button
              onPress={() => dispatch(setAttribute(gender))}
              text="Kaydet ve çık"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default GenderScreen;
