import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation/AppNavigation";
import { Text, View } from "react-native";


export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation/>
      {/* <View className="flex-1 items-center justify-center bg-white"></View> */}
      
        <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
