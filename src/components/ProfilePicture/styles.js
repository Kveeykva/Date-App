import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    resizeMode: "contain",
  },
});

export default styles;
