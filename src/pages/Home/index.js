import React, { useEffect } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  fetchCarousel,
  selectCarousel,
} from "../../redux/Slices/carouselSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import Discover from "../../components/Discover";
import Search from "../../components/Search";
import BottomSheet from "../../components/BottomSheet";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const carousel = useSelector(selectCarousel);

  useEffect(() => {
    dispatch(fetchCarousel());
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Discover />
          <Search />
        </View>
        <FlatList
          data={carousel.carousel}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.carouselContainer}>
              <Image source={{ uri: item.photo }} style={styles.photo} />
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.age}>{item.age}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
