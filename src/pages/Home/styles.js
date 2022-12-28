import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
import colors from "../../colors";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carouselContainer: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  photo: {
    width: width * 0.8,
    height: height * 0.7,
    borderRadius: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  age: {
    fontSize: 18,
    color: "red",
  },
  location: {
    fontSize: 16,
    color: "red",
  },
});

export default styles;
