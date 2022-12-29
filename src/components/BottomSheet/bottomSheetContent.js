import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./contentStyles";
import Slider from "@react-native-community/slider";
import colors from "../../colors";

const BottomSheetContent = (props) => {
  const [range, setRange] = React.useState("100m - 50km");
  const [year, setYear] = React.useState("18 - 90");

  const { location, title, distance, age, slider } = props;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> {title} </Text>
        </View>
        <View>
          <View style={styles.sliderView}>
            <Text style={styles.text}> {location} </Text>
          </View>
        </View>
        <View style={styles.sliderView}>
          <Text style={styles.distance}> {distance} </Text>
          <Text style={styles.text}> {range} </Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.grey}
          thumbTintColor={colors.primary}
          value={0.5}
          onValueChange={(value) =>
            setRange(parseInt(value * 50000) + "M - 50KM")
          }
        />
        <View style={styles.sliderView}>
          <Text style={styles.age}> {age} </Text>
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
      </View>
    </SafeAreaView>
  );
};
export default BottomSheetContent;
