import React from "react";
import { View, Text } from "react-native";
import styles from "./premiumContentStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../colors";

const PremiumContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.whatYouGet}>
        <Text style={styles.title}>Ayrıcalıklar:</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.whatYouGetText}>Sınırsız Beğeni:</Text>
          <Text style={styles.whatYouGetText}>Sınırsız Geri Sarma:</Text>
          <Text style={styles.whatYouGetText}>İstediğin Konuma Eriş:</Text>
          <Text style={styles.whatYouGetText}>Reklamları Engelle:</Text>
          <Text style={styles.whatYouGetText}>Haftalık 5 Superlike:</Text>
          <Text style={styles.whatYouGetText}>Sınırsız Mesajlaşma:</Text>
          <Text style={styles.whatYouGetText}>Sınırsız Profil Ziyareti:</Text>
          <Text style={styles.whatYouGetText}>Eşleşmeden Mesaj:</Text>
          <Text style={styles.whatYouGetText}>Aylık 1 Ücretsiz Boost:</Text>
        </View>
      </View>
      <View style={styles.premium}>
        <Text style={styles.title}>Premium</Text>
        <View style={{ marginTop: 10 }}>
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkPremium}
          />
          <Text style={styles.whatYouGetText}> {""} </Text>
          <Text style={styles.whatYouGetText}> {""} </Text>
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkPremium}
          />
        </View>
      </View>
      <View style={styles.boost}>
        <Text style={styles.title}>Boost</Text>
        <View style={{ marginTop: 10 }}>
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkBoost}
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Gold</Text>
        <View style={{ marginTop: 10 }}>
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkGold}
          />
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkGold}
          />
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkGold}
          />
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkGold}
          />
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkGold}
          />
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkGold}
          />
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkGold}
          />
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkGold}
          />
          <MaterialCommunityIcons
            name="check-bold"
            style={styles.checkmarkGold}
          />
        </View>
      </View>
    </View>
  );
};
export default PremiumContent;
