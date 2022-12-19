import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import LogoSvg from "../../components/Logo";
import Button from "../../components/Button";
import {
  registerValidationSchema,
  initialValues,
} from "../../validation/registerSchema";
import Input from "../../components/Input";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [visible, setVisible] = useState(true);
  const phoneRef = useRef(undefined);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.logoView}>
          <LogoSvg />
        </View>
        <View style={{ marginBottom: 100 }}>
          <Formik
            initialValues={initialValues}
            validationSchema={registerValidationSchema}
            validateOnBlur={true}
            validateOnMount={true}
            onSubmit={(values) =>
              navigation.navigate("PhoneAuth", {
                email: values.email,
                password: values.password,
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
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    touched={touched.email}
                    placeholder="E-posta"
                    error={errors.email}
                    label="E-posta"
                  />
                </View>
                <View style={styles.passwordInput}>
                  <Input
                    style={styles.input}
                    label="Şifre"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry={visible}
                    error={errors.password}
                    touched={touched.password}
                  />

                  <TouchableOpacity
                    style={styles.inputIcon}
                    onPress={() => setVisible(!visible)}
                  >
                    <Entypo
                      name={visible ? "eye" : "eye-with-line"}
                      size={18}
                      color="grey"
                    />
                  </TouchableOpacity>
                </View>

                <Button
                  isDisabled={!isValid}
                  onPress={handleSubmit}
                  customStyle={styles.button}
                  textCustomStyle={styles.buttonText}
                  text="İleri"
                />
                <View style={styles.loginText}>
                  <Text style={styles.textLogin}>
                    Zaten bir hesabınız var mı?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.loginTextButton}>Giriş Yap</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RegisterScreen;
