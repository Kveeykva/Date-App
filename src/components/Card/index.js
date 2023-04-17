import React, { useEffect, useRef } from "react";
import { View, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import {
  fetchCarousel,
  selectCarousel,
} from "../../redux/Slices/carouselSlice";
import Swiper from "react-native-deck-swiper";

const CarouselPhoto = (props) => {
  const useSwiper = useRef(null).current;

  const { customStyle } = props;
  const dispatch = useDispatch();
  const carouselData = useSelector(selectCarousel);

  useEffect(() => {
    dispatch(fetchCarousel());
  }, []);
  const handleOnSwipedLeft = () => useSwiper.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.swipeTop();
  const handleOnSwipedRight = () => useSwiper.swipeRight();
  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          animateCardOpacity
          animateOverlayLabelsOpacity
          ref={useSwiper}
          showSecondCard={true}
          stackSize={2}
          cardIndex={0}
          infinite={true}
          cardVerticalMargin={80}
          backgroundColor={"white"}
          cards={carouselData.carousel}
          renderCard={(card) => {
            if (!card) return null;

            return (
              <View style={[styles.card]}>
                <Image
                  style={[styles.photo, customStyle]}
                  source={{ uri: card.photo }}
                />
                <View style={styles.photoContainer}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>
                      {card.name}, {card.age}
                    </Text>
                    <View style={styles.distanceView}>
                      <Text style={styles.distanceText}>{card.distance}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.cityText}>{card.location}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        ></Swiper>
      </View>
    </View>
  );
};
export default CarouselPhoto;
