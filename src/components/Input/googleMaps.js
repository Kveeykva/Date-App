import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./googleMapsStyles";
import MapView, { Callout, Circle, Marker } from "react-native-maps";

const GooglePlacesInput = () => {
  const [pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const ref = useRef();

  return (
    <GooglePlacesAutocomplete
      styles={styles.mapInput}
      ref={ref}
      placeholder="Konum Giriniz"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: "AIzaSyDYf2SN8294_VeEQqsa10nlWOOARDH52VQ",
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
