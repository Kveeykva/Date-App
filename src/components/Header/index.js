import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ProfilePicture from "../ProfilePicture";
import styles from "./styles";

const MainHeader = (props) => {
  const {
    title,
    icon,
    size,
    image,
    filterPress,
    searchPress,
    search,
    filter,
    profilePic,
  } = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {profilePic && <ProfilePicture style={styles.profilePic} />}
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.searchView}>
          {search && (
            <TouchableOpacity onPress={searchPress}>
              <AntDesign
                name="search1"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          )}
          {filter && (
            <TouchableOpacity onPress={filterPress}>
              <AntDesign
                name={icon}
                size={size}
                color="black"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MainHeader;
