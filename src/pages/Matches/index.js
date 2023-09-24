import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import {
  fetchCarousel,
  selectCarousel,
} from "../../redux/Slices/carouselSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import MainModal from "../../components/MainModal/main";
import { hideModal, toggleModal } from "../../redux/Slices/modalSlice";

function MatchScreen() {
  const dispatch = useDispatch();
  const userProfilePhoto = useSelector(selectCarousel);
  const isModalVisible = useSelector((state) => state.modal.isVisible);

  const closeModal = () => {
    dispatch(hideModal());
  };

  const modalStatus = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    dispatch(fetchCarousel());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seni Beğenenler</Text>
        <AntDesign style={styles.heartIcon} name="heart" />
      </View>
      <View style={styles.header}>
        <Text>Seni kimlerin beğendiğini görebilmek için</Text>
        <Text>hesabını Gold'a yükselt.</Text>
      </View>
      <View style={styles.likePeopleContainer}>
        <View style={styles.likePeopleView}>
          <Text style={styles.likePeopleText}>Beğenilerin</Text>
          <Text>{userProfilePhoto.carousel.length}</Text>
        </View>
        <View style={styles.photoView}>
          <FlatList
            style={styles.likePeopleFlatList}
            data={userProfilePhoto.carousel}
            keyExtractor={(item) => item.id}
            numColumns={3}
            vertical
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={modalStatus}
                style={styles.matchesContainer}
              >
                <Image
                  source={{ uri: item.photo }}
                  style={styles.matchesPhotoView}
                  resizeMode="contain"
                  blurRadius={200}
                />
              </TouchableOpacity>
            )}
          />

          <MainModal
            button
            visible={isModalVisible}
            hideModal={closeModal}
            onPress={modalStatus}
            text="Seni Kimlerin Beğendiğini Gör"
            style={styles.customStyle}
            modalText="Seni kimlerin beğendiğini görebilmek için hesabını Gold'a yükselt."
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MatchScreen;
