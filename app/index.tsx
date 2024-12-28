// start of my code
import * as ScreenOrientation from "expo-screen-orientation";
import { Text, View, StyleSheet, Animated, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
//end of my code

export default function Index() {
  // Lock screen orientation
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  // start of my code
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Gradient background */}
        <LinearGradient colors={["#FF3E3E", "#FF7676", "#FFB3B3"]} style={styles.background} />
        {/* Content container that fades in on app load */}
        <Animated.View style={[styles.contentContainer, { opacity: fadeInOpacity }]}>
          {/* Name badge content */}
          <Text style={[styles.welcomeText, styles.textShadow]}>Hello</Text>
          <Text style={[styles.subtitleText, styles.textShadow]}>my name is</Text>
          <View style={[styles.textboxContainer, styles.shadow]}>
            <Text style={[styles.textbox, styles.textShadow]}>✨ WU Yue ✨</Text>
          </View>
        </Animated.View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
//end of my code

const styles = StyleSheet.create({
  // start of my code
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
  // end of my code

  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // start of my code
    ...Platform.select({
      // 5% margin for Android devices to make it identical to the screenshot
      android: {
        margin: "5%",
      },
    }),
    // end of my code
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

  // start of my code
  shadow: {
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  // end of my code
});
