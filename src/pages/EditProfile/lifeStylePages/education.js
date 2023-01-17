import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { RadioButton, Switch } from "react-native-paper";
import colors from "../../../colors";
import Button from "../../../components/Button";

const EducationScreen = (props) => {
  const [education, setEducation] = useState();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inlineContainer}>
          <Text style={styles.title}>Eğitim düzeyin nedir?</Text>

          <View>
            <TouchableOpacity
              onPress={() => setEducation("UniversityGraduate")}
              style={styles.buttonView}
            >
              <Text>Üniversite Mezunu</Text>
              <RadioButton
                value="UniversityGraduate"
                status={
                  education === "UniversityGraduate" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("UniversityGraduate")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("UniversityStudent")}
              style={styles.buttonView}
            >
              <Text>Üniversite Öğrencisi</Text>
              <RadioButton
                value="UniversityStudent"
                status={
                  education === "UniversityStudent" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("UniversityStudent")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("HighSchoolGraduate")}
              style={styles.buttonView}
            >
              <Text>Lise Mezunu</Text>
              <RadioButton
                value="HighSchoolGraduate"
                status={
                  education === "HighSchoolGraduate" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("HighSchoolGraduate")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("PhD")}
              style={styles.buttonView}
            >
              <Text>Doktora</Text>
              <RadioButton
                value="PhD"
                status={education === "PhD" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("PhD")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("GraduateStudent")}
              style={styles.buttonView}
            >
              <Text>Yüksek Lisans Öğrencisi</Text>
              <RadioButton
                value="GraduateStudent"
                status={
                  education === "GraduateStudent" ? "checked" : "unchecked"
                }
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("GraduateStudent")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEducation("Graduate")}
              style={styles.buttonView}
            >
              <Text>Yüksek Lisans Mezunu</Text>
              <RadioButton
                value="Graduate"
                status={education === "Graduate" ? "checked" : "unchecked"}
                color={colors.primary}
                uncheckedColor={colors.grey}
                onPress={() => setEducation("Graduate")}
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
export default EducationScreen;
