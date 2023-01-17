import React from "react";
import { View, Text } from "react-native";
import styles from "./connectAccountStyles";
import { Entypo } from "@expo/vector-icons";

const ConnectAccount = (props) => {
  return (
    <View>
      <Text style={styles.title}>Hesaplarını Bağla</Text>
      <Text style={styles.connectedText}>
        İnstagramındaki fotoğraflarını ve Spotifydaki listelerini göster
      </Text>
      <View style={styles.spotifyView}>
        <View style={styles.inlineSpotify}>
          <Entypo name="spotify" size={24} color="#1DB954" />
          <Text style={styles.titleText}>Spotify hesabını bağla</Text>
        </View>
        <View>
          <Text style={styles.inlineText}>
            Spotify hesabını bağlayarak insanların senin zevklerin hakkında daha
            fazla bilgi almasını sağla. Sevdiğin sanatçıların ve albümlerin
            profilinde görünmesini sağla.
          </Text>
        </View>
      </View>
      <View style={styles.spotifyView}>
        <View style={styles.inlineSpotify}>
          <Entypo name="instagram" size={24} color="#E1306C" />
          <Text style={styles.titleText}>Instagram hesabını bağla</Text>
        </View>
        <View>
          <Text style={styles.inlineText}>
            Instagram hesabını bağlayarak son fotoğraflarının profilinde
            görünmesini sağla. Kullanıcı adın görünmez.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ConnectAccount;
