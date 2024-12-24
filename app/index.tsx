import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Index() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Hello</Text>
      <Text style={styles.subtitleText}>my name is</Text>
      <View style={styles.textboxContainer}>
        <Text style={styles.textbox}>✨ WU Yue ✨</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
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
});
