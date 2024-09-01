import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePicture from "../../components/ProfilePicture";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import IconButton from "../../components/IconButton";
import colors from "../../colors";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import PremiumContent from "./premiumContent";
import { hideModalx, showModalx } from "../../redux/Slices/profileModalSlice";
import ProfileModal from "./profileModal";

const ProfileScreen = (props) => {
  const navigation = useNavigation();
  const carousel = useSelector((state) => state.carousel.carousel);
  const firstName = carousel.slice(0, 1);

  const dispatch = useDispatch();
  const visible = useSelector((state) => state.modalx.isVisible);

  const closeModal = () => {
    dispatch(hideModalx());
  };

  const showModall = () => {
    dispatch(showModalx());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iconTextView}>
          <IconButton
            name="settings"
            onPress={() => navigation.navigate("Settings")}
            color={colors.darkGrey}
            size={26}
          />
        </View>
        <ProfilePicture />
        <Text style={styles.nameText}>
          {firstName.map((item) => {
            return (
              <Text key={item.name}>
                {item.name}, {item.age}
              </Text>
            );
          })}
        </Text>

        <View style={styles.buttonView}>
          <Button
            onPress={() => navigation.navigate("EditUserProfile")}
            customStyle={styles.editProfileButton}
            text={"Profili Düzenle "}
            text2={" >"}
            textCustomStyle={styles.editProfileButtonText}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.boxView}>
            <View style={styles.premiumBox}>
              <Box
                title="Premium"
                text="Premium üyeliğin sayesinde daha fazla kişiyle tanışabilirsin."
              />
              <Button
                onPress={() => {
                  navigation.navigate("MembershipsAttribute", {
                    type: "NormalPremium",
                    headerTitle: "Premium'a Yükselt",
                  });
                }}
                text="Premium'a Yükselt 69.99TL"
                customStyle={styles.boostButton}
                textCustomStyle={styles.buttonText}
              />
            </View>
            <View style={styles.boostBox}>
              <Box
                title="Boost"
                text="Boost üyeliğin sayesinde profilinizi daha fazla kişi görebilir. "
              />
              <Button
                onPress={() => {
                  navigation.navigate("MembershipsAttribute", {
                    type: "BoostPremium",
                    headerTitle: "Boost Üyelik",
                  });
                }}
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
                onPress={() => {
                  navigation.navigate("MembershipsAttribute", {
                    type: "GoldPremium",
                    headerTitle: "Gold Üyelik",
                  });
                }}
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
      <ProfileModal visible={visible} hideModal={closeModal} />
    </SafeAreaView>
  );
};
export default ProfileScreen;
