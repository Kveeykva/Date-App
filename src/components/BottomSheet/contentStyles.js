import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  sliderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginVertical: 20,
  },
  location: {
    marginVertical: 20,
    marginHorizontal: 12,
  },
  title: {
    backgroundColor: "white",
    alignSelf: "center",
    fontSize: 24,
  },
  text: {
    fontWeight: "bold",
  },
  interestContainer: {
    marginHorizontal: 16,
    marginVertical: 20,
  },
  interestButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

export default styles;
