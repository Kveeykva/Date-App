import React, { useState } from "react";
import { Text, View, ActivityIndicator, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./editProfileStyles";
import Button from "../../components/Button";
import AddPhoto from "./addPhoto";

function EditProfile(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inlineContainer}>
        <Text style={styles.title}>Profilini güçlendir</Text>
        <View style={styles.buttonView}>
          <Button
            customStyle={styles.button}
            text={"0% tamamlandı"}
            textCustomStyle={styles.buttonText}
          />
          <Text style={styles.nextText}>{">"}</Text>
        </View>
      </View>
      <View style={styles.inlineContainer}>
        <Text style={styles.title}>Fotoğraflarım</Text>
        <Text style={styles.secondText}>
          Seni görmeleri için bir kaç fotoğraf ekle
        </Text>
        <View>
          <AddPhoto />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EditProfile;
