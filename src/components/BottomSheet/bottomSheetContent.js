import React from "react";
import { View, Text } from "react-native";
import styles from "./contentStyles";
import Slider from "@react-native-community/slider";
import colors from "../../colors";
import GooglePlacesInput from "../Input/googleMaps";
import Button from "../Button";
import InterestButton from "./interestButton";

const BottomSheetContent = (props) => {
  const [range, setRange] = React.useState("100m - 50km");
  const [year, setYear] = React.useState("18 - 90");

  const { location, title, distance, age, slider } = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> {title} </Text>
      </View>
      <View>
        <View style={styles.location}>
          <Text style={styles.text}> {location} </Text>
          <View style={{ marginVertical: 10 }}>
            <GooglePlacesInput />
          </View>
        </View>
      </View>
      <View style={styles.sliderView}>
        <Text style={styles.text}> {distance} </Text>
        <Text style={styles.text}> {range} </Text>
      </View>
      <Slider
        minimumValue={1}
        maximumValue={500}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.grey}
        thumbTintColor={colors.primary}
        value={250}
        onValueChange={(value) => setRange(parseInt(value) + " km - 500 km")}
      />
      <View style={styles.sliderView}>
        <Text style={styles.text}> {age} </Text>
        <Text style={styles.text}> {year} </Text>
      </View>
      <Slider
        minimumValue={18}
        maximumValue={90}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.grey}
        thumbTintColor={colors.primary}
        value={0.5}
        onValueChange={(value) => setYear(parseInt(value * 1) + " - 90")}
      />
      <View style={styles.interestContainer}>
        <Text style={styles.text}>İlgi Alanları</Text>
      </View>
      <View style={styles.interestButtonContainer}>
        <InterestButton text={"Erkekler"} />
        <InterestButton text={"Kadınlar"} />
        <InterestButton text={"Diğer"} />
      </View>
      <View style={styles.interestContainer}>
        <Button text="Ara" />
      </View>
    </View>
  );
};
export default BottomSheetContent;
