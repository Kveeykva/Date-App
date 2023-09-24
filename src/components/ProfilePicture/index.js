import React, { useEffect } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { hideModalx, showModalx } from "../../redux/Slices/profileModalSlice";
import ProfileModal from "../../pages/Profile/profileModal";

const ProfilePicture = (props) => {
  const { onPress } = props;
  const carousel = useSelector((state) => state.carousel.carousel);
  const firstPhoto = carousel.slice(0, 1);
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.modalx.isVisible);

  const closeModal = () => {
    dispatch(hideModalx());
  };

  const showModall = () => {
    dispatch(showModalx());
  };

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        {firstPhoto.map((item) => {
          return (
            <Image
              key={item.photo}
              source={{ uri: item.photo }}
              style={[styles.profilePhoto, props.style]}
            />
          );
        })}
      </TouchableOpacity>
    </>
  );
};
export default ProfilePicture;
