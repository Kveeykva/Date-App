import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfilePicture from "../../components/ProfilePicture";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCarousel,
  selectCarousel,
} from "../../redux/Slices/carouselSlice";
import styles from "./styles";

const ProfileScreen = (props) => {
  const carousel = useSelector((state) => state.carousel.carousel);
  const firstName = carousel.slice(0, 1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inlineContainer}>
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
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
