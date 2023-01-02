import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
import colors from "../../colors";

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    marginHorizontal: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  carouselPhoto: {
    width: width * 0.85,
    height: height * 0.6,
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
  },
  carousel: {
    bottom: 0,
  },
});

export default styles;
