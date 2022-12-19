import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import PhoneInput from "react-native-phone-input";
import LogoSvg from "../../components/Logo";
import Button from "../../components/Button";
import {
  initialValuesAuth,
  registerAuthValidationSchema,
} from "../../validation/registerSchema";
import Input from "../../components/Input";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const PhoneAuthScreen = () => {
  const phoneRef = useRef(undefined);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoView}>
          <LogoSvg />
        </View>
        <Formik
          initialValues={initialValuesAuth}
          validationSchema={registerAuthValidationSchema}
          validateOnBlur={false}
          validateOnMount={true}
          onSubmit={(values) =>
            navigation.navigate("Login", { phoneNumber: values.phoneNumber })
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
                <PhoneInput
                  style={styles.input}
                  ref={phoneRef}
                  value={values.phoneNumber}
                  onChangePhoneNumber={handleChange("phoneNumber")}
                  initialCountry="tr"
                  textProps={{
                    placeholder: "Telefon Numarası",
                    placeholderTextColor: "black",
                    maxLength: 13,
                  }}
                />
              </View>

              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}
              <Button
                isDisabled={!isValid}
                onPress={handleSubmit}
                textCustomStyle={styles.buttonText}
                text="Kaydol"
              />
              <View style={styles.loginText}>
                <Text style={styles.textLogin}>
                  Zaten bir hesabınız var mı?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.loginTextButton}>Giriş Yap</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
export default PhoneAuthScreen;
