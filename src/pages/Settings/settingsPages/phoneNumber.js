import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import PhoneInput from "react-native-phone-input";
import Button from "../../../components/Button";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  initialValuesAuth,
  registerAuthValidationSchema,
} from "../../../validation/registerSchema";
import { useDispatch } from "react-redux";
import { setAttribute } from "../../../redux/Slices/settingsSlice";

const PhoneNumberScreen = () => {
  const phoneRef = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValuesAuth}
        validationSchema={registerAuthValidationSchema}
        validateOnBlur={false}
        validateOnMount={true}
        onSubmit={(values) => {
          console.log(values);
          dispatch(setAttribute({ phoneNumber: values.phoneNumber }));
          navigation.goBack();
        }}
      >
        {({ handleChange, handleSubmit, values, isValid, errors, touched }) => (
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
                  placeholderTextColor: "Black",
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
              customStyle={styles.button}
              textCustomStyle={styles.buttonText}
              text="Telefon Numaramı Güncelle"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
export default PhoneNumberScreen;
