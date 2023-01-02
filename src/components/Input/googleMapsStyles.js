import { StyleSheet } from "react-native";
import colors from "../../colors";
const styles = StyleSheet.create({
  mapInput: {
    textInputContainer: {},
    textInput: {
      height: 38,
      borderRadius: 10,
      marginLeft: -6,
      borderWidth: 1,
      borderColor: colors.primary,
    },
    predefinedPlacesDescription: {
      color: "#1faadb",
    },
  },
});

export default styles;
