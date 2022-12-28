import { StyleSheet } from "react-native";
import color from "../../colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  discoverText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
  },
  cityText: {
    fontSize: 14,
    color: color.grey,
  },
  Icon: {
    marginRight: 5,
    alignSelf: "center",
    fontSize: 14,
    color: color.grey,
  },
});

export default styles;
