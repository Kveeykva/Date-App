import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  firstPhotoView: {
    width: width * 0.61,
    height: height * 0.25,
    marginBottom: 10,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrey,
  },
  firstImage: {
    width: width * 0.61,
    height: height * 0.25,
    borderRadius: 10,
    position: "absolute",
    resizeMode: "contain",
  },
  photoView: {
    width: width * 0.28,
    height: height * 0.12,
    marginBottom: 10,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.lightGrey,
  },
  otherImage: {
    width: width * 0.28,
    height: height * 0.12,
    borderRadius: 10,
    position: "absolute",
    resizeMode: "contain",
    backgroundColor: colors.lightGrey,
  },
  photoContainer: {
    marginTop: 10,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  icon: {
    alignSelf: "center",
    fontSize: 30,
    color: colors.primary,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  thirdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

export default styles;
