import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Aula 1 de React Native - Desenvolvimento Mobile
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffAAAA",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 43,
  },
  text: {
    fontSize: 100,
  },
});
