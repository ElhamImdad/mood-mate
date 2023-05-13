import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigation />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaProvider>
  );
}
