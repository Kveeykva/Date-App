import { Animated, Easing } from "react-native";

const scaleValue = new Animated.Value(1);

const onPressIn = () => {
  Animated.timing(scaleValue, {
    toValue: 1.1,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();
};

const onPressOut = () => {
  Animated.timing(scaleValue, {
    toValue: 1,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();
};

const scale = scaleValue.interpolate({
  inputRange: [1, 1.1],
  outputRange: [1, 1.1],
});

const inputStyle = {
  transform: [{ scale }],
};
