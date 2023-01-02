import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inlineContainer: {
    marginTop: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
});

export default styles;
