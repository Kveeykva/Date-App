import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import { Formik } from "formik";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./styles";
import { PaymentSchema } from "../../validation/paymentSchema";
import { ErrorToast } from "react-native-toast-message";

const Payment = (props) => {
  const [cardType, setCardType] = useState(null);

  const handleCardNumberChange = (text) => {
    // Kredi kartı türünü tespit etmek için özel bir işlev kullanabilirsiniz.
    // Örneğin, ilk rakama göre Visa veya MasterCard'ı belirleyebilirsiniz.
    const visaPattern = /^4/;
    const masterCardPattern = /^5/;
    if (visaPattern.test(text)) {
      setCardType("visa");
    } else if (masterCardPattern.test(text)) {
      setCardType("mastercard");
    } else {
      setCardType(null);
    }
  };

  const formatExpiryDate = (text) => {
    // Son kullanma tarihini MM/YY formatına dönüştürmek için bir işlev
    if (text.length === 1 && parseInt(text) > 1) {
      text = `0${text}/`;
    } else if (text.length === 2 && text.indexOf("/") === -1) {
      text = `${text}/`;
    }
    return text;
  };

  const handleExpiryDateChange = (text, formikProps) => {
    // Otomatik olarak / (slash) eklemek için handleExpiryDateChange işlevini kullanın
    text = formatExpiryDate(text);
    formikProps.handleChange("cardExpiry")(text);
  };

  const handlePayment = (values) => {
    // Ödeme işlemleri için özel bir işlev kullanabilirsiniz.
    // Örneğin, ödeme işlemini tamamlamak için bir API çağrısı yapabilirsiniz.
    console.log(values);
  };

  return (
    <View>
      <Formik
        initialValues={{
          cardNumber: "",
          cardName: "",
          cardExpiry: "",
          cardCvc: "",
        }}
        validationSchema={PaymentSchema}
        onSubmit={(values) => handlePayment(values)}
      >
        {(formikProps) => (
          <View>
            <Text style={styles.text}>Kredi Kartı Bilgileri</Text>
            <View>
              <Input
                maxLength={16}
                placeholder="Kart Numarası"
                onChangeText={(text) => {
                  formikProps.handleChange("cardNumber")(text);
                  handleCardNumberChange(text);
                }}
                onBlur={formikProps.handleBlur("cardNumber")}
                value={formikProps.values.cardNumber}
                keyboardType="numeric"
                right={true}
              />

              <View
                style={{
                  alignItems: "flex-end",
                  marginTop: 10,
                  position: "absolute",
                  right: 50,
                }}
              >
                {cardType === "visa" && (
                  <Image
                    source={require("../../assets/visa_logo.png")}
                    style={styles.visaLogo}
                  />
                )}
                {cardType === "mastercard" && (
                  <Image
                    source={require("../../assets/mastercard_logo.png")}
                    style={styles.visaLogo}
                  />
                )}
              </View>
            </View>
            <Text style={styles.yupText}>
              {formikProps.touched.cardNumber && formikProps.errors.cardNumber}
            </Text>

            <Input
              placeholder="Kart Üzerindeki İsim"
              onChangeText={formikProps.handleChange("cardName")}
              onBlur={formikProps.handleBlur("cardName")}
              value={formikProps.values.cardName}
            />
            <Text style={styles.yupText}>
              {formikProps.touched.cardName && formikProps.errors.cardName}
            </Text>
            <Input
              placeholder="Son Kullanma Tarihi (MM/YY)"
              onChangeText={(text) => {
                handleExpiryDateChange(text, formikProps);
              }}
              onBlur={formikProps.handleBlur("cardExpiry")}
              value={formikProps.values.cardExpiry}
              keyboardType="numeric"
              maxLength={5}
            />
            <Text style={styles.yupText}>
              {formikProps.touched.cardExpiry && formikProps.errors.cardExpiry}
            </Text>

            <Input
              placeholder="CVC"
              onChangeText={formikProps.handleChange("cardCvc")}
              onBlur={formikProps.handleBlur("cardCvc")}
              value={formikProps.values.cardCvc}
              keyboardType="numeric"
              maxLength={3}
            />
            <Text style={styles.yupText}>
              {formikProps.touched.cardCvc && formikProps.errors.cardCvc}
            </Text>
            <Button text="Ödeme Yap" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Payment;
