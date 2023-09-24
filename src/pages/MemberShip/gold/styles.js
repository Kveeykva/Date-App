import { StyleSheet } from "react-native";
import colors from "../../../colors";

const styles = StyleSheet.create({
  button: { marginTop: 50, backgroundColor: colors.gold },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  goldText: {
    textDecorationLine: "underline",
    color: colors.gold,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default styles;
