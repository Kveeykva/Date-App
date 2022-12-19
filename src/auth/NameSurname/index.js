import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import styles from "./styles";
import LogoSvg from "../../components/Logo";
import Button from "../../components/Button";
import {
  registerValidNameSchema,
  initialValuesName,
} from "../../validation/registerSchema";
import Input from "../../components/Input";

import { useNavigation } from "@react-navigation/native";

const NameSurnameAuthScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.logoView}>
          <LogoSvg />
        </View>
        <View style={{ marginBottom: 100 }}>
          <Formik
            initialValues={initialValuesName}
            validationSchema={registerValidNameSchema}
            validateOnBlur={true}
            validateOnMount={true}
            onSubmit={(values) =>
              navigation.navigate("Login", {
                email: values.name,
                password: values.surname,
              })
            }
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isValid,
              errors,
              touched,
            }) => (
              <View>
                <View style={styles.inputView}>
                  <Input
                    style={styles.input}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    error={errors.name}
                    touched={touched.name}
                    label="İsim"
                  />
                </View>

                <View style={styles.inputView}>
                  <Input
                    style={styles.input}
                    onChangeText={handleChange("surname")}
                    onBlur={handleBlur("surname")}
                    value={values.surname}
                    error={errors.surname}
                    touched={touched.surname}
                    label="Soyisim"
                  />
                </View>

                <Button
                  isDisabled={!isValid}
                  onPress={handleSubmit}
                  customStyle={styles.button}
                  textCustomStyle={styles.buttonText}
                  text="İleri"
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default NameSurnameAuthScreen;
