import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import Search from "../../components/Search";
import {
  fetchCarousel,
  selectCarousel,
} from "../../redux/Slices/carouselSlice";
import styles from "./styles";

const MessagesScreen = (props) => {
  const userProfilePhoto = useSelector(selectCarousel);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarousel());
  }, []);

  const filteredData = userProfilePhoto.carousel.filter((item) => {
    return item.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inlineContainer}>
        <View style={styles.headerView}>
          <Input
            value={inputValue}
            placeholder="Eşleşmelerin içinde ara"
            style={styles.input}
            onChangeText={(text) => setInputValue(text)}
          />
          <Search customStyle={styles.search} />
        </View>
        <View style={styles.waitingMatch}>
          <Text style={styles.newMatchesTitle}>Bekleyen Eşleşmeler</Text>
        </View>
        <View>
          <FlatList
            data={userProfilePhoto.carousel}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.matchesContainer}>
                <Image
                  source={{ uri: item.photo }}
                  style={styles.matchesView}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.messagesView}>
          <Text style={styles.newMatchesTitle}>Mesajların</Text>
          <FlatList
            style={styles.flatList}
            data={filteredData}
            keyExtractor={(item) => item.id}
            vertical
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.messagesContainer}>
                <TouchableOpacity>
                  <Image
                    source={{ uri: item.photo }}
                    style={styles.matchesView}
                  />
                </TouchableOpacity>
                <View style={styles.textView}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.name}
                  >
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={styles.message}
                  >
                    {item.message}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;
