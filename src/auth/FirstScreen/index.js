import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import LogoSvg from "../../components/Logo";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <LogoSvg />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate("Register")}
          customStyle={styles.blackLoginButton}
          text="Üye Ol"
        />
        <Text style={styles.alreadyMemberText}>Zaten üye misin?</Text>
        <Button
          onPress={() => navigation.navigate("Login")}
          customStyle={styles.whiteLoginButton}
          textCustomStyle={styles.text}
          text="Giriş Yap"
        />

        <Text style={styles.memberText}>
          Giriş yaparak,{" "}
          <Text style={styles.privacyText}>Kullanım Şartları</Text> ve{" "}
          <Text style={styles.privacyText}>Gizlilik Politikası'nı</Text> kabul
          etmiş olursunuz.
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default FirstScreen;
