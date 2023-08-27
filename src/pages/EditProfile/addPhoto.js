import React, { useEffect, useState } from "react";
import { Image, View, Pressable, Alert } from "react-native";
import styles from "./addPhotoStyles";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function AddPhoto() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Yetki verilmedi!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage1(result.assets[0].uri);
    }
  };
  const secondImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage2(result.assets[0].uri);
    }
  };
  const thirdImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage3(result.assets[0].uri);
    }
  };
  const fourImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage4(result.assets[0].uri);
    }
  };
  const fiveImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage5(result.assets[0].uri);
    }
  };

  const sixImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage6(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Pressable onPress={pickImage} style={styles.firstPhotoView}>
          <Entypo name="plus" style={styles.icon} />
          {image1 && (
            <Image source={{ uri: image1 }} style={styles.firstImage} />
          )}
        </Pressable>

        <View style={styles.secondContainer}>
          <Pressable onPress={secondImage} style={styles.photoView}>
            <Entypo name="plus" style={styles.icon} />
            {image2 && (
              <Image source={{ uri: image2 }} style={styles.otherImage} />
            )}
          </Pressable>
          <Pressable onPress={thirdImage} style={styles.photoView}>
            <Entypo name="plus" style={styles.icon} />
            {image3 && (
              <Image source={{ uri: image3 }} style={styles.otherImage} />
            )}
          </Pressable>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Pressable onPress={fourImage} style={styles.photoView}>
          <Entypo name="plus" style={styles.icon} />
          {image4 && (
            <Image source={{ uri: image4 }} style={styles.otherImage} />
          )}
        </Pressable>
        <Pressable onPress={fiveImage} style={styles.photoView}>
          <Entypo name="plus" style={styles.icon} />
          {image5 && (
            <Image source={{ uri: image5 }} style={styles.otherImage} />
          )}
        </Pressable>
        <Pressable onPress={sixImage} style={styles.photoView}>
          <Entypo name="plus" style={styles.icon} />
          {image6 && (
            <Image source={{ uri: image6 }} style={styles.otherImage} />
          )}
        </Pressable>
      </View>
    </View>
  );
}
