import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePicture from "../../components/ProfilePicture";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCarousel,
  selectCarousel,
} from "../../redux/Slices/carouselSlice";
import styles from "./styles";
import IconButton from "../../components/IconButton";
import colors from "../../colors";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import PremiumContent from "./premiumContent";

const ProfileScreen = (props) => {
  const navigation = useNavigation();
  const carousel = useSelector((state) => state.carousel.carousel);
  const firstName = carousel.slice(0, 1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfilePicture style={{ marginTop: 20 }} />
        <Text style={styles.nameText}>
          {firstName.map((item) => {
            return (
              <Text key={item.name}>
                {item.name}, {item.age}
              </Text>
            );
          })}
        </Text>
        <View>
          <Text style={styles.completeProfile}>Profili tamamla</Text>
        </View>
        <View style={styles.iconView}>
          <View style={styles.iconTextView}>
            <View style={styles.littleIcon}>
              <View>
                <IconButton
                  name="settings"
                  onPress={() => navigation.navigate("Settings")}
                  color={colors.darkGrey}
                  size={28}
                />
              </View>
            </View>
            <Text style={styles.iconText}>Ayarlar</Text>
          </View>
          <View style={styles.iconTextView}>
            <View style={styles.icon}>
              <IconButton
                name="pencil"
                onPress={() => navigation.navigate("EditUserProfile")}
                color={colors.darkGrey}
                size={30}
              />
            </View>
            <Text style={styles.iconText}>Profili Düzenle</Text>
          </View>
          <View style={styles.iconTextView}>
            <View style={styles.littleIcon}>
              <IconButton
                name="shield"
                onPress={() => console.warn("Safety")}
                color={colors.darkGrey}
                size={28}
              />
            </View>
            <Text style={styles.iconText}>Güvenlik</Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.boxView}>
            <View style={styles.premiumBox}>
              <Box
                title="Premium"
                text="Premium üyeliğin sayesinde daha fazla kişiyle tanışabilirsin."
              />
              <Button
                text="Premium'a Yükselt 69.99TL"
                customStyle={styles.button}
                textCustomStyle={styles.buttonText}
              />
            </View>
            <View style={styles.boostBox}>
              <Box
                title="Boost"
                text="Boost üyeliğin sayesinde profilinizi daha fazla kişi görebilir. "
              />
              <Button
                text="Boost'a Yükselt 49.99TL"
                customStyle={styles.boostButton}
                textCustomStyle={styles.boostButtonText}
              />
            </View>
            <View style={styles.goldBox}>
              <Box
                title="Gold"
                text="Gold üyelik ile bütün özelliklere sahip olabilirsin. Daha fazla kişiyle tanışabilirsin. "
              />
              <Button
                text="Gold'a Yükselt 199.99TL"
                customStyle={styles.boostButton}
                textCustomStyle={styles.boostButtonText}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.premiumContentView}>
          <PremiumContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
