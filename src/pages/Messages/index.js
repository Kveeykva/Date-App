import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCarousel } from "../../redux/Slices/carouselSlice";
import MainHeader from "../../components/Header";

const MessagesScreen = (props) => {
  const dispatch = useDispatch();
  const carousel = useSelector(selectCarousel);

  return (
    <View style={styles.container}>
      <MainHeader
        image={require("../../../assets/icon.png")}
        size={24}
        icon={"filter"}
        title={"Mesajlar"}
        filter
        search
        profilePic
      />
      <ScrollView style={styles.messageItemView}>
        {carousel.carousel.map((item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.itemContainer}
              key={item.id}
            >
              <View style={styles.imageView}>
                <Image
                  style={styles.profilePhoto}
                  source={{ uri: item.photo }}
                />
                <Text style={styles.name}>{[item.name, item.surname]}</Text>
              </View>

              <View style={styles.messageView}>
                {item.message?.length > 20 ? (
                  <Text>{item.message.slice(0, 20)}...</Text>
                ) : (
                  <Text>{item.message}</Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MessagesScreen;
