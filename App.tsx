import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation />
        {/* <View className="flex-1 items-center justify-center bg-white"></View> */}

        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  );
}
