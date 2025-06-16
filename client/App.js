import React from "react";
import { SafeAreaView } from "react-native";
import Navigator from "./router/Navigator";
import { GlobalStyles } from "./styles/GlobalStyles";
import { I18nManager } from 'react-native';// במידה ונצטרך


export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <Navigator />
    </SafeAreaView>
  );
}
