import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

import { useSelector } from "react-redux";
import styles from "./styles";

const ProfilePicture = (props) => {
  const carousel = useSelector((state) => state.carousel.carousel);
  const firstPhoto = carousel.slice(0, 1);

  return (
    <View style={props.style}>
      {firstPhoto.map((item) => {
        return (
          <Image
            key={item.photo}
            source={{ uri: item.photo }}
            style={[styles.profilePhoto, props.style]}
          />
        );
      })}
    </View>
  );
};
export default ProfilePicture;
