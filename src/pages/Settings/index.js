import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectSettings } from "../../redux/Slices/settingsSlice";

const SettingsScreen = (props) => {
  const navigation = useNavigation();
  const settings = useSelector(selectSettings);

  return (
    <View style={styles.container}>
      <View style={styles.inlineContainer}>
        <Text style={styles.title}>Hesap Ayarları</Text>
        <View style={styles.buttonView}>
          <Button
            onPress={() =>
              navigation.navigate("SettingsAttributes", {
                value: settings.settingsDetail?.phoneNumber,
                type: "PHONE_NUMBER",
                headerTitle: "Telefon Numarası",
              })
            }
            customStyle={styles.button}
            text={"Telefon Numarası"}
            textCustomStyle={styles.buttonText}
          />
          <Text style={styles.phoneText}>
            {settings.settingsDetail?.phoneNumber}
          </Text>
          <Text style={styles.nextText}>{">"}</Text>
        </View>
        <Text style={styles.underText}>
          Telefon numaranızı doğrulamak hesabınızı güvende tutar.
        </Text>
        <View style={styles.currentLocationView}>
          <Text style={styles.title}>Konum Ayarları</Text>
          <View style={styles.buttonView}>
            <Button
              onPress={() =>
                navigation.navigate("SettingsAttributes", {
                  type: "CURRENT_LOCATION",
                  headerTitle: "Konumu Ayarla",
                })
              }
              customStyle={styles.button}
              text={"Şuanki Konum"}
              textCustomStyle={styles.buttonText}
            />
            <Text style={styles.phoneText}>
              {settings.settingsDetail?.phoneNumber}
            </Text>
            <Text style={styles.nextText}>{">"}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              onPress={() =>
                navigation.navigate("SettingsAttributes", {
                  type: "CURRENT_LOCATION",
                  headerTitle: "Konumu Ayarla",
                })
              }
              customStyle={styles.travelButton}
              text={"Seyehat Et"}
              textCustomStyle={styles.travelButtonText}
            />

            <Text style={styles.travelNextText}>{">"}</Text>
          </View>
          <Text style={styles.underText}>
            Konumunu değiştirip başka konumdaki insanlarla tanışma fırsatını
            yakalayabilmek için hemen hesabını Gold'a yükselt.
          </Text>
        </View>
        <View style={styles.currentLocationView}>
          <Text style={styles.title}>Bildirimler</Text>
          <View style={styles.buttonView}>
            <Button
              onPress={() =>
                navigation.navigate("SettingsAttributes", {
                  type: "NOTIFICATION",
                  headerTitle: "Konumu Ayarla",
                })
              }
              customStyle={styles.button}
              text={"Bildirim Ayarları"}
              textCustomStyle={styles.buttonText}
            />
            <Text style={styles.phoneText}>
              {settings.settingsDetail?.phoneNumber}
            </Text>
            <Text style={styles.nextText}>{">"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SettingsScreen;
