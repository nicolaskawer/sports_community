import React from "react";
import { SafeAreaView } from "react-native";
import Navigator from "./router/Navigator";
import { GlobalStyles } from "./styles/GlobalStyles";
import { I18nManager } from 'react-native';


export default function App() {
  // אם ה rtl לא פעיל אז הוא מפעיל אותו
if (!I18nManager.isRTL) {
  I18nManager.forceRTL(true);

}
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <Navigator />
    </SafeAreaView>
  );
}