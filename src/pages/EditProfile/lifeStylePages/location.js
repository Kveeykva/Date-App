import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";

const LocationScreen = () => {
  const [city, setCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = (text) => {
    setCity(text);
  };

  useEffect(() => {
    fetch(`https://api.example.com/search?city=${city}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.log(error));
  }, [city]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={handleInput}
        placeholder="Bir şehir giriniz"
      />
      <Text>Arama Sonuçları:</Text>
      <MapView
        provider={PROVIDER_GOOGLE} // set Google Maps as provider
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />

      {searchResults.map((result) => (
        <Text key={result.id}>{result.name}</Text>
      ))}
    </View>
  );
};

export default LocationScreen;
