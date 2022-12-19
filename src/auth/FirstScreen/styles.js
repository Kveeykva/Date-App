import { StyleSheet } from "react-native";
import colors from "../../colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logoView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  whiteLoginButton: {
    backgroundColor: colors.white,
  },
  blackLoginButton: {
    backgroundColor: colors.black,
  },
  text: {
    color: colors.black,
  },
  alreadyMemberText: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
  memberText: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 12,
    marginVertical: 10,
    marginBottom: 60,
  },
  privacyText: {
    color: colors.white,
    fontSize: 12,
    textDecorationLine: "underline",
  },
});

export default styles;
