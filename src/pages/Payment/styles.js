import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
  },
  yupText: {
    color: colors.red,
    textAlign: "center",
    fontSize: 15,
  },
  visaLogo: {
    width: 50,
    height: 30,
    marginRight: 10,
    marginTop: 10,
    resizeMode: "contain",
  },
});

export default styles;
