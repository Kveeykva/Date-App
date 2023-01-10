import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  connectedText: {
    color: colors.grey,
    fontSize: 14,
  },
  spotifyView: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    marginVertical: 10,
    height: 150,
  },
  inlineSpotify: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  titleText: {
    fontSize: 14,
    marginLeft: 10,
  },
  inlineText: {
    fontSize: 12,
    color: colors.grey,
    marginHorizontal: 10,
  },
});

export default styles;
