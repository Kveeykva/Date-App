import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";
import {
  fetchCarousel,
  selectCarousel,
} from "../../redux/Slices/carouselSlice";
import { useDispatch, useSelector } from "react-redux";

function MatchScreen() {
  const dispatch = useDispatch();
  const userProfilePhoto = useSelector(selectCarousel);

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
              <TouchableOpacity style={styles.matchesContainer}>
                <Image
                  source={{ uri: item.photo }}
                  style={styles.matchesPhotoView}
                  resizeMode="contain"
                  blurRadius={200}
                />
              </TouchableOpacity>
            )}
          />
          <Button
            customStyle={styles.button}
            text="Seni Kimlerin Beğendiğini Gör"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MatchScreen;
