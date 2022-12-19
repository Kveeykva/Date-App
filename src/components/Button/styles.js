import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    width: "70%",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
