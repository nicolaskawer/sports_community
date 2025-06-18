import React from "react";
import { SafeAreaView } from "react-native";
import Navigator from "./router/Navigator";
import { GlobalStyles } from "./styles/GlobalStyles";
import { I18nManager } from 'react-native';// במידה ונצטרך
import { MedicRequestProvider } from "./context/MedicRequestContext";


export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
       <MedicRequestProvider>
      <Navigator />
      </MedicRequestProvider>
    </SafeAreaView>
  );
}
