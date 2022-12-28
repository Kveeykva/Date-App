import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, Button } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetContent from "./bottomSheetContent";
import styles from "./styles";
import Search from "../Search";

const BottomSheet = () => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "50%", "75"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const close = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Search
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
          >
            <View style={styles.contentContainer}>
              <BottomSheetContent text="Hello Bottom Sheet" />
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default BottomSheet;
