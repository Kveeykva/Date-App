import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ProfilePicture from "../ProfilePicture";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { showModalx } from "../../redux/Slices/profileModalSlice";
import { useDispatch } from "react-redux";
import ProfileModal from "../../pages/Profile/profileModal";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const showModall = () => {
    dispatch(showModalx());
  };

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
    userPic,
    backPage,
  } = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {backPage && (
          <TouchableOpacity onPress={backPage}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        )}
        {profilePic && (
          <ProfilePicture onPress={showModall} style={styles.profilePic} />
        )}
        {userPic && <Image style={styles.profilePic} source={image} />}
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
      <ProfileModal />
    </SafeAreaView>
  );
};
export default MainHeader;
