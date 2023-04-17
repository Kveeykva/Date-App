import { StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
  },
  heartIcon: {
    fontSize: 30,
    color: colors.gold,
    marginVertical: 10,
  },
  matchesPhotoView: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  likePeopleContainer: {
    flex: 1,
  },

  likePeopleFlatList: {
    height: height * 0.42,
  },
  likePeopleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
  },
  likePeopleView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  photoView: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.gold,
    marginTop: 20,
  },
});

export default styles;
