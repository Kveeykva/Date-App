import React, { useEffect, useCallback, useMemo, useRef } from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import {
  fetchCarousel,
  selectCarousel,
} from "../../redux/Slices/carouselSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import Discover from "../../components/Discover";
import Search from "../../components/Search";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import BottomSheetContent from "../../components/BottomSheet/bottomSheetContent";
import CarouselPhoto from "../../components/Card";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const carousel = useSelector(selectCarousel);

  useEffect(() => {
    dispatch(fetchCarousel());
  }, []);
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["50%", "80%", "85%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
      />
    ),
    []
  );

  return (
    <GestureHandlerRootView style={styles.page}>
      <BottomSheetModalProvider>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Discover />
              <Search
                customStyle={styles.search}
                onPress={handlePresentModalPress}
              />
            </View>
            <View style={styles.carousel}>
              <CarouselPhoto customStyle={styles.carouselPhoto} />
            </View>

            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              enablePanDownToClose={true}
              enableDismissOnClose={true}
              dismissOnPanDown={true}
              backdropComponent={renderBackdrop}
            >
              <View style={styles.contentContainer}>
                <BottomSheetContent
                  title="Arama"
                  location="Konum"
                  distance="Mesafe"
                  age="Yaş"
                />
              </View>
            </BottomSheetModal>
          </View>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
export default HomeScreen;
