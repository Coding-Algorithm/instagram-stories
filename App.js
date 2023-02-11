import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GlobalContextProvider from "./src/context/GlobalContext/GlobalContext";
import StackNavigation from "./src/navigation/stackNavigation";

export default function App() {
  return (
    // <View style={styles.container}>
    <GlobalContextProvider>
      <StackNavigation />
    </GlobalContextProvider>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
