import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { setAttribute } from "../../../redux/Slices/accountSlice";
import { useDispatch } from "react-redux";

const EducationScreen = (props) => {
  const { value } = props.route.params;
  const [education, setEducation] = useState(value);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Eğitim düzeyin nedir?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setEducation("Üniversite Mezunu")}
              style={styles.buttonView}
            >
              <Text>Üniversite Mezunu</Text>
              <RadioButton
                value="UniversityGraduate"
                status={
                  education === "Üniversite Mezunu" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("Üniversite Mezunu")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("Üniversite Öğrencisi")}
              style={styles.buttonView}
            >
              <Text>Üniversite Öğrencisi</Text>
              <RadioButton
                value="UniversityStudent"
                status={
                  education === "Üniversite Öğrencisi" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("Üniversite Öğrencisi")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("Lise Mezunu")}
              style={styles.buttonView}
            >
              <Text>Lise Mezunu</Text>
              <RadioButton
                value="HighSchoolGraduate"
                status={education === "Lise Mezunu" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("Lise Mezunu")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("Doktora")}
              style={styles.buttonView}
            >
              <Text>Doktora</Text>
              <RadioButton
                value="PhD"
                status={education === "Doktora" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("Doktora")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("Yüksek Lisans Öğrencisi")}
              style={styles.buttonView}
            >
              <Text>Yüksek Lisans Öğrencisi</Text>
              <RadioButton
                value=""
                status={
                  education === "Yüksek Lisans Öğrencisi"
                    ? "checked"
                    : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("Yüksek Lisans Öğrencisi")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("Yüksek Lisans Mezunu")}
              style={styles.buttonView}
            >
              <Text>Yüksek Lisans Mezunu</Text>
              <RadioButton
                value="Graduate"
                status={
                  education === "Yüksek Lisans Mezunu" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("Yüksek Lisans Mezunu")}
              />
            </TouchableOpacity>
            <View>
              <Button
                onPress={() => {
                  dispatch(setAttribute({ education: education }));
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
export default EducationScreen;
