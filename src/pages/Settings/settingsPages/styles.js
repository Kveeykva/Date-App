import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../colors";
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: windowHeight,
  },
  logoView: {
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
    paddingHorizontal: 10,
    height: 50,
  },

  loginText: {
    color: colors.white,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  textLogin: {
    color: colors.white,
  },

  loginTextButton: {
    color: colors.white,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },

  errorText: {
    color: colors.red,
    width: "80%",
    alignSelf: "center",
    fontSize: 12,
  },
});

export default styles;
