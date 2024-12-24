import * as ScreenOrientation from "expo-screen-orientation";
import { Text, View, SafeAreaView, StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";

export default function Index() {
  // Lock screen orientation
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  // FadeInOpacity starts at 0 and smoothly increases to 1 over the course of 1 second
  const fadeInOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeInOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient background */}
      <LinearGradient colors={["#FF3E3E", "#FF7676", "#FFB3B3"]} style={styles.background} />

      {/* Content container that fades in on app load */}
      <Animated.View style={[styles.contentContainer, { opacity: fadeInOpacity }]}>
        {/* Name badge content */}
        <Text style={[styles.welcomeText, styles.shadow]}>Hello</Text>
        <Text style={[styles.subtitleText, styles.shadow]}>my name is</Text>
        <View style={[styles.textboxContainer, styles.shadow]}>
          <Text style={styles.textbox}>✨ WU Yue ✨</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "red", // fallback color
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 90,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  textboxContainer: {
    width: "100%",
    height: "55%",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
  },
  textbox: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: "bold",
  },
  shadow: {
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
});
